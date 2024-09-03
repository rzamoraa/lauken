import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta

function Tucampo() {
  return (
    <section 
      id="tucampo" 
      className="relative h-[30vh] flex justify-center items-center text-white my-12 "
    >
      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black  "></div>

      {/* SVG del logo centrado */}
      <div>
      <div className="relative z-10  justify-center items-center opacity-50 ">
        <img src={logo} alt="Logo" className="w-48 h-48" />
      </div>

      <div className="relative z-10  justify-center items-center opacity-50 " >
        
    Vendenos tu campo        
        </div>
      </div>
      
    </section>
 
  );
}

export default Tucampo;
