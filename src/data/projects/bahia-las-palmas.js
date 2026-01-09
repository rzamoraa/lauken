// Bahía Las Palmas - Configuración del proyecto
import logo from '../../assets/projects/palmas/Logo pag web LP .png';
import bgCard from '../../assets/projects/san-rafael/bg-sanrafael.png'; // Usa la misma imagen por ahora
import g1 from '../../assets/projects/palmas/galeria/foto1.jpg';
import g2 from '../../assets/projects/palmas/galeria/foto2.jpg';
import g3 from '../../assets/projects/palmas/galeria/foto3.jpg';
import g4 from '../../assets/projects/palmas/galeria/foto4.jpg';
import g5 from '../../assets/projects/palmas/galeria/foto5.jpg';
import g6 from '../../assets/projects/palmas/galeria/foto6.jpg';
import g7 from '../../assets/projects/palmas/galeria/foto7.jpg';
import g8 from '../../assets/projects/palmas/galeria/foto8.jpg';
import g9 from '../../assets/projects/palmas/galeria/foto9.jpg';
import atributosImg from '../../assets/projects/palmas/atributosLP.jpg';
import mocap from '../../assets/projects/palmas/mockupLP.png';
import fondo from '../../assets/projects/palmas/bgmocap.jpg';

const bahiaLasPalmas = {
  id: 'bahia-las-palmas',
  
  card: {
    titulo: 'Bahía Las Palmas',
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
      video: 'https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20las%20palmas%20.mp4',
      brochurePdf: 'https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf',
      showBrochureButton: true,
      precio: 'Parcelas a 49.900.000',
      texto1: '79 parcelas con rol propio a orillas de Lago Rapel',
      texto2: '',
    },
    
    description: {
      nombre: 'BAHÍA LAS PALMAS',
      bajada: 'LAGO RAPEL',
      precio: 'DESDE UF 2200',
      logo: logo,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/bahialaspalmas/',
    },
    
    atributos: {
      tipo: 'image',
      texto: 'Proyecto exclusivo condominio de 79 sitios desde 1.500 m² a orillas del Lago Rapel, con acceso a marina privada. Un entorno único, urbanizado y con agua y luz subterránea, pensado para disfrutar la vida frente al lago, conectar con la naturaleza y asegurar una inversión de alto potencial. Vive tranquilidad, paisaje y experiencias inolvidables en Rapel.',
      image: atributosImg,
      items: [],
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

export default bahiaLasPalmas;
