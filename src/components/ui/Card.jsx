import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ titulo, descripcion, imagen, url, logo, activo , precio, franja, pronto}) {
  const [isHovered, setIsHovered] = useState(false); // Estado para el hover
  
  // Si no hay URL, renderizar sin el Link
  const CardContent = (
    <div className="relative isolate flex flex-col overflow-hidden bg-white shadow-lg">
      {/* Contenedor de la imagen */}
      <div className="relative h-64 overflow-hidden">
        {/* Imagen principal con animación de zoom */}
        <motion.img
          src={imagen}
          alt={titulo}
          className={`absolute inset-0 h-full w-full object-cover ${activo ? '' : 'saturate-0'}`}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Logo de la tarjeta */}
        <img
          src={logo}
          alt={titulo}
          className="absolute inset-0 h-56 w-auto p-10 m-auto object-contain"
        />
        
        {/* Gradiente sobre la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />

        {/* Marca de "verde" si no está a pronto */}
        {!pronto && (
          <div className="absolute inset-0 h-full m-auto w-full object-cover">
            <div className="text-2xl py-auto text-center text-slate-50/50 font-black backdrop-blur-sm my-3 bg-green-500/50">
              {franja}
            </div>
          </div>
        )}

        {/* Marca de "Vendido" si no está activo */}
        {!activo && (
          <div className="absolute inset-0 h-full m-auto w-full object-cover">
            <div className="text-2xl py-auto text-center text-slate-50/50 font-black backdrop-blur-sm my-3 bg-red-800">
              {franja}
            </div>
          </div>
        )}
      </div>
      
      {/* Franja blanca con los textos */}
      <div className="bg-white px-6 py-4">
        <div className="text-gray-900 text-lg font-medium">
          {titulo}
        </div>
        <span className="text-gray-500 text-sm font-light mb-1">
          {descripcion}
        </span>
        <h2 className="text-yellow-500 text-lg font-black">
          {precio}
        </h2>
      </div>
    </div>
  );

  // Si hay URL, envolver en Link; si no, solo renderizar el contenido
  if (url) {
    return (
      <Link
        to={url}
        className="text-white hover:text-gray-300 font-light block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div
      className="text-white hover:text-gray-300 font-light block cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CardContent}
    </div>
  );
}

export default Card;