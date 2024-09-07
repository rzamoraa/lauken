import React from 'react';
import logo from './logo.svg'; // Asegúrate de que la ruta es correcta
import logopulin from '../../assets/logopulin.svg'
import logovalles from '../../assets/logovalles.svg'

function Title({video, logoproyecto}) {
  return (
    <section 
      id="title" 
      className="relative h-[45vh] flex justify-center items-center "
    >
      {/* Video de fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm b"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70  "></div>

      {/* SVG del logo centrado */}
      <div>
      <div className="relative z-10  justify-center items-center opacity-50 ">
        <img src={logoproyecto} alt="Logo" className="w-36  h-36  sm:w-64 sm:h-64 mt-10" />
      </div>


    
      </div>
      
    </section>
  );
}

export default Title;
