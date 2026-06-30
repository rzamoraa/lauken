import { Link, useLocation } from 'react-router-dom';
import logoSimulador from '../../assets/icons/simular-credito.png';

/**
 * SimuladorButton - Botón flotante de acceso al Simulador de Crédito
 *
 * Aparece fijo en la esquina inferior derecha, sobre el botón de WhatsApp,
 * y redirige a la página del simulador. Se oculta cuando ya estás en ella.
 */
function SimuladorButton() {
  const location = useLocation();

  if (location.pathname === '/simulador-credito') {
    return null;
  }

  return (
    <Link
      to="/simulador-credito"
      className="
        fixed bottom-24 right-6 z-50
        w-[60px] h-[60px] rounded-full overflow-hidden
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110
        flex items-center justify-center
      "
      aria-label="Simulador de Crédito"
    >
      <img
        src={logoSimulador}
        alt="Simulador de Crédito"
        className="w-full h-full object-cover scale-[1.3]"
      />
    </Link>
  );
}

export default SimuladorButton;
