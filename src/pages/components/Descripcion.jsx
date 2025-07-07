import React, { useState, useEffect } from "react";
import logo from "./lauken.svg"; 
import { Link as ScrollLink } from "react-scroll";
import updiv from './updiv.svg';
import downdiv from './downdiv.svg';
import { motion } from "framer-motion";

function Description({ 
  nombre,
  bajada,
  precio,
  enabled = true, // New prop with default value of true
  logoproyecto,
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
    <div className="w-full h-80" 
       >
            <div className="s py-3 ">

      </div>
      <div className="h-64">







<img 
  src={logoproyecto} 
  alt={nombre} 
  className="h-full mx-auto brightness-50 [filter:brightness(0)_invert(10%)_sepia(0%)_saturate(0%)_brightness(200%)_contrast(10%)]" 
/>


      </div>


      
    </div>
  );
}

export default Description;