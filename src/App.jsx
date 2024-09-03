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

function App() {


  const handleClick = () => {
    // Crear una referencia a la base de datos
    const dbRef = ref(database, 'users/user1');

    // Escribir un valor en la base de datos
    set(dbRef, {
      username: 'usuario_prueba',
      email: 'usuario@ejemplo.com',
      profile_picture : 'url_de_foto_perfil'
    })
    .then(() => {
      alert('Datos guardados correctamente!');
    })
    .catch((error) => {
      alert('Error al guardar datos: ' + error.message);
    });
  };


  return (
    <Router>
      <div className='w-screen'>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Proyectos />
            <Nosotros />
           
            <Contacto />
          </>
        } />
        <Route path="/proyecto-uno" element={<ProyectoUno />} />
        <Route path="/proyecto-dos" element={<ProyectoDos />} />
        <Route path="/proyecto-tres" element={<ProyectoTres />} />
      </Routes>
      <Footer />
      </div>





      <div className=" p-12 bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">¡Sistema Activo!</h1>
        <p className="text-lg text-gray-700 mt-4">Testeo de base de dato y conectividad firebase</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleClick}
        >
          Guardar datos en Firebase
        </button>
      </header>
    </div>






    </Router>
  );
}

export default App;
