import React from "react";
import { Download } from "lucide-react";
import SectionTitle from "../SectionTitle";

/**
 * Folleto - Sección de descarga de folleto/brochure
 * 
 * @param {string} mocap - Imagen del mockup del folleto
 * @param {string} fondo - Imagen de fondo de la sección
 * @param {string} linkfolleto - URL del PDF para descargar
 * @param {string} title - Título de la sección (default: "FOLLETO")
 */
export default function Folleto({ mocap, fondo, linkfolleto, title = "FOLLETO" }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = linkfolleto;
    link.download = 'Lauken_Folleto.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="folleto" className="relative">
      {/* Título de la sección */}
      <SectionTitle title={title} />

      {/* Contenido principal con fondo */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-14 md:pb-16">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Contenido */}
          <div className="
            relative 
            px-6 md:px-10 lg:px-16 
            py-14 md:py-18 lg:py-20
            flex flex-col lg:flex-row 
            items-center justify-center 
            gap-8 lg:gap-16
          ">
            {/* Mockup del folleto */}
            <div className="flex-shrink-0">
              <img
                alt="Mockup del folleto"
                src={mocap}
                className="
                  max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] 
                  drop-shadow-2xl
                  hover:scale-105 transition-transform duration-300
                "
              />
            </div>

            {/* Texto y botón */}
            <div className="text-center lg:text-left lg:max-w-md">
              {/* Botón de descarga */}
              <button
                onClick={handleDownload}
                className="
                  inline-flex items-center gap-3
                  bg-[#F0B94D] hover:bg-[#E0A93D] 
                  px-8 md:px-10 py-4 md:py-5 
                  text-lg md:text-xl font-bold text-white 
                  rounded-lg shadow-lg 
                  hover:shadow-xl hover:scale-105 
                  transition-all duration-300 
                  mb-6 md:mb-8
                "
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                DESCARGAR AQUÍ
              </button>

              {/* Texto descriptivo */}
              <p className="
                text-base md:text-lg lg:text-xl 
                font-medium text-white 
                leading-relaxed 
                drop-shadow-lg
              ">
                Infórmate de todos los detalles de nuestras increíbles parcelas,
                imágenes exclusivas, ubicación, planos, zonas cercanas y mucho más.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
