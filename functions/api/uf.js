/**
 * Cloudflare Pages Function - GET /api/uf
 *
 * Devuelve el valor de la UF del día desde el Banco Central de Chile
 * (Base de Datos Estadísticos - BDE), la fuente oficial que calcula la UF.
 * Se ejecuta del lado del servidor, así que:
 *   - No hay problemas de CORS (el navegador llama a /api/uf, no al BCCh).
 *   - Las credenciales quedan ocultas (variables de entorno).
 *
 * Serie utilizada: F073.UFF.PRE.Z.D (Unidad de Fomento, diaria).
 *
 * Configuración necesaria en Cloudflare Pages
 *   Settings → Environment variables:
 *     BCCH_USER = <correo con que te registraste en el BCCh>
 *     BCCH_PASS = <tu contraseña del BCCh>
 *
 * Respuesta: { "uf": 39180, "fecha": "25-06-2026" }
 */
const SERIE_UF = "F073.UFF.PRE.Z.D";

const fmtFecha = (d) => d.toISOString().slice(0, 10); // YYYY-MM-DD

export async function onRequestGet({ env }) {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    // Cache en el edge de Cloudflare: la UF cambia 1 vez al día
    "cache-control": "public, max-age=3600",
    "access-control-allow-origin": "*",
  };

  // ⚠️ TEMPORAL: credenciales embebidas hasta configurar las variables de
  // entorno en Cloudflare. Cuando cargues BCCH_USER / BCCH_PASS en el panel,
  // esas tendrán prioridad; borra los valores de respaldo de abajo entonces.
  const user = env.BCCH_USER || "diego@lauken.cl";
  const pass = env.BCCH_PASS || "Diegohs11";
  if (!user || !pass) {
    return new Response(
      JSON.stringify({ error: "Credenciales del BCCh no configuradas" }),
      { status: 500, headers }
    );
  }

  try {
    // Ventana de los últimos días para asegurar tener el último valor publicado
    const hasta = new Date();
    const desde = new Date();
    desde.setDate(hasta.getDate() - 7);

    const url =
      "https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx" +
      `?user=${encodeURIComponent(user)}` +
      `&pass=${encodeURIComponent(pass)}` +
      "&function=GetSeries" +
      `&timeseries=${SERIE_UF}` +
      `&firstdate=${fmtFecha(desde)}` +
      `&lastdate=${fmtFecha(hasta)}`;

    const respuesta = await fetch(url, { cf: { cacheTtl: 3600, cacheEverything: true } });
    const data = await respuesta.json();

    const obs = data?.Series?.Obs || [];

    // Última observación con valor numérico válido (se descartan los "NaN")
    let valor = 0;
    let fecha = null;
    for (let i = obs.length - 1; i >= 0; i--) {
      const v = Number(obs[i]?.value);
      if (obs[i]?.value && obs[i].value !== "NaN" && !Number.isNaN(v) && v > 0) {
        valor = Math.round(v);
        fecha = obs[i].indexDateString ?? null;
        break;
      }
    }

    if (!valor) {
      return new Response(
        JSON.stringify({ error: "Respuesta del BCCh sin valor de UF válido" }),
        { status: 502, headers }
      );
    }

    return new Response(JSON.stringify({ uf: valor, fecha }), { status: 200, headers });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "No se pudo obtener la UF desde el Banco Central" }),
      { status: 502, headers }
    );
  }
}
