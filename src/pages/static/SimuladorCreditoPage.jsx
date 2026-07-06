import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calculator, Wallet, CalendarClock, Minus, Plus, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toPng } from "html-to-image";

/**
 * SimuladorCreditoPage - Simulador de crédito / plan de pago para parcelas
 *
 * Lógica (amortización francesa):
 *   pie ($)            = monto ingresado (o % del precio)
 *   saldo en cuotas    = precio - pie
 *   cuota mensual      = saldo * i / (1 - (1+i)^-n)   con i = interés mensual
 *   total en cuotas    = cuota * n
 *   valor total operación = pie + total en cuotas
 */

// Tasa de interés: UF + 10% anual (nominal → mensual = 10% / 12)
const TASA_ANUAL = 0.1;
const INTERES_MENSUAL = TASA_ANUAL / 12;

// Rango de cuotas mensuales permitido
const PLAZO_MIN = 4;
const PLAZO_MAX = 24;

// Pie mínimo exigido (% del precio)
const PIE_MINIMO_PCT = 50;

// Valor UF por defecto (respaldo si la API no responde) y endpoint propio
// (Cloudflare Pages Function que consulta al Banco Central, fuente oficial)
const UF_DEFAULT = 40807;
const UF_API = "/api/uf";

// Número de WhatsApp de Lauken (mismo del botón flotante)
const WHATSAPP_NUMBER = "56966440166";

// Formateo de moneda en pesos chilenos
const formatCLP = (valor) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(valor || 0));

// Formatea un valor en UF (2 decimales)
const formatUF = (valor) =>
  `${new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor || 0)} UF`;

// Convierte un texto a número (solo dígitos)
const parseNumber = (texto) => Number(String(texto).replace(/\D/g, "")) || 0;

const HOY = new Date().toISOString().slice(0, 10);

function SimuladorCreditoPage() {
  // Plan de pago
  const [precio, setPrecio] = useState(0);
  const [pieModo, setPieModo] = useState("porcentaje"); // 'monto' | 'porcentaje'
  const [pieValor, setPieValor] = useState(PIE_MINIMO_PCT);
  const [plazoMeses, setPlazoMeses] = useState(12);
  const [fecha] = useState(HOY);

  // Valor de la UF del día (se trae de la API; no editable)
  const [valorUF, setValorUF] = useState(UF_DEFAULT);

  useEffect(() => {
    let activo = true;
    fetch(UF_API)
      .then((r) => r.json())
      .then((data) => {
        const valor = Math.round(data?.uf || 0);
        if (activo && valor > 0) {
          setValorUF(valor);
        }
      })
      .catch(() => {
        /* La API no respondió: se mantiene el valor por defecto */
      });
    return () => {
      activo = false;
    };
  }, []);

  // Pie mínimo exigido (50% del precio)
  const pieMinimoMonto = Math.round((precio * PIE_MINIMO_PCT) / 100);

  // Monto del pie según el modo activo, nunca por debajo del mínimo (50%)
  const rawPieMonto =
    pieModo === "porcentaje" ? Math.round((precio * pieValor) / 100) : pieValor;
  const pieMonto = precio > 0 ? Math.max(rawPieMonto, pieMinimoMonto) : rawPieMonto;
  const piePct = precio > 0 ? (pieMonto / precio) * 100 : 0;
  const pieSuficiente = precio > 0;

  // Alterna entre ingresar el pie como % o como $ (convirtiendo el valor)
  const cambiarModoPie = (modo) => {
    if (modo === pieModo) return;
    if (modo === "porcentaje") {
      setPieValor(
        precio > 0
          ? Math.max(PIE_MINIMO_PCT, Number(((pieMonto / precio) * 100).toFixed(2)))
          : PIE_MINIMO_PCT
      );
    } else {
      setPieValor(Math.max(pieMonto, pieMinimoMonto));
    }
    setPieModo(modo);
  };

  // Al ingresar el precio, ajusta el pie para que nunca quede bajo el 50%
  const handlePrecio = (nuevo) => {
    setPrecio(nuevo);
    if (pieModo === "monto") {
      const min = Math.round((nuevo * PIE_MINIMO_PCT) / 100);
      setPieValor((v) => Math.max(v, min));
    } else {
      setPieValor((v) => Math.max(v, PIE_MINIMO_PCT));
    }
  };

  // Fuerza el pie al mínimo (50%) al salir del campo
  const aplicarPieMinimo = () => {
    if (precio <= 0) return;
    setPieValor((v) =>
      pieModo === "porcentaje"
        ? Math.max(PIE_MINIMO_PCT, v)
        : Math.max(pieMinimoMonto, v)
    );
  };

  const ajustarCuotas = (n) =>
    setPlazoMeses(Math.min(PLAZO_MAX, Math.max(PLAZO_MIN, n)));

  const resultado = useMemo(() => {
    const saldoEnCuotas = Math.max(precio - pieMonto, 0);
    const i = INTERES_MENSUAL;
    const n = plazoMeses;
    let cuotaMensual = 0;
    if (n > 0) {
      cuotaMensual =
        i > 0 ? (saldoEnCuotas * i) / (1 - Math.pow(1 + i, -n)) : saldoEnCuotas / n;
    }
    const totalEnCuotas = cuotaMensual * n;
    const valorTotal = pieMonto + totalEnCuotas;
    const saldoPieAPagar = pieMonto;

    return { saldoEnCuotas, cuotaMensual, totalEnCuotas, valorTotal, saldoPieAPagar };
  }, [precio, pieMonto, plazoMeses]);

  // Cuota mensual estimada expresada también en UF
  const cuotaUF = valorUF > 0 ? resultado.cuotaMensual / valorUF : 0;

  // La simulación es válida solo con precio y pie >= 50%
  const hayDatos = pieSuficiente;

  // Generación / descarga / compartido de la cotización como imagen
  const cotizacionRef = useRef(null);
  const [descargando, setDescargando] = useState(false);
  const [compartiendo, setCompartiendo] = useState(false);

  const nombreArchivo = () => `cotizacion-lauken-${fecha}.png`;

  // Genera el PNG de la cotización (excluyendo los botones de acción)
  const generarImagen = () =>
    toPng(cotizacionRef.current, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#1e293b",
      filter: (node) => !(node.classList && node.classList.contains("no-capture")),
    });

  const descargarImagen = async () => {
    if (!cotizacionRef.current) return;
    setDescargando(true);
    try {
      const dataUrl = await generarImagen();
      const link = document.createElement("a");
      link.download = nombreArchivo();
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("No se pudo generar la imagen de la cotización", error);
    } finally {
      setDescargando(false);
    }
  };

  // Texto para compartir por WhatsApp
  const mensajeTexto = [
    "Hola, simulé el siguiente plan de pago en Lauken Inmobiliaria:",
    "",
    `• Precio de la parcela: ${formatCLP(precio)}`,
    `• Pie inicial (${Math.round(piePct)}%): ${formatCLP(pieMonto)}`,
    `• Plazo: ${plazoMeses} cuotas mensuales`,
    "• Tasa: UF + 10% anual",
    `• Cuota mensual estimada: ${formatCLP(resultado.cuotaMensual)} (≈ ${formatUF(cuotaUF)})`,
    `• Total en cuotas: ${formatCLP(resultado.totalEnCuotas)}`,
    `• Valor total de la operación: ${formatCLP(resultado.valorTotal)}`,
    "",
    "Me gustaría recibir más información.",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeTexto)}`;

  // ¿El navegador permite compartir archivos? (móviles con Web Share API)
  const puedeCompartirArchivos = () => {
    try {
      return (
        typeof navigator !== "undefined" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [new File([""], "t.png", { type: "image/png" })] })
      );
    } catch {
      return false;
    }
  };

  // Comparte la cotización por WhatsApp.
  // En móviles con Web Share API: abre el menú nativo con la IMAGEN + texto.
  // En escritorio / sin soporte: abre WhatsApp solo con el texto (wa.me no admite adjuntos).
  const compartirWhatsApp = async () => {
    if (!hayDatos) return;

    // Fallback (escritorio / sin soporte): se abre dentro del gesto del clic
    if (!cotizacionRef.current || !puedeCompartirArchivos()) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Móvil: compartir imagen + texto por el menú nativo
    setCompartiendo(true);
    try {
      const dataUrl = await generarImagen();
      const blob = await (await fetch(dataUrl)).blob();
      const archivo = new File([blob], nombreArchivo(), { type: "image/png" });
      await navigator.share({
        files: [archivo],
        title: "Cotización Lauken Inmobiliaria",
        text: mensajeTexto,
      });
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("No se pudo compartir la imagen, se usará texto", error);
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setCompartiendo(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/30 outline-none text-slate-800 font-medium transition bg-white";

  return (
    <div className="bg-slate-50 min-h-screen pt-28 md:pt-32 pb-16">
      {/* Encabezado */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center mb-10">
        <div className="inline-flex items-center justify-center gap-3 mb-3">
          <Calculator className="w-8 h-8 md:w-10 md:h-10 text-[#F0B94D]" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Simulador de Crédito
          </h1>
        </div>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
          Completa el plan de pago para ver tu cuota mensual estimada.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Columna de entradas */}
        <div className="space-y-6 md:space-y-8">
          {/* Tarjeta: Plan de pago */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg bg-[#F0B94D]/15 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-[#F0B94D]" />
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-800">Plan de pago</h2>
                <p className="text-xs text-slate-400">Precio, pie y cuotas mensuales</p>
              </div>

              {/* Valor UF de hoy (no editable) */}
              <div className="ml-auto">
                <span className="block text-[10px] font-semibold tracking-wide text-slate-400 uppercase text-right">
                  UF de hoy
                </span>
                <div className="relative mt-0.5">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="text"
                    value={valorUF ? valorUF.toLocaleString("es-CL") : ""}
                    disabled
                    aria-label="Valor UF de hoy"
                    className="w-28 pl-6 pr-2 py-1.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-600 font-semibold text-sm text-right cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Precio de la parcela */}
            <label className="block mb-5">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Precio de la parcela
              </span>
              <div className="mt-1.5 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={precio ? precio.toLocaleString("es-CL") : ""}
                  onChange={(e) => handlePrecio(parseNumber(e.target.value))}
                  placeholder="0"
                  className={`${inputBase} pl-8 font-semibold`}
                />
              </div>
            </label>

            {/* Pie inicial con toggle % / $ */}
            <label className="block mb-5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Pie inicial
                </span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5">
                  {[
                    { id: "porcentaje", label: "%" },
                    { id: "monto", label: "$" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => cambiarModoPie(opt.id)}
                      className={`px-3 py-1 text-sm font-bold rounded-md transition ${
                        pieModo === opt.id
                          ? "bg-white text-slate-800 shadow-sm"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-1.5 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {pieModo === "monto" ? "$" : "%"}
                </span>
                {pieModo === "monto" ? (
                  <input
                    type="text"
                    inputMode="numeric"
                    value={pieValor ? pieValor.toLocaleString("es-CL") : ""}
                    onChange={(e) => setPieValor(parseNumber(e.target.value))}
                    onBlur={aplicarPieMinimo}
                    placeholder="0"
                    className={`${inputBase} pl-8 font-semibold`}
                  />
                ) : (
                  <input
                    type="number"
                    min={PIE_MINIMO_PCT}
                    max="100"
                    step="0.1"
                    value={pieValor || ""}
                    onChange={(e) => setPieValor(Number(e.target.value))}
                    onBlur={aplicarPieMinimo}
                    placeholder="0"
                    className={`${inputBase} pl-8 font-semibold`}
                  />
                )}
              </div>
              {precio > 0 && pieMonto > 0 && (
                <span className="text-sm font-semibold text-[#F0B94D] mt-1.5 block">
                  {pieModo === "monto"
                    ? `= ${piePct.toLocaleString("es-CL", { maximumFractionDigits: 1 })}%`
                    : `= ${formatCLP(pieMonto)}`}
                </span>
              )}
              {precio > 0 && (
                <span className="text-xs text-slate-400 mt-1 block">
                  Mínimo {PIE_MINIMO_PCT}% del precio ({formatCLP(pieMinimoMonto)}).
                </span>
              )}
            </label>

            {/* Cuotas mensuales: stepper + slider */}
            <div>
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5 text-[#F0B94D]" /> Cuotas mensuales
              </span>
              <div className="mt-2 flex items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => ajustarCuotas(plazoMeses - 1)}
                  className="w-12 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition"
                  aria-label="Restar una cuota"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="flex-1 rounded-lg bg-slate-800 text-white flex items-center justify-center gap-2 py-3">
                  <span className="text-3xl font-extrabold leading-none">{plazoMeses}</span>
                  <span className="text-sm text-slate-300">meses</span>
                </div>
                <button
                  type="button"
                  onClick={() => ajustarCuotas(plazoMeses + 1)}
                  className="w-12 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition"
                  aria-label="Sumar una cuota"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <input
                type="range"
                min={PLAZO_MIN}
                max={PLAZO_MAX}
                step="1"
                value={plazoMeses}
                onChange={(e) => setPlazoMeses(Number(e.target.value))}
                className="mt-3 w-full accent-[#F0B94D]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>{PLAZO_MIN}</span>
                <span>{PLAZO_MAX}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna de resultados */}
        <div
          ref={cotizacionRef}
          className="bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 text-white lg:sticky lg:top-28"
        >
          {/* Encabezado de marca */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="text-sm font-bold tracking-wide text-white">
              LAUKEN <span className="text-[#F0B94D]">INMOBILIARIA</span>
            </span>
            <span className="text-xs text-slate-400">
              {fecha ? fecha.split("-").reverse().join("-") : ""}
            </span>
          </div>

          {/* Cuota mensual destacada */}
          <div className="bg-white/5 rounded-xl p-5 mb-4 border border-white/10">
            <p className="text-xs tracking-wide text-slate-300 uppercase">
              Cuota mensual estimada
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              {hayDatos ? formatCLP(resultado.cuotaMensual) : "—"}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {hayDatos ? `≈ ${formatUF(cuotaUF)} · ` : ""}
              {plazoMeses} cuotas mensuales
            </p>
          </div>

          {/* Dos recuadros: Total en cuotas / Saldo en cuotas */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs tracking-wide text-slate-300 uppercase">Total en cuotas</p>
              <p className="text-lg font-bold text-white mt-1">
                {hayDatos ? formatCLP(resultado.totalEnCuotas) : "—"}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs tracking-wide text-slate-300 uppercase">Saldo en cuotas</p>
              <p className="text-lg font-bold text-[#F0B94D] mt-1">
                {hayDatos ? formatCLP(resultado.saldoEnCuotas) : "—"}
              </p>
            </div>
          </div>

          {/* Valor total de la operación */}
          <div className="bg-[#F0B94D]/10 border border-[#F0B94D]/30 rounded-xl p-4 mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Valor total de la operación</p>
              <p className="text-xs text-slate-300">Pie + total en cuotas</p>
            </div>
            <p className="text-xl md:text-2xl font-extrabold text-[#F0B94D]">
              {hayDatos ? formatCLP(resultado.valorTotal) : "—"}
            </p>
          </div>

          {/* Desglose del plan de pago */}
          <p className="text-xs tracking-wide text-slate-300 uppercase mb-2">
            Desglose del plan de pago
          </p>
          <dl className="space-y-2.5 text-sm border-t border-white/10 pt-3">
            <div className="flex justify-between">
              <dt className="text-slate-300">Precio de la parcela</dt>
              <dd className="font-semibold">{hayDatos ? formatCLP(precio) : "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-300">Pie ({Math.round(piePct)}%)</dt>
              <dd className="font-semibold">{hayDatos ? formatCLP(pieMonto) : "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-300">Saldo del pie a pagar</dt>
              <dd className="font-semibold">{hayDatos ? formatCLP(resultado.saldoPieAPagar) : "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-300">Saldo en cuotas</dt>
              <dd className="font-semibold">{hayDatos ? formatCLP(resultado.saldoEnCuotas) : "—"}</dd>
            </div>
          </dl>

          {/* Notas */}
          <div className="mt-5 space-y-3 text-xs text-slate-300/90">
            <p>
              Valores referenciales. Corresponde a una compraventa con precio pactado y
              facilidades de pago directas, no constituyendo un crédito ni operación
              financiera.
            </p>
          </div>

          {/* Acciones (no se incluyen en la imagen descargada) */}
          <div className="no-capture mt-6 space-y-3">
            <button
              type="button"
              onClick={compartirWhatsApp}
              disabled={!hayDatos || compartiendo}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition ${
                hayDatos && !compartiendo
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white/10 text-slate-400 cursor-not-allowed"
              }`}
            >
              <FaWhatsapp className="w-5 h-5" />
              {compartiendo ? "Preparando…" : "Compartir por WhatsApp"}
            </button>

            <button
              type="button"
              onClick={descargarImagen}
              disabled={!hayDatos || descargando}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition ${
                hayDatos && !descargando
                  ? "bg-[#F0B94D] hover:bg-[#E0A93D] text-white"
                  : "bg-white/10 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Download className="w-5 h-5" />
              {descargando ? "Generando imagen…" : "Descargar imagen de cotización"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimuladorCreditoPage;
