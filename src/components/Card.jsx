import React from 'react';

function Card({ titulo, descripcion, imagen, url }) {
  return (
    
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      
      <img src={imagen} alt={titulo} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />


      <div className="">
        
        <div className="text-gray-100/50 mt-auto  font-light ">{descripcion}
        </div>

        <div>
        <a href={url} className="mt-auto text-lg  m-auto text-white ">
         {titulo}
        </a>

        </div>
      </div>





      
    </div>
  );
}

export default Card;
