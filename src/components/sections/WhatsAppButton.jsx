import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { getProjectById } from '../../data/projects';

/**
 * WhatsAppButton - Boton flotante de WhatsApp
 *
 * Muestra un boton fijo en la esquina inferior derecha
 * para contacto rapido por WhatsApp.
 */

// Configuracion del enlace de WhatsApp
const WHATSAPP_CONFIG = {
  number: '56966440166',
  message: 'Hola, quiero más información sobre los proyectos de Lauken Inmobiliaria.',
};

const GOOGLE_ADS_CONVERSION = {
  sendTo: 'AW-18141781291/27QGCO3IhqgcEKu61spD',
  value: 1.0,
  currency: 'CLP',
};

const shouldTrackWhatsAppConversion = (pathname) => {
  if (pathname === '/') {
    return true;
  }

  const projectId = pathname.replace(/^\/|\/$/g, '');
  const project = getProjectById(projectId);

  return Boolean(project?.card?.activo && !project?.card?.vendido);
};

function WhatsAppButton() {
  const location = useLocation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;

  const handleClick = () => {
    if (!shouldTrackWhatsAppConversion(location.pathname) || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION.sendTo,
      value: GOOGLE_ADS_CONVERSION.value,
      currency: GOOGLE_ADS_CONVERSION.currency,
    });
  };

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
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
