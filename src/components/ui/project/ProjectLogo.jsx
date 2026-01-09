import React from "react";

/**
 * ProjectLogo - Componente para mostrar el logo del proyecto
 * 
 * @param {string} nombre - Nombre del proyecto (para alt text)
 * @param {string} logoproyecto - URL del logo
 * @param {string} variant - Variante de color: 'light' | 'dark' | 'original'
 * @param {string} size - Tamaño: 'sm' | 'md' | 'lg'
 */
function ProjectLogo({ 
  nombre, 
  logoproyecto,
  variant = 'dark',
  size = 'lg'
}) {
  // Variantes de filtro
  const variants = {
    light: 'brightness-0 invert',
    dark: 'brightness-0',
    original: '',
  };

  // Tamaños
  const sizes = {
    sm: 'h-32 md:h-40',
    md: 'h-40 md:h-52',
    lg: 'h-48 md:h-60 lg:h-64',
  };

  if (!logoproyecto) return null;

  return (
    <div className="w-full py-8 md:py-12">
      <div className={`${sizes[size]} mx-auto px-4`}>
        <img
          src={logoproyecto}
          alt={nombre || 'Logo del proyecto'}
          className={`
            h-full w-auto mx-auto 
            object-contain
            ${variants[variant]}
            transition-all duration-300
          `}
        />
      </div>
    </div>
  );
}

export default ProjectLogo;
