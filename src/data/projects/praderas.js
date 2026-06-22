// Praderas - Configuración del proyecto (Próximamente)
import bgCard from '../../assets/projects/Praderas/proximamente.png';
import logo from '../../assets/projects/Praderas/logo-praderas.png';

const praderas = {
  id: 'praderas',

  card: {
    titulo: 'Praderas',
    descripcion: 'Lago Rapel',
    imagen: bgCard,
    logo: logo,
    precio: 'Próximamente',
    activo: true,
    pronto: false,
    vendido: false,
    franja: null,
  },

  page: {
    title: {
      logo: logo,
      video: 'https://storage.googleapis.com/lauken/lauken-web/proyectos/videos/praderas/video-banner-praderas.mp4',
      brochurePdf: null,
      showBrochureButton: false,
      precio: 'Parcelas desde $44.900.000',
      texto1: '76 parcelas planas de 5.000 M2 con acceso controlado',
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
      texto: 'Proyecto de 76 parcelas de 5.000 m² en Lago Rapel, emplazado en un valle único y privilegiado que combina tranquilidad, conectividad y una excelente proyección de inversión. Cada parcela cuenta con factibilidad de luz y agua, acceso controlado y caminos estabilizados. Un lugar ideal para desconectarse de la ciudad, conectar con la naturaleza y vivir experiencias inolvidables.',
      image: null,
      items: [],
    },

    galeria: [],

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
