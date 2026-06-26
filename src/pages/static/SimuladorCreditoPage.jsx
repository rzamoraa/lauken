import React, { useMemo, useRef, useState } from "react";
import {
  Calculator,
  Home,
  Wallet,
  CalendarClock,
  MapPin,
  Hash,
  User,
  Calendar,
  Minus,
  Plus,
  Download,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toPng } from "html-to-image";
import { getProjectCards } from "../../data/projects";

/**
 * SimuladorCreditoPage - Simulador de crédito / plan de pago para parcelas
 *
 * Lógica (amortización francesa, igual que el simulador de referencia):
 *   pie ($)            = monto ingresado (o % del precio)
 *   saldo en cuotas    = precio - pie
 *   cuota mensual      = saldo * i / (1 - (1+i)^-n)   con i = interés mensual
 *   total en cuotas    = cuota * n
 *   valor total operación = pie + total en cuotas
 *   La reserva (editable) se descuenta del pie al momento de la firma.
 */

// Interés mensual aplicado al saldo financiado (según referencia: 3% mensual)
const INTERES_MENSUAL = 0.03;

// Reserva por defecto que se descuenta del pie al firmar
const RESERVA_DEFAULT = 250000;

// Rango de cuotas mensuales permitido
const PLAZO_MIN = 4;
const PLAZO_MAX = 44;

// Número de WhatsApp de Lauken (mismo del botón flotante)
const WHATSAPP_NUMBER = "56966440166";

// Formateo de moneda en pesos chilenos
const formatCLP = (valor) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(valor || 0));

// Convierte un texto a número (solo dígitos)
const parseNumber = (texto) => Number(String(texto).replace(/\D/g, "")) || 0;

const HOY = new Date().toISOString().slice(0, 10);

function SimuladorCreditoPage() {
  // Parcelas disponibles: activas, no vendidas y no "Próximamente"
  const parcelas = useMemo(
    () => getProjectCards().filter((p) => p.activo && !p.vendido && !p.pronto),
    []
  );

  // Datos del proyecto / cliente
  const [parcelaId, setParcelaId] = useState("");
  const [unidad, setUnidad] = useState("");
  const [fecha, setFecha] = useState(HOY);
  const [cliente, setCliente] = useState("");
  const [reserva, setReserva] = useState(RESERVA_DEFAULT);

  // Plan de pago
  const [precio, setPrecio] = useState(0);
  const [pieModo, setPieModo] = useState("monto"); // 'monto' | 'porcentaje'
  const [pieValor, setPieValor] = useState(0);
  const [plazoMeses, setPlazoMeses] = useState(24);

  const parcelaSeleccionada = parcelas.find((p) => p.id === parcelaId) || null;

  // Monto del pie según el modo activo
  const pieMonto =
    pieModo === "porcentaje" ? Math.round((precio * pieValor) / 100) : pieValor;
  const piePct = precio > 0 ? (pieMonto / precio) * 100 : 0;

  // Alterna entre ingresar el pie como % o como $ (convirtiendo el valor)
  const cambiarModoPie = (modo) => {
    if (modo === pieModo) return;
    if (modo === "porcentaje") {
      setPieValor(precio > 0 ? Number((pieMonto / precio * 100).toFixed(2)) : 0);
    } else {
      setPieValor(pieMonto);
    }
    setPieModo(modo);
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
    const saldoPieAPagar = Math.max(pieMonto - reserva, 0);

    return { saldoEnCuotas, cuotaMensual, totalEnCuotas, valorTotal, saldoPieAPagar };
  }, [precio, pieMonto, plazoMeses, reserva]);

  const hayDatos = precio > 0;

  // Generación / descarga / compartido de la cotización como imagen
  const cotizacionRef = useRef(null);
  const [descargando, setDescargando] = useState(false);
  const [compartiendo, setCompartiendo] = useState(false);

  const nombreArchivo = () =>
    `cotizacion-${
      [parcelaSeleccionada?.titulo, unidad]
        .filter(Boolean)
        .join("-")
        .replace(/\s+/g, "-")
        .toLowerCase() || "lauken"
    }.png`;

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
    parcelaSeleccionada ? `• Proyecto: ${parcelaSeleccionada.titulo}` : null,
    unidad ? `• N° unidad/lote: ${unidad}` : null,
    cliente ? `• Cliente: ${cliente}` : null,
    `• Precio de la parcela: ${formatCLP(precio)}`,
    `• Pie inicial (${Math.round(piePct)}%): ${formatCLP(pieMonto)}`,
    `• Reserva: ${formatCLP(reserva)}`,
    `• Plazo: ${plazoMeses} cuotas mensuales`,
    `• Cuota mensual estimada: ${formatCLP(resultado.cuotaMensual)}`,
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
          Completa los datos del proyecto y el plan de pago para ver tu cuota
          mensual estimada.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Columna de entradas */}
        <div className="space-y-6 md:space-y-8">
          {/* Tarjeta: Datos del proyecto */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg bg-[#F0B94D]/15 flex items-center justify-center">
                <Home className="w-5 h-5 text-[#F0B94D]" />
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-800">Datos del proyecto</h2>
                <p className="text-xs text-slate-400">Información del inmueble y cliente</p>
              </div>
            </div>

            {/* Proyecto */}
            <label className="block mb-5">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F0B94D]" /> Proyecto
              </span>
              <select
                value={parcelaId}
                onChange={(e) => setParcelaId(e.target.value)}
                className={`mt-1.5 ${inputBase}`}
              >
                <option value="">— Selecciona una parcela —</option>
                {parcelas.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.titulo}
                  </option>
                ))}
              </select>
            </label>

            {/* N° Unidad + Fecha */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-[#F0B94D]" /> N° Unidad
                </span>
                <input
                  type="text"
                  value={unidad}
                  onChange={(e) => setUnidad(e.target.value)}
                  placeholder="Lote 12"
                  className={`mt-1.5 ${inputBase}`}
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F0B94D]" /> Fecha
                </span>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className={`mt-1.5 ${inputBase}`}
                />
              </label>
            </div>

            {/* Cliente */}
            <label className="block mb-5">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#F0B94D]" /> Cliente
              </span>
              <input
                type="text"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                placeholder="Nombre del cliente"
                className={`mt-1.5 ${inputBase}`}
              />
            </label>

            {/* Reserva */}
            <label className="block">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Reserva
              </span>
              <div className="mt-1.5 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={reserva ? reserva.toLocaleString("es-CL") : ""}
                  onChange={(e) => setReserva(parseNumber(e.target.value))}
                  placeholder="0"
                  className={`${inputBase} pl-8 font-semibold`}
                />
              </div>
              <span className="text-xs text-slate-400 mt-1.5 block">
                Se descuenta del pie al momento de la firma.
              </span>
            </label>
          </div>

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
                  onChange={(e) => setPrecio(parseNumber(e.target.value))}
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
                    placeholder="0"
                    className={`${inputBase} pl-8 font-semibold`}
                  />
                ) : (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={pieValor || ""}
                    onChange={(e) => setPieValor(Number(e.target.value))}
                    placeholder="0"
                    className={`${inputBase} pl-8 font-semibold`}
                  />
                )}
              </div>
              {hayDatos && pieMonto > 0 && (
                <span className="text-sm font-semibold text-[#F0B94D] mt-1.5 block">
                  {pieModo === "monto"
                    ? `= ${piePct.toLocaleString("es-CL", { maximumFractionDigits: 1 })}%`
                    : `= ${formatCLP(pieMonto)}`}
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

          {/* Parcela / unidad / cliente */}
          {(parcelaSeleccionada || unidad || cliente) && (
            <p className="text-sm text-[#F0B94D] font-medium mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {[parcelaSeleccionada?.titulo, unidad ? `Unidad ${unidad}` : null, cliente]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          {/* Cuota mensual destacada */}
          <div className="bg-white/5 rounded-xl p-5 mb-4 border border-white/10">
            <p className="text-xs tracking-wide text-slate-300 uppercase">
              Cuota mensual estimada
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              {hayDatos ? formatCLP(resultado.cuotaMensual) : "—"}
            </p>
            <p className="text-xs text-slate-400 mt-1">{plazoMeses} cuotas mensuales</p>
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
              <dt className="text-slate-300">Reserva (descuento del pie)</dt>
              <dd className="font-semibold">− {formatCLP(reserva)}</dd>
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
              La reserva de {formatCLP(reserva)} se descuenta del pie al momento de la
              firma. Valores referenciales sujetos a condiciones comerciales vigentes.
            </p>
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
