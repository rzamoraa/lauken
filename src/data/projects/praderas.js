// Praderas - Configuración del proyecto (Próximamente)
import bgCard from '../../assets/projects/Praderas/proximamente.jpg';
import logo from '../../assets/projects/Praderas/logo-praderas.png';
import g1 from '../../assets/projects/Praderas/galeria/1.jpg';
import g2 from '../../assets/projects/Praderas/galeria/2.jpg';
import g3 from '../../assets/projects/Praderas/galeria/3.jpg';
import g4 from '../../assets/projects/Praderas/galeria/4.jpg';
import g5 from '../../assets/projects/Praderas/galeria/5.jpg';
import g6 from '../../assets/projects/Praderas/galeria/6.jpg';
import g7 from '../../assets/projects/Praderas/galeria/7.jpg';
import g8 from '../../assets/projects/Praderas/galeria/8.jpg';
import g9 from '../../assets/projects/Praderas/galeria/9.jpg';
// Imagen de atributos pendiente: dejar el archivo en Praderas/ y descomentar.
// import atributosImg from '../../assets/projects/Praderas/atributosPraderas.jpg';

const praderas = {
  id: 'praderas',

  card: {
    titulo: 'Praderas',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Desde $44.900.000',
    activo: true,
    pronto: false,
    vendido: false,
    franja: '',
  },

  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/lauken_web/lauken-web/proyectos/videos/praderas/video-banner-praderas.mp4',
      brochurePdf: null,
      showBrochureButton: false,
      precio: 'Parcelas desde $44.900.000',
      texto1: '76 parcelas planas de 5.000 M2 con Rol propio',
      texto2: '',
    },

    description: {
      nombre: 'PRADERAS',
      bajada: 'LAGO RAPEL',
      precio: '',
      logo: logo,
    },

    // Tour Virtual 360 (La Nube)
    webPreview: {
      enabled: true,
      url: 'https://www.lanube360.com/praderas-lagorapel/',
    },

    atributos: {
      tipo: 'image',
      texto: 'Nuevo proyecto agroresidencial de 76 parcelas de 5.000 m² con terrenos planos, a minutos del Lago Rapel. Vive rodeado de naturaleza, en un entorno ideal para descansar, cultivar tu propio huerto y disfrutar de la vida de campo con acceso controlado, luz subterránea y factibilidad de agua por pozo profundo. Todo esto, a 10 minutos de Las Cabras y a solo dos horas de Santiago.',
      image: null, // reemplazar por atributosImg al descomentar el import
      items: [],
    },

    galeria: [g1, g2, g3, g4, g5, g6, g7, g8, g9],

    folleto: {
      enabled: false,
      mocap: null,
      fondo: null,
      link: null,
    },

    mapa: {
      enabled: false,
      lat: null,
      lng: null,
    },

    showVendido: false,
  },
};

export default praderas;
