import { database, ref, set } from './firebase';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ProyectoUno from './pages/ProyectoUno';
import ProyectoDos from './pages/ProyectoDos';
import ProyectoTres from './pages/ProyectoTres';
import Nosotros from './components/Nosotros';
import Tucampo from './components/Tucampo';

function App() {

  return (
    <Router>
      <div className='w-screen bg-white'>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Nosotros />
            <Proyectos />
            <Tucampo />
            <Contacto />
          </>
        } />
        <Route path="/proyecto-uno" element={<ProyectoUno />} />
        <Route path="/proyecto-dos" element={<ProyectoDos />} />
        <Route path="/proyecto-tres" element={<ProyectoTres />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
