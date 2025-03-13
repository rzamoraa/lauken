import React from 'react';
import { motion } from "framer-motion";

function Title({video, logoproyecto, brochurePdf, showBrochureButton = false}) {
  // Función para manejar la apertura del PDF desde Google Cloud Storage
  const handleBrochureClick = () => {
    if (brochurePdf) {
      // Si ya es una URL completa, úsala directamente
      if (brochurePdf.startsWith('http')) {
        window.open(brochurePdf, '_blank');
      }
      // Si es una ruta relativa en Google Cloud Storage
      else {
        // Formato común para URLs públicas de Google Cloud Storage
        // https://storage.googleapis.com/[BUCKET_NAME]/[OBJECT_NAME]
        const fullUrl = `https://storage.googleapis.com/${brochurePdf}`;
        window.open(fullUrl, '_blank');
      }
    }
  };

  return (
    <section
      id="title"
      className="relative h-[45vh] flex flex-col justify-center items-center"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm b"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
     
      {/* SVG del logo centrado */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="opacity-50">
          <img src={logoproyecto} alt="Logo" className="w-36 h-36 sm:w-64 sm:h-64 mt-10" />
        </div>
      </div>
      
      {/* Botón fijo para descargar brochure en la esquina inferior izquierda */}
      {showBrochureButton && brochurePdf && (
        <motion.button
          className="fixed bottom-6 left-6 z-50 bg-[#F0B94D] hover:bg-[#E0A93D] text-black font-bold py-2 px-4 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out text-sm md:text-base flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBrochureClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Descargar Brochure</span>
        </motion.button>
      )}
    </section>
  );
}

export default Title;