import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton - Botón flotante de WhatsApp
 * 
 * Muestra un botón fijo en la esquina inferior derecha
 * para contacto rápido por WhatsApp
 */

// Configuración del enlace de WhatsApp
const WHATSAPP_CONFIG = {
  number: '56992757172',
  message: 'Hola, quiero más información sobre los proyectos de Lauken Inmobiliaria.',
};

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white
        p-4 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110
        flex items-center justify-center
      "
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}

export default WhatsAppButton;
