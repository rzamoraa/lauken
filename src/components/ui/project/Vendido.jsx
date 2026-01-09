import React from 'react';
import huincha from '../../../assets/images/vendido.png';

/**
 * Vendido - Banner flotante de "VENDIDO" para proyectos no disponibles
 * 
 * @param {string} position - Posición: 'top-right' | 'center' (default: 'top-right')
 */
function Vendido({ position = 'top-right' }) {
  const positions = {
    'top-right': 'top-4 right-4 md:top-8 md:right-8',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={`
      fixed z-50 
      ${positions[position]}
      pointer-events-none
    `}>
      <img
        alt="Proyecto Vendido"
        src={huincha}
        className="w-32 md:w-48 lg:w-56 h-auto drop-shadow-lg"
      />
    </div>
  );
}

export default Vendido;
