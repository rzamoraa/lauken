import { database, ref, set } from './firebase';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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





function App() {

  return (
    <Router>
      <div className='w-screen bg-white'>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Proyectos />
            <Nosotros />
            <Tucampo />
            <Contacto />
          </>
        } />
        <Route path="/entre-valles" element={<Entrevalles />} />
        <Route path="/costa-pulin" element={<Costapulin />} />
        <Route path="/san-rafael" element={<Sanrafael />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
