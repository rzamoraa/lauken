// La Brisa - Configuración del proyecto
import logo from '../../assets/projects/brisas/logo pag web LB.png';
import bgCard from '../../assets/projects/brisas/galeria/Portada La Brisa.jpg'; // Usa la misma imagen por ahora
import g1 from '../../assets/projects/brisas/galeria/1.jpg';
import g2 from '../../assets/projects/brisas/galeria/2.jpg';
import g3 from '../../assets/projects/brisas/galeria/3.jpg';
import g4 from '../../assets/projects/brisas/galeria/4.jpg';
import g5 from '../../assets/projects/brisas/galeria/5.jpg';
import g6 from '../../assets/projects/brisas/galeria/6.jpg';
import g7 from '../../assets/projects/brisas/galeria/7.jpg';
import g8 from '../../assets/projects/brisas/galeria/8.jpg';
import g9 from '../../assets/projects/brisas/galeria/9.jpg';
import atributosImg from '../../assets/projects/brisas/AtributosLB.jpg';
import mocap from '../../assets/projects/brisas/mockupLB.png';
import fondo from '../../assets/projects/brisas/fondo folleto.jpg';

const laBrisa = {
  id: 'la-brisa',
  
  card: {
    titulo: 'La Brisa',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Próximamente',
    activo: true,
    pronto: true,
    vendido: false,
    franja: 'Próximamente',
  },
  
  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20La%20Brisa.mp4',
      brochurePdf: 'https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf',
      showBrochureButton: true,
      precio: 'Parcelas a 49.900.000',
      texto1: '34 parcelas con rol propio a orillas de Lago Rapel',
      texto2: '',
    },
    
    description: {
      nombre: 'LA BRISA',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/brisassanrafael/',
    },
    
    atributos: {
      tipo: 'image', // usa componente Atributosimagen
      texto: 'Proyecto exclusivo de 34 parcelas de 5.000 m², ubicadas en el sector de San Rafael, a orillas del Lago Rapel. Un entorno privilegiado donde la naturaleza y la tranquilidad se combinan con la comodidad de contar con acceso directo al lago a través de una marina privada, ideal para disfrutar de actividades náuticas, deportes al aire libre y momentos únicos.',
      image: atributosImg,
      items: [], // No usa items porque es tipo 'image'
    },
    
    galeria: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
    
    folleto: {
      enabled: true,
      mocap: mocap,
      fondo: fondo,
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

export default laBrisa;
