import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Tucampo from './components/Tucampo';
import { HelmetProvider } from 'react-helmet-async'; // Importar HelmetProvider

import Entrevalles from './pages/Entrevalles';
import Costapulin from './pages/Costapulin';
import Sanrafael from './pages/Sanrafael';

import Tucampopage from './pages/Tucampopage.jsx';

function App() {
  return (
    <HelmetProvider> {/* Envuelve toda la aplicación */}
      <Router>
        <div className='w-screen bg-background'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Puedes agregar Helmet aquí para la página principal */}
                  <Navbar />
                  <Hero />
                  <div >
                  <Nosotros />
                  </div>
                  <div >
                  <Proyectos />
                  </div>
                  <div >
                  <Tucampo />
                  </div>
                  <div >
                  <Contacto />
                  </div>
                 
                  
                </>
              }
            />
            <Route path="/entre-valles" element={<Entrevalles />} />
            <Route path="/costa-pulin" element={<Costapulin />} />
            <Route path="/san-rafael" element={<Sanrafael />} />
            <Route path="/vendenos-tu-campo" element={<Tucampopage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
