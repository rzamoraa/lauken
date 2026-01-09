import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Card - Tarjeta de proyecto para la página principal
 * 
 * @param {string} titulo - Nombre del proyecto
 * @param {string} descripcion - Descripción breve
 * @param {string} imagen - URL de la imagen de fondo
 * @param {string} url - URL de destino al hacer clic
 * @param {string} logo - Logo del proyecto
 * @param {boolean} activo - Si el proyecto está activo (no vendido)
 * @param {string} precio - Precio o rango de precios
 * @param {string} franja - Texto de la franja (ej: "VENDIDO", "ÚLTIMAS UNIDADES")
 * @param {boolean} pronto - Si el proyecto está "Próximamente"
 */
function Card({ titulo, descripcion, imagen, url, logo, activo = true, precio, franja, pronto }) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <div className="relative isolate flex flex-col overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Contenedor de la imagen */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        {/* Imagen principal con animación de zoom */}
        <motion.img
          src={imagen}
          alt={titulo}
          className={`absolute inset-0 h-full w-full object-cover ${activo ? '' : 'saturate-0 brightness-75'}`}
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Logo del proyecto */}
        {logo && (
          <img
            src={logo}
            alt={titulo}
            className="absolute inset-0 h-44 md:h-52 w-auto p-8 m-auto object-contain drop-shadow-lg"
          />
        )}

        {/* Gradiente sobre la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        
        {/* Ring decorativo */}
        <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-t-lg" />

        {/* Franja de estado - Próximamente (amarillo/dorado) */}
        {pronto && activo && (
          <div className="absolute top-3 left-0 right-0 ">
            <div className="text-sm md:text-base py-1.5 text-center text-white font-semibold backdrop-blur-sm bg-[#F0B94D]/90 rounded">
              {franja || "PRÓXIMAMENTE"}
            </div>
          </div>
        )}

        {/* Franja de estado - Disponible/Últimas unidades (verde) */}
        {!pronto && activo && franja && (
          <div className="absolute top-3 left-0 right-0 ">
            <div className="text-sm md:text-base py-1.5 text-center text-white font-semibold backdrop-blur-sm bg-green-500/80 ">
              {franja}
            </div>
          </div>
        )}

        {/* Franja de estado - Vendido (rojo) */}
        {!activo && (
          <div className="absolute top-3 left-0 right-0 ">
            <div className="text-sm md:text-base py-1.5 text-center text-white font-semibold backdrop-blur-sm bg-red-700/90 ">
              {franja || "VENDIDO"}
            </div>
          </div>
        )}
      </div>

      {/* Contenido inferior */}
      <div className="bg-white px-5 py-4 md:px-6 md:py-5">
        <h3 className="text-gray-900 text-base md:text-lg font-semibold mb-1">
          {titulo}
        </h3>
        <p className="text-gray-500 text-sm font-light mb-2 line-clamp-2">
          {descripcion}
        </p>
        {precio && (
          <p className="text-[#F0B94D] text-base md:text-lg font-bold">
            {precio}
          </p>
        )}
      </div>
    </div>
  );

  // Si hay URL, envolver en Link
  if (url) {
    return (
      <Link
        to={url}
        className="block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {CardContent}
      </Link>
    );
  }

  // Sin URL, solo mostrar tarjeta sin link
  return (
    <div
      className="block cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CardContent}
    </div>
  );
}

export default Card;