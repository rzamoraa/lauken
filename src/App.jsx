import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { scroller } from 'react-scroll';

// Layout components
import { Layout, Navbar } from './components/layout';

// Section components
import { Hero, Proyectos, Contacto, WhatsAppButton, ImageShowcase } from './components/sections';

// Pages
import ProjectPage from './pages/projects/ProjectPage';
import SellYourLandPage from './pages/static/SellYourLandPage';
import CompanyPage from './pages/static/CompanyPage';

/**
 * PageWrapper - Wrapper para páginas secundarias
 * 
 * Props:
 * - showHero: Muestra el slider Hero
 * - showContacto: Muestra el formulario de contacto
 * - contactoPadding: Agrega padding adicional al contacto
 */
const PageWrapper = ({ children, showContacto = false, showHero = false, contactoPadding = false }) => (
  <>
    <Navbar />
    {showHero && <Hero />}
    {children}
    {showContacto && (
      <div id="contacto" className={contactoPadding ? 'pt-16 bg-slate-800' : ''}>
        <Contacto />
      </div>
    )}
    <WhatsAppButton />
  </>
);

/**
 * MainContent - Contenido principal del home
 * 
 * Maneja el scroll automático a secciones según la ruta
 */
function MainContent() {
  const location = useLocation();
  
  useEffect(() => {
    // Mapeo de rutas a secciones
    const pathToSection = {
      '/': 'inicio',
      '/nosotros': 'nosotros',
      '/proyectos': 'proyectos',
      '/vendenos': 'vendenos',
      '/contacto': 'contacto'
    };

    // Configuración del scroll
    const scrollConfig = {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70
    };

    // Si viene con estado de scroll específico
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, scrollConfig);
      return;
    }

    // Scroll automático según la ruta
    const sectionId = pathToSection[location.pathname];
    if (sectionId && sectionId !== 'inicio') {
      scroller.scrollTo(sectionId, scrollConfig);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="nosotros">
        <ImageShowcase />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
      <WhatsAppButton />
    </>
  );
}

/**
 * App - Componente raíz de la aplicación
 * 
 * Estructura:
 * - HelmetProvider: SEO y meta tags
 * - Router: Navegación SPA
 * - Layout: Wrapper con Navbar/Footer global
 */
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout showNavbar={false} showFooter={true}>
          <main className="w-full min-h-screen bg-white">
            <Routes>
              {/* Home - rutas con scroll a secciones */}
              <Route path="/" element={<MainContent />} />
              <Route path="/nosotros" element={<MainContent />} />
              <Route path="/proyectos" element={<MainContent />} />
              <Route path="/vendenos" element={<MainContent />} />
              <Route path="/contacto" element={<MainContent />} />
              
              {/* Páginas de proyectos (dinámico) */}
              <Route path="/:projectId" element={<PageWrapper><ProjectPage /></PageWrapper>} />

              {/* Páginas estáticas */}
              <Route path="/vende-tu-campo" element={<PageWrapper><SellYourLandPage /></PageWrapper>} />
              <Route path="/quienes-somos" element={<PageWrapper ><CompanyPage /></PageWrapper>} />
              <Route path="/ver-proyectos" element={<PageWrapper showHero ><Proyectos /></PageWrapper>} />
              <Route path="/formulario-contacto" element={<PageWrapper showContacto contactoPadding />} />
            </Routes>
          </main>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;