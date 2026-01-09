// Costa San Rafael - Configuración del proyecto
import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Building, Clock, Timer } from 'lucide-react';

// Imágenes del proyecto
import logo from '../../assets/icons/logosanrafel.svg';
import bgCard from '../../assets/projects/san-rafael/bg-sanrafael.png';
import g1 from '../../assets/projects/san-rafael/carrusel/sr1.jpg';
import g2 from '../../assets/projects/san-rafael/carrusel/sr2.jpg';
import g3 from '../../assets/projects/san-rafael/carrusel/sr3.jpg';
import g4 from '../../assets/projects/san-rafael/carrusel/sr4.jpg';
import g5 from '../../assets/projects/san-rafael/carrusel/sr5.jpg';
import g6 from '../../assets/projects/san-rafael/carrusel/sr6.jpg';
import g7 from '../../assets/projects/san-rafael/carrusel/sr7.jpg';
import g8 from '../../assets/projects/san-rafael/carrusel/sr8.jpg';
import g9 from '../../assets/projects/san-rafael/carrusel/sr9.jpg';
import mocap from '../../assets/projects/san-rafael/mocap sanrafael.png';

const costaSanRafael = {
  id: 'san-rafael',
  
  card: {
    titulo: 'Costa San Rafael',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Desde $34.900.000',
    activo: true,
    pronto: false,
    vendido: false,
    franja: null,
  },
  
  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4',
      brochurePdf: 'https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf',
      showBrochureButton: true,
      precio: 'Desde $34.900.000',
      texto1: '47 Parcelas con Rol Propio',
      texto2: '¡Agenda tu visita!',
    },
    
    description: {
      nombre: 'SAN RAFAEL',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/costa-sanrafael/',
    },
    
    atributos: {
      tipo: 'icons',
      texto: 'Innovador proyecto de 47 parcelas con terrenos planos y suaves lomajes, que ofrecen espectaculares vistas al Lago Rapel y la Cordillera de los Andes. Vive rodeado de naturaleza, en un entorno ideal para descansar, practicar deportes y conectar con lo mejor de la vida junto al lago. Todo esto, en un valle privilegiado del sector San Rafael, Lago Rapel.',
      image: g4,
      items: [
        { icon: MapPin, titulo: '47 Parcelas de', valor: '5.000 mts2' },
        { icon: FileText, titulo: 'Rol', valor: 'Propio' },
        { icon: Route, titulo: 'Caminos', valor: 'Estabilizados' },
        { icon: Anchor, titulo: 'Marina', valor: 'Común' },
        { icon: Lock, titulo: 'Acceso al loteo', valor: 'Controlado' },
        { icon: Droplets, titulo: 'Factibilidad de', valor: 'Agua y Luz' },
        { icon: ShoppingCart, titulo: 'Santiago', valor: '2,30 hr' },
        { icon: Building, titulo: 'Santa Cruz:', valor: '1,20 hr' },
        { icon: Clock, titulo: 'Puertecillo:', valor: '1,20 hr' },
        { icon: Timer, titulo: 'La Estrella:', valor: '45 min' },
      ],
    },
    
    galeria: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
    
    folleto: {
      enabled: true,
      mocap: mocap,
      fondo: g1,
      link: 'https://storage.googleapis.com/bucket-launken/brochure/BrochureSR.pdf',
    },
    
    mapa: {
      enabled: true,
      lat: -34.187536,
      lng: -71.490558,
    },
    
    showVendido: false,
  },
};

export default costaSanRafael;
