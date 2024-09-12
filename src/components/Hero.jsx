import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta
import logofull from '../assets/logofull.svg'; 

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-[45vh] flex justify-center items-center text-white"
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

      {/* SVG del logo centrado */}
      <div className="relative z-10 flex justify-center items-center ">
        <img src={logofull} alt="Logo" className="w-200 h-48  fill-white" />
      </div>
    </section>
  );
}

export default Hero;
