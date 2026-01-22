import React from 'react';

/**
 * HeroBanner - Banner principal con video de fondo para páginas de proyecto
 * 
 * @param {string} precio - Precio o rango de precios
 * @param {string} texto1 - Texto descriptivo (ubicación, metros, etc.)
 * @param {string} texto2 - Texto secundario (número de parcelas, etc.)
 * @param {string} video - URL del video de fondo
 * @param {string} badge - Texto del badge (default: "Proyecto Exclusivo")
 */
function HeroBanner({ 
  precio, 
  texto1, 
  texto2, 
  video,
  badge = "Proyecto Exclusivo"
}) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-end justify-center pb-12 md:pb-16 text-white overflow-hidden bg-slate-800"
    >
      {/* Video de fondo */}
      {video && (
        <video
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
          //className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-6">
        <div className="
          bg-gradient-to-r from-black/70 via-black/60 to-black/70
          py-8 md:py-10 px-6 md:px-10
          rounded-xl
          border border-[#F0B94D]/60
          shadow-2xl
          backdrop-blur-sm
        ">
          {/* Badge decorativo */}
          <div className="
            absolute -top-3 left-1/2 -translate-x-1/2
            bg-[#F0B94D] text-black 
            font-bold text-xs md:text-sm 
            px-4 py-1.5 
            rounded-full
            shadow-lg
          ">
            {badge}
          </div>

          {/* Precio */}
          <h1 className="
            text-[#F0B94D] 
            font-extrabold 
            text-2xl md:text-3xl lg:text-4xl 
            tracking-wide 
            mb-3 md:mb-4
            text-center
          ">
            {precio}
          </h1>

          {/* Descripción */}
          <div className="text-center">
            <span className="text-white text-sm md:text-base font-medium">
              {texto1}
            </span>
            
            {texto2 && (
              <>
                <span className="mx-2 md:mx-3 text-[#F0B94D]">•</span>
                <span className="text-white text-sm md:text-base font-medium">
                  {texto2}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
