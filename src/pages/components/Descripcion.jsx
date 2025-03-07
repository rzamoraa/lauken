import React, { useState, useEffect } from "react";
import logo from "./lauken.svg"; 
import { Link as ScrollLink } from "react-scroll";
import updiv from './updiv.svg';
import downdiv from './downdiv.svg';
import { motion } from "framer-motion";

function Description({ 
  video, 
  precioOferta, 
  credito, 
  cuotas, 
  tasa, 
  oportunidadunica, 
  a1, 
  a2, 
  b1, 
  b2,
  enabled = true // New prop with default value of true
}) {
  // Estado para controlar si estamos en tamaño móvil

  // Estado para controlar si estamos en tamaño móvil
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar al cargar
    checkMobile();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);
    
    // Limpiar al desmontar
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="mx-auto max-w-7xl sm:px-6 sm:pt-4 lg:px-8">
      <img src={updiv} alt="Decoración" className="mx-auto" />
      
      {/* Contenedor de video */}
      <div className="rounded-none sm:rounded-t-xl overflow-hidden">
        <video className="w-full" src={video} autoPlay loop muted playsInline />
      </div>
      
      {/* Banner informativo - AHORA DEBAJO DEL VIDEO - Solo visible si enabled es true */}
      {enabled && isMobile ? (
        // DISEÑO MÓVIL
        <motion.div
          className="bg-gradient-to-r from-[#000000] via-[#111111] to-[#000000] py-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 gap-4 items-center justify-items-center">
              {/* Precio con efecto de pulsación - ahora centrado */}
              <motion.div
                className="flex flex-col items-center text-center"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }}
              >
                <h3 className="text-white text-lg font-bold tracking-wider mb-1">
                  PRECIO OFERTA
                </h3>
                <h2 className="text-[#F0B94D] text-2xl font-extrabold">
                {precioOferta}
                </h2>
              </motion.div>
             
              {/* Información de crédito - todo dentro del cuadro */}
              <div className="relative text-center border border-[#F0B94D] rounded-md p-2 bg-black/50">
                {/* Cinta dentro del recuadro */}
                <div className="bg-[#F0B94D] text-black font-bold py-1 px-3 rounded-md text-xs absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  ¡OPORTUNIDAD ÚNICA!
                </div>
               
                <div className="text-white mt-2">
                  <p className="text-sm font-semibold">
                  {oportunidadunica || ""}
                  </p>
                  <p className="text-sm font-semibold">
                  {a1 || ""} <span className="text-[#F0B94D]">
                      {a2 || ""} </span> {b1 || ""} <span className="text-[#F0B94D]">{b2 || ""}
                        
                      </span>
                  </p>
                </div>
              </div>
             
              {/* Botón de llamada a la acción */}
              <motion.button
                className="bg-[#F0B94D] hover:bg-[#E0A93D] text-black font-bold py-2 px-4 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONSULTAR AHORA
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : enabled ? (
        // DISEÑO DESKTOP
        <motion.div
          className="bg-gradient-to-r from-[#000000] via-[#111111] to-[#000000] py-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="container mx-auto">
            <div className="flex flex-row items-center justify-between">
              {/* Precio con efecto de pulsación */}
              <motion.div
                className="flex flex-col items-start m-auto"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }}
              >
                <h3 className="text-white text-2xl font-bold tracking-wider mx-auto">
                  PRECIO OFERTA
                </h3>
                <h2 className="text-[#F0B94D] text-5xl font-extrabold mx-auto">
                 {precioOferta}
                </h2>
              </motion.div>
             
              {/* Separador vertical solo en desktop */}
              <div className="w-0.5 h-16 bg-[#F0B94D] mx-6"></div>
             
              {/* Información de crédito con cinta destacada */}
              <div className="relative pt-0 m-auto">
                {/* Cinta - ahora con mejor posicionamiento y márgenes */}
                <div className="bg-[#F0B94D] text-black font-bold py-1 px-4 rounded-t-md left-0 whitespace-nowrap text-center">
                  ¡OPORTUNIDAD ÚNICA!
                </div>
               
                <div className="text-white  m-auto text-center">
                  <p className="text-xl font-semibold">
                  {oportunidadunica || ""}
                  </p>
                  <p className="text-xl font-semibold m-auto">
                  {a1 || ""}
                    <span className="text-[#F0B94D]">
                    {a2 || ""}
                      </span>
                      {b1 || ""} <span className="text-[#F0B94D]"> {b2 || ""}</span>
                  </p>
                </div>
              </div>
             
              {/* Botón de llamada a la acción */}
              <motion.button
                className="bg-[#F0B94D] hover:bg-[#E0A93D] text-black font-bold py-3 px-6 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out m-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONSULTAR AHORA
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}

export default Description;