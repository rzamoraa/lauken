import React from "react";
import down from '../../assets/icons/Tdown.svg';

/**
 * SectionDivider - Separador decorativo entre secciones
 * 
 * @param {string} title - Texto opcional para mostrar en el separador
 * @param {boolean} showIcon - Mostrar icono decorativo (default: true)
 * @param {string} variant - Variante: 'gradient' | 'line' | 'minimal'
 */
function SectionDivider({ title, showIcon = true, variant = 'gradient' }) {
  const variants = {
    gradient: 'bg-gradient-to-r from-[#E9E8E4] via-[#C8C8C8] to-[#E9E8E4]',
    line: 'bg-gray-200',
    minimal: 'bg-transparent',
  };

  return (
    <div className="py-4 md:py-6">
      {showIcon && (
        <img 
          src={down} 
          alt="" 
          className="mx-auto mb-2 w-6 h-6 md:w-8 md:h-8 opacity-60" 
        />
      )}
      
      {title && (
        <div className={`
          text-center 
          py-2 md:py-3 
          text-sm md:text-base 
          text-gray-600
          ${variants[variant]}
        `}>
          {title}
        </div>
      )}
    </div>
  );
}

export default SectionDivider;