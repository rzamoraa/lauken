import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Contactofooter from './components/Contactofooter.jsx';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';

import Entrevalles from './pages/Entrevalles';
import Costapulin from './pages/Costapulin';
import Sanrafael from './pages/Sanrafael';
import CampoLanding from './pages/Tucampopage.jsx';
import SomosLanding from './pages/Quienessomos.jsx';

import Layout from './components/Layout';

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
    
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>

    
      


      <div id="proyectos">
        <Proyectos />
      </div>
        
      <div id="nosotros">
        <Nosotros />
      </div>

      <div id="contacto">
        <Contacto />
      </div>
      <div >
        <Contactofooter />
      </div>
    </>
  );
}

// Wrappers para las páginas independientes con sus schemas específicos
const EntrevallesWrapper = () => (
  <>
  <Navbar />
    <Entrevalles />
   
        <Contactofooter />
      
  </>
);

const CostapulinWrapper = () => (
  <>
 <Navbar />
    <Costapulin />
    <Contactofooter />
  </>
);

const SanrafaelWrapper = () => (
  <>
  <Navbar />
    <Sanrafael />
    <Contactofooter />
  </>
);

const TucampopageWrapper = () => (
  <>
<Navbar />
    <CampoLanding />
    <div id="contacto">
       
      </div>
    <Contactofooter />

  </>
);


const QuienesSomosWrapper = () => (
  <>
<Navbar />
    <SomosLanding />
    <div id="contacto">
        <Contacto />
      </div>
    <Contactofooter />

  </>
);

const ProyectosWrapper = () => (
  <>
<Navbar />
 <Hero />
   <Proyectos />
    <div id="contacto">
        <Contacto />
      </div>
    <Contactofooter />

  </>
);



const ContactoWrapper = () => (
  <>
<Navbar />

    <div id="contacto" className='py-24'>
        <Contacto />
      </div>
    <Contactofooter />

  </>
);


function App() {
  return (
    <HelmetProvider>
      <Router>
      <Layout>  {/* Añadir este wrapper */}
        <div className='w-screen bg-white'>
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
            <Route path="/vende-tu-campo" element={<TucampopageWrapper />} />
            <Route path="/Quines-somos" element={<QuienesSomosWrapper />} />
            <Route path="/Proyectos-" element={<ProyectosWrapper />} />
            <Route path="/Contacto-" element={<ContactoWrapper />} />
          </Routes>
          <Footer />
        </div>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;