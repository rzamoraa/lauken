import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Tucampo from './components/Tucampo';
import Entrevalles from './pages/Entrevalles';
import Costapulin from './pages/Costapulin';
import Sanrafael from './pages/Sanrafael';
import Tucampopage from './pages/Tucampopage.jsx';

// Componente MainContent que maneja el scroll y contiene el Schema principal
function MainContent() {
  const location = useLocation();
  
  useEffect(() => {
    const pathToSection = {
      '/': 'inicio',
      '/nosotros': 'nosotros',
      '/proyectos': 'proyectos',
      '/vendenos': 'vendenos',
      '/contacto': 'contacto'
    };

    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70
      });
      return;
    }

    const sectionId = pathToSection[location.pathname];
    if (sectionId && sectionId !== 'inicio') {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* Schema principal del sitio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://lauken.cl/",
            "name": "Laukén Inmobiliaria",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://lauken.cl/buscar?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        {/* Schema para Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Proyectos",
                "description": "Proyectos exclusivos en Lago Rapel",
                "url": "https://lauken.cl/proyectos"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Costa Pulín",
                "description": "Parcelas con marina privada",
                "url": "https://lauken.cl/costa-pulin"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Costa San Rafael",
                "description": "Vista privilegiada al lago",
                "url": "https://lauken.cl/san-rafael"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Vende tu Campo",
                "description": "Maximiza el valor de tu propiedad",
                "url": "https://lauken.cl/vendenos-tu-campo"
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id="vendenos">
        <Tucampo />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
    </>
  );
}

// Wrappers para las páginas independientes con sus schemas específicos
const EntrevallesWrapper = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Entre Valles Pumanque - Parcelas Exclusivas",
          "description": "21 parcelas planas de 5.000m² en sector Rincón del Sauce. Proyecto con caminos establecidos y factibilidad de servicios básicos.",
          "url": "https://lauken.cl/entre-valles",
          "numberOfRooms": "21 parcelas",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 5000,
            "unitCode": "MTK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-34.625450416181025",
            "longitude": "-71.59507535756717"
          }
        })}
      </script>
    </Helmet>
    <Entrevalles />
  </>
);

const CostapulinWrapper = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Costa Pulín - Parcelas Premium en Lago Rapel",
          "description": "13 parcelas exclusivas de 5.000m² con marina privada en Lago Rapel.",
          "url": "https://lauken.cl/costa-pulin",
          "numberOfRooms": "13 parcelas",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 5000,
            "unitCode": "MTK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-34.10409508034245",
            "longitude": "-71.54721887210357"
          }
        })}
      </script>
    </Helmet>
    <Costapulin />
  </>
);

const SanrafaelWrapper = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Costa San Rafael - Parcelas con Vista al Lago",
          "description": "47 parcelas de 5.000m² con marina exclusiva de 16.000m² en Lago Rapel.",
          "url": "https://lauken.cl/san-rafael",
          "numberOfRooms": "47 parcelas",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 5000,
            "unitCode": "MTK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-34.187536",
            "longitude": "-71.490558"
          }
        })}
      </script>
    </Helmet>
    <Sanrafael />
  </>
);

const TucampopageWrapper = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Venta de Campos - Laukén Inmobiliaria",
          "description": "Servicio profesional de corretaje para la venta de campos y terrenos agrícolas.",
          "url": "https://lauken.cl/vendenos-tu-campo",
          "provider": {
            "@type": "RealEstateAgent",
            "name": "Laukén Inmobiliaria",
            "telephone": "+56981381556",
            "url": "https://lauken.cl"
          }
        })}
      </script>
    </Helmet>
    <Tucampopage />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className='w-screen bg-background'>
          <Routes>
            {/* Rutas que comparten el contenido principal */}
            <Route path="/" element={<MainContent />} />
            <Route path="/nosotros" element={<MainContent />} />
            <Route path="/proyectos" element={<MainContent />} />
            <Route path="/vendenos" element={<MainContent />} />
            <Route path="/contacto" element={<MainContent />} />
            
            {/* Rutas de páginas independientes con sus schemas */}
            <Route path="/entre-valles" element={<EntrevallesWrapper />} />
            <Route path="/costa-pulin" element={<CostapulinWrapper />} />
            <Route path="/san-rafael" element={<SanrafaelWrapper />} />
            <Route path="/vendenos-tu-campo" element={<TucampopageWrapper />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;