import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta

function Vendenos() {
  return (
    <section 
      id="vendenos" 
      className="relative h-[75vh] flex justify-center items-center text-white"
    >
      {/* Video de fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm b"
        src="https://videos.pexels.com/video-files/3126453/3126453-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70  "></div>
      VENDENOS TU CAMPO
      {/* SVG del logo centrado */}
      <div>
      <div className="relative z-10  justify-center items-center opacity-50 ">
        <img src={logo} alt="Logo" className="w-48 h-48" />
      </div>

      <div className="relative z-10  justify-center items-center opacity-50 " >
        
           vendenos tu campo
       
        </div>
      </div>
      
    </section>
  );
}

export default Vendenos;
