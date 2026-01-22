// Valles de Rangue - Configuración del proyecto
import logo from '../../assets/projects/valles-rangue/logo pag web LR.png';
import bgCard from '../../assets/projects/valles-rangue/galeria/portada Valles de Rangue.jpg'; // Usa la misma imagen por ahora //bgcard --> carta proyecto
import g1 from '../../assets/projects/valles-rangue/galeria/1.jpg';
import g2 from '../../assets/projects/valles-rangue/galeria/2.jpg';
import g3 from '../../assets/projects/valles-rangue/galeria/3.jpg';
import g4 from '../../assets/projects/valles-rangue/galeria/4.jpg';
import g5 from '../../assets/projects/valles-rangue/galeria/5.jpg';
import g6 from '../../assets/projects/valles-rangue/galeria/6.jpg';
import g7 from '../../assets/projects/valles-rangue/galeria/7.jpg';
import g8 from '../../assets/projects/valles-rangue/galeria/8.jpg';
import g9 from '../../assets/projects/valles-rangue/galeria/9.jpg';
import atributosImg from '../../assets/projects/valles-rangue/atributosAculeo.jpg';
import mocap from '../../assets/projects/valles-rangue/mockupRangue.png';
import fondo from '../../assets/projects/valles-rangue/Fondo folleto con opacidad.jpg';

const vallesDeRangue = {
  id: 'valles-de-rangue',
  
  card: {
    titulo: 'Valles de Rangue',
    descripcion: 'Laguna de Aculeo',
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
      video: 'https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20lomas%20de%20rangue%20.mp4',
      brochurePdf: 'https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf',
      showBrochureButton: true,
      precio: 'Parcelas a 49.900.000',
      texto1: '19 parcelas ubicadas en Laguna de Aculeo',
      texto2: '',
    },
    
    description: {
      nombre: 'VALLES DE RANGUE',
      bajada: 'LAGUNA DE ACULEO',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/vallederangue/',
    },
    
    atributos: {
      tipo: 'image',
      texto: 'Proyecto exclusivo de 19 parcelas de 5.000 m² en la Laguna de Aculeo, rodeado de naturaleza y tranquilidad. Disfruta de excelente conectividad con Santiago, en un entorno ideal para vivir, descansar y disfrutar al aire libre. Una oportunidad única de inversión con alta plusvalía.',
      image: atributosImg,
      items: [],
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

export default vallesDeRangue;
