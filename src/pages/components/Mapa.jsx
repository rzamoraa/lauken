import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta

function Mapa() {
  return (
    <section 
      id="mapa" 
className=" h-[40vh] flex justify-center items-center text-white  my-12"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/14036102/pexels-photo-14036102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Reemplaza con tu enlace de imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      
      }}
    >
      <div className="relative z-10 p-8 text-center bg-black bg-opacity-50 rounded">
        <h1 className="text-5xl font-bold mb-4">MAPA</h1>
        <p className="text-lg">Acá va el mapa</p>
      </div>
    </section>
  );
}

export default Mapa;
