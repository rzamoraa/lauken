import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta

function Mapa() {
  return (
    <section 
      id="mapa" 
className="relative h-[40vh] flex justify-center items-center text-white"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1392356345/es/foto/mapa-de-calle-de-la-ciudad.webp?s=2048x2048&w=is&k=20&c=yrsijdb4SYCPDsYWH4OWlXhtap_9xU3Z3kWHLAvmRTM=')`, // Reemplaza con tu enlace de imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
