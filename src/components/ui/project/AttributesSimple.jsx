import React from "react";

/**
 * AttributesSimple - Sección de descripción del proyecto (versión simple)
 * 
 * @param {string} texto - Descripción del proyecto
 * @param {string} image - Imagen destacada del proyecto
 */
function AttributesSimple({ texto, image }) {
  return (
    <section id="atributos" className="relative">
      {/* Banner superior con título */}
      <div className="w-full bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Descripción del proyecto
          </h2>
        </div>
      </div>

      {/* Texto descriptivo */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 text-center max-w-4xl mx-auto">
          {texto}
        </p>
      </div>

      {/* Imagen destacada */}
      {image && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt="Imagen del proyecto" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default AttributesSimple;
