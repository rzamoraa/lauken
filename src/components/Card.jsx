import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importamos Framer Motion

function Card({ titulo, descripcion, imagen, url, logo, activo }) {
  const [isHovered, setIsHovered] = useState(false); // Estado para el hover

  return (
    <Link
      to={url}
      className="text-white hover:text-gray-300 font-light h-64"
      onMouseEnter={() => setIsHovered(true)}  // Activa hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva hover
    >
      <div className="relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-8 pt-80 sm:pt-48">
        
        {/* Imagen principal con animación de zoom */}
        <motion.img
          src={imagen}
          alt={titulo}
          className={`absolute inset-0 -z-10 h-full w-full object-cover ${activo ? '' : 'saturate-0'}`}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}  // Aplica la animación de zoom
          transition={{ duration: 0.4 }} // Duración de la transición
        />

        {/* Logo de la tarjeta */}
        <img
          src={logo}
          alt={titulo}
          className="absolute inset-0 -z-10 h-full w-full p-10"
        />

        {/* Gradiente sobre la imagen */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10  ring-1 ring-inset ring-gray-900/10" />

        {/* Contenido textual */}
        <div className="">
          <div className="text-gray-100/50 mt-auto font-light">
            {descripcion}
          </div>
          <div></div>
          <div>
            <a href={url} className="mt-auto text-lg m-auto text-white">
              {titulo}
            </a>

            {/* Marca de "Vendido" si no está activo */}
            {!activo && (
              <div className="absolute inset-0 -z-10 h-full m-auto w-full object-cover">
                <div className="text-2xl  py-auto text-center text-slate-50/50   font-black backdrop-blur-sm my-3 bg-red-500/50">
                 100% VENDIDO
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
