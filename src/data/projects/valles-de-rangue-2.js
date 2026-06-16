// Valles de Rangue - Configuración del proyecto
import logo from '../../assets/projects/valles-rangue-2/valles de rangue 2 blanco logo.png';
import bgCard from '../../assets/projects/valles-rangue-2/galeria/portada Valles de Rangue2.jpg'; // Usa la misma imagen por ahora //bgcard --> carta proyecto
import g1 from '../../assets/projects/valles-rangue-2/galeria/1.jpg';
import g2 from '../../assets/projects/valles-rangue-2/galeria/2.jpg';
import g3 from '../../assets/projects/valles-rangue-2/galeria/3.jpg';
import g4 from '../../assets/projects/valles-rangue-2/galeria/4.jpg';
import g5 from '../../assets/projects/valles-rangue-2/galeria/5.jpg';
import g6 from '../../assets/projects/valles-rangue-2/galeria/6.jpg';
import g7 from '../../assets/projects/valles-rangue-2/galeria/7.jpg';
import g8 from '../../assets/projects/valles-rangue-2/galeria/8.jpg';
import g9 from '../../assets/projects/valles-rangue-2/galeria/9.jpg';
import g10 from '../../assets/projects/valles-rangue-2/galeria/10.jpg';
import g11 from '../../assets/projects/valles-rangue-2/galeria/11.jpg';
import g12 from '../../assets/projects/valles-rangue-2/galeria/12.jpg';
import atributosImg from '../../assets/projects/valles-rangue-2/atributosAculeo.png';
import mocap from '../../assets/projects/valles-rangue-2/mockupvallesrangue2.png';
import logoNegro from '../../assets/projects/valles-rangue-2/valles de rangue 2 negro logo.png';

const vallesDeRangue = {
  id: 'valles-de-rangue-2',
  
  card: {
    titulo: 'Valles de Rangue 2',
    descripcion: 'Laguna de Aculeo',
    imagen: bgCard,
    logo: logo,
    logoSmall: true,
    precio: 'Desde $60.000.000',
    activo: true,
    pronto: false,
    vendido: false,
    franja: '', // Próximamente
  },
  
  page: {
    title: {
      logo: logo,
      //video: 'https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20lomas%20de%20rangue%20.mp4',
      video: 'https://storage.googleapis.com/lauken/lauken-web/proyectos/videos/valles-de-range-2/video-banner-valles-de-rangue-2-video%20.mp4',
      brochurePdf: 'https://storage.googleapis.com/lauken/lauken-web/Brochure/valles-de-rangue-2/BrochureVDR2_arreglo.pdf',
      showBrochureButton: true,
      precio: 'Parcelas desde $60.000.000',
      texto1: '21 parcelas planas a orillas de Laguna de Aculeo',
      texto2: '',
    },
    
    description: {
      nombre: 'VALLES DE RANGUE',
      bajada: 'LAGUNA DE ACULEO',
      precio: 'DESDE UF 2200',
      logo: logoNegro,
    },
    
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/valle-rangue-2/',
    },
    
    atributos: {
      tipo: 'image',
      fullWidth: true,
      texto: 'La segunda etapa de Valles de Rangue es un proyecto exclusivo de solo 21 parcelas planas de 5.000 m², ubicadas a orilla de laguna en el privilegiado entorno de la Laguna de Aculeo. Su excelente ubicación, a solo una hora de Santiago, permite combinar conectividad y descanso en un entorno ideal para vivir.',
      image: atributosImg,
      items: [],
    },
    
    galeria: [g1, g2, g3, g4, g5, g6, g10, g11, g12],
    
    folleto: {
      enabled: true,
      mocap: mocap,
      fondo: g1,
      link: 'https://storage.googleapis.com/lauken/lauken-web/Brochure/valles-de-rangue-2/BrochureVDR2.pdf',
    },
    
    mapa: {
      enabled: true,
      lat: -33.838242,
      lng: -70.950378,
    },
    
    showVendido: false,
  },
};

export default vallesDeRangue;
