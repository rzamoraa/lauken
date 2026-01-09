import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { scroller } from 'react-scroll';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Proyectos from './components/sections/Proyectos';
import Contacto from './components/sections/Contacto';
import Contactofooter from './components/sections/Contactofooter';
import Footer from './components/layout/Footer';
import Nosotros from './components/sections/Nosotros';

// Componente genérico de proyecto
import ProjectPage from './pages/projects/ProjectPage';

// Páginas estáticas
import CampoLanding from './pages/static/SellYourLandPage';
import SomosLanding from './pages/static/CompanyPage';

import Layout from './components/layout/Layout';

// Wrapper genérico para páginas de proyecto
const PageWrapper = ({ children, showContacto = false, showHero = false, contactoPadding = false }) => (
  <>
    <Navbar />
    {showHero && <Hero />}
    {children}
    {showContacto && (
      <div id="contacto" className={contactoPadding ? 'py-24' : ''}>
        <Contacto />
      </div>
    )}
    <Contactofooter />
  </>
);

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
      <Contactofooter />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <div className='w-screen bg-white'>
            <Routes>
              {/* Rutas que comparten el contenido principal */}
              <Route path="/" element={<MainContent />} />
              <Route path="/nosotros" element={<MainContent />} />
              <Route path="/proyectos" element={<MainContent />} />
              <Route path="/vendenos" element={<MainContent />} />
              <Route path="/contacto" element={<MainContent />} />
              
              {/* Ruta dinámica para todos los proyectos */}
              <Route path="/:projectId" element={<PageWrapper><ProjectPage /></PageWrapper>} />

              {/* Rutas de páginas estáticas */}
              <Route path="/vende-tu-campo" element={<PageWrapper><CampoLanding /></PageWrapper>} />
              <Route path="/quienes-somos" element={<PageWrapper showContacto><SomosLanding /></PageWrapper>} />
              <Route path="/ver-proyectos" element={<PageWrapper showHero showContacto><Proyectos /></PageWrapper>} />
              <Route path="/formulario-contacto" element={<PageWrapper showContacto contactoPadding />} />
            </Routes>
            <Footer />
          </div>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;