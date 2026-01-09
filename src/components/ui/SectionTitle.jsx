import React from "react";

/**
 * SectionTitle - Componente estandarizado para títulos de sección
 * 
 * @param {string} title - Texto del título
 * @param {string} subtitle - Texto del subtítulo (opcional)
 * @param {string} variant - Variante: 'default' | 'light' | 'dark'
 * @param {string} size - Tamaño: 'sm' | 'md' | 'lg'
 * @param {string} className - Clases adicionales
 */
function SectionTitle({ 
  title, 
  subtitle, 
  variant = 'default',
  size = 'lg',
  className = '' 
}) {
  // Variantes de color
  const variants = {
    default: 'text-gray-800',
    light: 'text-white',
    dark: 'text-slate-900',
    accent: 'text-[#7e6949]',
  };

  // Tamaños
  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
  };

  return (
    <div className={`text-center py-10 md:py-12 lg:py-14 ${className}`}>
      <h2 className={`
        ${sizes[size]} 
        font-bold 
        tracking-wide 
        ${variants[variant]}
      `}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`
          mt-3 
          text-base md:text-lg 
          font-normal 
          ${variant === 'light' ? 'text-gray-200' : 'text-gray-500'}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;