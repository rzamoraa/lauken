import React from "react";
import SectionTitle from "../SectionTitle";

/**
 * AttributesWithIcons - Sección de atributos del proyecto con iconos
 * 
 * @param {string} texto - Descripción del proyecto
 * @param {string} image - Imagen de fondo para la sección de iconos
 * @param {Array} attributes - Array de objetos con { name, value, icon }
 */
function AttributesWithIcons({ texto, image, attributes = [] }) {
  // Si se pasan props individuales (legacy), convertir a array
  const stats = attributes.length > 0 ? attributes : [];

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

      {/* Imagen de fondo con características */}
      <div className="relative py-14 md:py-18 lg:py-20 overflow-hidden">
        {/* Imagen de fondo */}
        <img
          alt="Características del proyecto"
          src={image || "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&auto=format&fit=crop&q=60"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Grid de características */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              if (!Icon) return null;
              
              return (
                <div
                  key={stat.id || index}
                  className="text-center group"
                >
                  {/* Círculo con icono */}
                  <div className="
                    mx-auto mb-4 
                    w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                    rounded-full 
                    border-3 md:border-4 border-white 
                    flex items-center justify-center 
                    bg-white/5 
                    group-hover:bg-white/15 
                    transition-all duration-300
                  ">
                    <Icon 
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  {/* Texto */}
                  <div className="space-y-1">
                    <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold">
                      {stat.name}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base font-light">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttributesWithIcons;
