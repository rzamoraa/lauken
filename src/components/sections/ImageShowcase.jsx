import React from 'react';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';

/**
 * Nosotros - Sección de galería de imágenes de la empresa
 * 
 * Muestra una cuadrícula de imágenes representativas
 * de los proyectos de Lauken Inmobiliaria
 * 
 * Layout: 2 columnas
 * - Izquierda: 1 imagen grande (altura completa)
 * - Derecha: 2 imágenes apiladas (cada una ocupa 50% de la altura)
 */

// Configuración de imágenes
const images = [
  { src: p3, alt: 'Vista panorámica Lago Rapel' },      // Imagen grande izquierda
  { src: p1, alt: 'Proyecto Costa Pulín' },             // Imagen derecha superior
  { src: p2, alt: 'Desarrollo Entre Valles' },          // Imagen derecha inferior
];

function ImageShowcase() {
  // Gap entre imágenes (debe coincidir con el gap del grid)
  const gapClass = 'gap-3 md:gap-4';
  
  return (
    <section id="nosotros" className=" pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* 
          Grid de 2 columnas con altura fija
          La altura total está definida para que ambas columnas sean iguales
        */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gapClass} h-auto lg:h-[500px] xl:h-[600px]`}>
          
          {/* Columna Izquierda - 1 imagen grande que ocupa toda la altura */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group h-[300px] sm:h-[400px] lg:h-full">
            <img
              alt={images[0].alt}
              src={images[0].src}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Columna Derecha - 2 imágenes apiladas que suman la misma altura */}
          <div className={`grid grid-rows-2 ${gapClass} h-[300px] sm:h-[400px] lg:h-full`}>
            {/* Imagen superior derecha */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                alt={images[1].alt}
                src={images[1].src}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Imagen inferior derecha */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                alt={images[2].alt}
                src={images[2].src}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageShowcase;

