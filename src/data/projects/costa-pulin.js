// Costa Pulín - Configuración del proyecto
import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer } from 'lucide-react';

// Imágenes del proyecto
import logo from '../../assets/icons/logopulin.svg';
import bgCard from '../../assets/projects/costa-pulin/bg-costa.png';
import datosImg from '../../assets/projects/costa-pulin/datos.jpg';
import g1 from '../../assets/projects/costa-pulin/cp1.jpg';
import g2 from '../../assets/projects/costa-pulin/cp2.jpg';
import g3 from '../../assets/projects/costa-pulin/cp3.jpg';
import g4 from '../../assets/projects/costa-pulin/cp4.jpg';
import g5 from '../../assets/projects/costa-pulin/cp5.jpg';
import g6 from '../../assets/projects/costa-pulin/costapulin6.jpg';
import g7 from '../../assets/projects/costa-pulin/cp7.jpg';
import g8 from '../../assets/projects/costa-pulin/cp8.jpg';
import g9 from '../../assets/projects/costa-pulin/cp9.jpg';
import g10 from '../../assets/projects/costa-pulin/cp10.jpg';
import mocap from '../../assets/projects/costa-pulin/mocap costapulin.png';

const costaPulin = {
  // Identificador único (usado en URL)
  id: 'costa-pulin',
  
  // Configuración de la Card (para el Home)
  card: {
    titulo: 'Costa Pulín',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Desde UF 2.200',
    activo: true,
    pronto: false,
    vendido: false,
    franja: null,
  },
  
  // Configuración de la página del proyecto
  page: {
    // Hero/Title
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/bucket-launken/opcionBanner1.mp4',
      brochurePdf: 'https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf',
      showBrochureButton: true,
      precio: 'Desde UF 2.200',
      texto1: '13 Parcelas con Rol Propio',
      texto2: 'Ofrecemos Crédito Directo',
    },
    
    // Descripción
    description: {
      nombre: 'COSTA PULIN',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    // Tour Virtual 360
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/costa-pulin/',
    },
    
    // Atributos (tipo: 'icons' o 'image')
    atributos: {
      tipo: 'icons', // usa componente Atributos con iconos
      texto: 'Proyecto único de 13 parcelas de 5.000 m², ubicadas a orillas del Lago Rapel, en el exclusivo sector de Pulín, Costa del Sol. Un entorno ideal para vivir la experiencia del lago, practicar deportes al aire libre y disfrutar en familia. Seguridad, naturaleza y una inversión con alto potencial de plusvalía futura.',
      image: datosImg,
      items: [
        { icon: MapPin, titulo: '13 Parcelas', valor: 'de 5.000 mts2' },
        { icon: FileText, titulo: 'Rol', valor: 'Propio' },
        { icon: Anchor, titulo: 'Marina', valor: 'Privada' },
        { icon: Lock, titulo: 'Acceso', valor: 'Controlado' },
        { icon: Route, titulo: 'Caminos', valor: 'Estabilizados' },
        { icon: Droplets, titulo: 'Factibilidad de', valor: 'Agua y Luz' },
        { icon: ShoppingCart, titulo: 'San Roberto', valor: 'Supermercado' },
        { icon: Plane, titulo: 'Acceso a', valor: 'Aeródromo' },
        { icon: Clock, titulo: 'Santiago', valor: '2hr' },
        { icon: Timer, titulo: 'Santa Cruz:', valor: '1,20hr' },
      ],
    },
    
    // Galería de imágenes
    galeria: [g1, g2, g3, g4, g5, g10, g7, g8, g9, g6],
    
    // Folleto/Brochure
    folleto: {
      enabled: true,
      mocap: mocap,
      fondo: g1,
      link: 'https://storage.googleapis.com/bucket-launken/brochure/BrochurePulin.pdf',
    },
    
    // Mapa
    mapa: {
      enabled: true,
      lat: -34.10409508034245,
      lng: -71.54721887210357,
    },
    
    // Mostrar componente Vendido
    showVendido: false,
  },
};

export default costaPulin;
