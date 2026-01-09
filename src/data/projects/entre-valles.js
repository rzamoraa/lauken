// Entre Valles - Configuración del proyecto
import { MapPin, FileText, Route, Lock, Droplets, Zap, CircleCheckBig, Plane, Clock, Timer } from 'lucide-react';

// Imágenes del proyecto
import logo from '../../assets/icons/logovalles.svg';
import bgCard from '../../assets/projects/entre-valles/bg-entrevalles.png';
import datosImg from '../../assets/projects/entre-valles/entre-valles4.jpeg';
import g1 from '../../assets/projects/entre-valles/entre-valles-s-1.jpg';
import g2 from '../../assets/projects/entre-valles/entre-valles-s-2.jpg';
import g3 from '../../assets/projects/entre-valles/entre-valles-s-3.jpg';
import g4 from '../../assets/projects/entre-valles/entre-valles-s-4.jpg';
import g5 from '../../assets/projects/entre-valles/entre-valles-s-5.jpg';
import g6 from '../../assets/projects/entre-valles/entre-valles-s-6.jpg';
import g7 from '../../assets/projects/entre-valles/entre-valles-s-7.jpg';
import g8 from '../../assets/projects/entre-valles/entre-valles-s-8.jpg';
import g9 from '../../assets/projects/entre-valles/entre-valles-s-9.jpg';

const entreValles = {
  id: 'entre-valles',
  
  card: {
    titulo: 'Entre Valles',
    descripcion: 'Pumanque',
    imagen: bgCard,
    logo: logo,
    precio: 'VENDIDO',
    activo: false,
    pronto: false,
    vendido: true,
    franja: '100% VENDIDO',
  },
  
  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4',
      brochurePdf: null,
      showBrochureButton: false,
      precio: '',
      texto1: '21 Parcelas con Rol Propio',
      texto2: 'Éxito Total de Ventas',
    },
    
    description: {
      nombre: 'ENTRE VALLES',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    webPreview: {
      enabled: false,
      url: null,
    },
    
    atributos: {
      tipo: 'icons',
      texto: 'Exclusivo proyecto de 21 parcelas de 5.000 m² en el sector Rincón del Sauce, rodeadas por tres valles únicos y vegetación nativa. Un entorno natural, tranquilo y con caminos establecidos, ideal para quienes buscan desconexión y calidad de vida. Inversión segura y plusvalía garantizada en una zona privilegiada de la VI región.',
      image: datosImg,
      items: [
        { icon: MapPin, titulo: '21 Parcelas de', valor: '5.000 mts2' },
        { icon: FileText, titulo: 'Rol', valor: 'Propio' },
        { icon: Route, titulo: 'Caminos', valor: 'Establecidos' },
        { icon: Lock, titulo: 'Portones de acceso', valor: '2' },
        { icon: Droplets, titulo: 'Factibilidad de', valor: 'Agua' },
        { icon: Zap, titulo: 'Factibilidad de', valor: 'Luz' },
        { icon: CircleCheckBig, titulo: 'SAG', valor: 'Aprobado' },
        { icon: Plane, titulo: 'Santa Cruz:', valor: '1hr' },
        { icon: Clock, titulo: 'Pichilemu:', valor: '1.30 hr' },
        { icon: Timer, titulo: 'Pumanque Centro:', valor: '7 min' },
      ],
    },
    
    galeria: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
    
    folleto: {
      enabled: false,
      mocap: null,
      fondo: null,
      link: null,
    },
    
    mapa: {
      enabled: true,
      lat: -34.625450416181025,
      lng: -71.59507535756717,
    },
    
    showVendido: true,
    contactoPadding: true, // Para el div con padding especial
  },
};

export default entreValles;
