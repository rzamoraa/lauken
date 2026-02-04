import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer,Ship,Sailboat   } from 'lucide-react';

// Bahía Las Palmas - Configuración del proyecto
import logo from '../../assets/projects/palmas/Logo pag web LP .png';
import logocard from '../../assets/projects/palmas/Logo pag web LP1.png';
import bgCard from '../../assets/projects/palmas/bg-bahialaspalmas.jpg'; 
import g1 from '../../assets/projects/palmas/galeria/foto1.jpg';
import g2 from '../../assets/projects/palmas/galeria/foto2.jpg';
import g3 from '../../assets/projects/palmas/galeria/foto3.jpg';
import g4 from '../../assets/projects/palmas/galeria/foto4.jpg';
import g5 from '../../assets/projects/palmas/galeria/foto5.jpg';
import g6 from '../../assets/projects/palmas/galeria/foto6.jpg';
import g7 from '../../assets/projects/palmas/galeria/foto7.jpg';
import g8 from '../../assets/projects/palmas/galeria/foto8.jpg';
import g9 from '../../assets/projects/palmas/galeria/foto9.jpg';
import atributosImg from '../../assets/projects/palmas/galeria/foto6.jpg'; 
import mocap from '../../assets/projects/palmas/mockupLP.png';
import fondo from '../../assets/projects/palmas/bgmocap.jpg';



const bahiaLasPalmas = {
  id: 'bahia-las-palmas',
  
  card: {
    titulo: 'Bahía Las Palmas',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Desde UF 1.500',
    activo: true,
    pronto: false,
    vendido: false,
    franja: '',
  },
  
  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/bucket-launken-web/las-palmas/banner-laspalmas.mp4', 
      brochurePdf: 'https://storage.googleapis.com/bucket-launken-web/las-palmas/Brochure.pdf', 
      showBrochureButton: true,
      precio: 'Sitios desde UF 1.500',
      texto1: 'Condominio de 79 sitios urbanizados con acceso a Lago Rapel',
      texto2: '',
    },
    
    description: {
      nombre: 'BAHÍA LAS PALMAS',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logocard,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/bahialaspalmas/',
    },
    
    atributos: {
      tipo: 'icons',
      texto: 'Exclusivo condominio de 79 sitios desde 1.500 m² a orillas del Lago Rapel, con acceso a marina privada. Un entorno único, urbanizado y con agua y luz subterránea, pensado para disfrutar la vida frente al lago, conectar con la naturaleza y asegurar una inversión de alto potencial. Vive tranquilidad, paisaje y experiencias inolvidables en Rapel.',
      image: atributosImg,
      items: [
        { icon: MapPin, titulo: '79 sitios urbanizados', valor: 'desde 1.500 mts2' },
        { icon: FileText, titulo: 'Rol', valor: 'Propio' },
        { icon: Lock, titulo: 'Acceso', valor: 'Controlado' },
        { icon: Anchor, titulo: 'Marina', valor: 'Privada' },
        { icon: Route, titulo: 'Caminos', valor: 'Estabilizados' },
        { icon: Droplets, titulo: 'Agua y Luz', valor: 'subterránea' },
        { icon: ShoppingCart, titulo: 'Supermercados', valor: 'en la zona' },
        { icon: Clock, titulo: 'Santiago', valor: 'a 2 horas' },
        { icon: Ship , titulo: 'Acceso', valor: 'a Lago Rapel' }, 
        { icon: Timer, titulo: 'Santa Cruz:', valor: 'a 1.20 horas' },
      ],
    },
    
    galeria: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
    
    folleto: {
      enabled: true,
      mocap: mocap,
      fondo: fondo,
      link: 'https://storage.googleapis.com/bucket-launken-web/las-palmas/Brochure.pdf',
    },
    
    mapa: {
      enabled: true,
        lat: -34.207007333422425,
        lng: -71.44824885767264,
    },
    
    showVendido: false,
  },
};

export default bahiaLasPalmas;
