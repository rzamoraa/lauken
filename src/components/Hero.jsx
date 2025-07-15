import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/lauken.svg";
import logofull from "../assets/logofull.svg";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Asegúrate de tener esta importación

import promo03 from '../assets/img/p1.jpg';
import promo04 from '../assets/img/p2.jpg';


import logopulin from "../assets/logopulin.svg";
import logosanrafael from "../assets/logosanrafel.svg";

function Hero() {
  // Estado para controlar el slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Estado para controlar la dirección de la animación (para el contenido)
  const [direction, setDirection] = useState(1); // 1 para derecha, -1 para izquierda

  // Datos de ejemplo para los slides con logos personalizados
 const slides = [
   // {
      //type: "video",
      //src: "https://videos.pexels.com/video-files/3126453/3126453-uhd_2560_1440_24fps.mp4 ",
     // title: "Bienvenidos a Laukén Inmobiliaria",
      //description: "Descubre nuestros exclusivos proyectos de parcelación en las mejores zonas de Chile.",
      //separador: "|",
     // description2:"Ofrecemos credito Directo ",
     // logoOnly: true, // Indicador para mostrar solo el logo en esta diapositiva
     // customLogo: logofull, // Logo personalizado para este slide
      //cartel: "asasas"
  // },
    
    {
      type: "video",
      src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20CP%201080p.mp4",
      title: "Desde UF 2.500",
      description: "13 Parcelas con Rol Propio",
      separador: "|",
      description2:"Ofrecemos Crédito Directo  ",
      customLogo: logopulin, // Logo por defecto, puede ser cambiado
      cartel: "Proyecto Exclusivo",
      href: '/costa-pulin',
    },
    {
      type: "video",
      src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20CP%20windsurf%201080p.mp4",
      title: "Vive tu Experiencia en Lago Rapel",
      description: "Desde UF 2.500",
      separador: "|",
      description2:"Ofrecemos Crédito Directo ",
      customLogo: logopulin, // Logo por defecto, puede ser cambiado
      cartel: "¡OPORTUNIDAD ÚNICA!",
      href: '/costa-pulin',
    },
    {
      type: "video",
      src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20SR%201080p.mp4",
      title: "Proyecto Exclusivo",
      description: "47 Parcelas con Rol Propio ",
      separador: "|",
      description2:"Desde $40.000.000 ",
      customLogo: logosanrafael, // Logo por defecto, puede ser cambiado
      cartel: "¡OPORTUNIDAD ÚNICA!",
      href: '/San-rafael',
    },
    {
      type: "video",
      src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20SR%20ovejas%201080%20p.mp4",
      title: "Invierte en tu futuro",
      description: "47 Parcelas con Rol Propio ",
      separador: "|",
      description2:"Desde $40.000.000 ",
      customLogo: logosanrafael, // Logo por defecto, puede ser cambiado
      cartel: "¡OPORTUNIDAD ÚNICA!",
      href: '/San-rafael',
    }
  ];

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

  // Función para ir al slide anterior
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Cambio automático de slides cada 18 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 18000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Variantes de animación para Framer Motion - SOLO FADE para el fondo
  const backgroundVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  // Variantes para el contenido (ahora en la parte inferior)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0 
    }
  };

  // Variantes para el logo grande (primera diapositiva)
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Obtener el slide actual
  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col justify-between items-center text-white overflow-hidden bg-black "
    >


      {/* Contenido de fondo según el tipo con animación - SOLO FADE */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`background-${currentSlide}`}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.8 }, // Transición más lenta para un fade suave
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {slide.type === "video" ? (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover "
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              className="absolute top-0 left-0 w-full h-full object-cover "
              src={slide.src}
              alt={slide.title}
            />
          )}
          
          {/* Capa oscura sobre el contenido con gradiente */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-black/50 to-black/80"></div>
        </motion.div>
      </AnimatePresence>



  <AnimatePresence initial={false} mode="wait">

  {/* Logo superior (siempre visible, personalizado por slide) */}
  {!slide.logoOnly && (
          <motion.div
            className=" z-10  h-full flex  flex-grow   pt-36  "
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
      
            <img 
              src={slide.customLogo}
              alt="Laukén Inmobiliaria" 
              className="w-48 md:w-64 h-auto  "
            />
          
          
          </motion.div>
        )}
  </AnimatePresence>
      




      {/* Contenido central o logo grande (para la primera diapositiva) */}
      <AnimatePresence mode="wait">
        {slide.logoOnly ? (
          // Primera diapositiva - Solo logo grande centrado
          <motion.div
            key={`logo-only-${currentSlide}`}
            className="relative z-10 flex-grow flex justify-center items-center"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img 
              src={slide.customLogo}
              alt="Laukén Inmobiliaria" 
              className="w-[70vh] h-[50vh] fill-white" 
            />
            
          </motion.div>
          
          
        ) : (
          // Contenedor vacío cuando no es logoOnly para mantener el espacio
          <div className="flex-grow">


          </div>
          
          
        )}
      </AnimatePresence>

      {/* Contenido inferior (texto) - Solo visible cuando no es logoOnly */}
      {!slide.logoOnly && (
        <motion.div
          key={`content-${currentSlide}`}
          className="relative z-10 w-full px-4 max-w-4xl mx-auto mb-16"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Contenedor con estilos similares a Description */}
          <motion.div
            className="bg-gradient-to-r from-[#0000005e] via-[#1111112a] to-[#00000069] py-6 px-8 rounded-lg border border-yellow-500 shadow-lg w-full"
            animate={{ scale: [0.98, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.8 }}
          >
            {/* Cinta decorativa similar a Description */}
            {!isMobile && (
              <div className="bg-yellow-500 text-black font-bold text-md  px-2 rounded-t-md absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center z-10">
                {slide.cartel}
              </div>
            )}
            
            {/* Título con efecto de pulsación y estilo dorado */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            >
              <motion.h1 
                className={isMobile ? 
                  "text-yellow-500 text-xl font-extrabold mb-2 tracking-wider" : 
                  "text-yellow-500 text-3xl font-extrabold mb-2 tracking-wider"
                }
                variants={itemVariants}
              >
                {slide.title}
              </motion.h1>
            </motion.div>
            




            {/* Descripción con estilo similar a Description */}
          
                      <motion.p 
                        className={isMobile ?
                          "text-white text-md font-semibold mb-3 tracking-wider" :
                          "text-white text-xl font-semibold mb-3 tracking-wider"
                        }
                        variants={itemVariants}
                      >
                        
                        {slide.description } <span className="text-yellow-500"> {slide.separador }</span><span className="text-white text-2xl font-bold"> {slide.description2 }</span>
                      </motion.p>


          
            





            
            {/* Botón CTA con estilo dorado de Description */}
            <Link to={slide.href}>
              <motion.button 
                className="bg-[#F0B94D] text-xs hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VER MÁS
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}


















      {/* Controles de navegación */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-400 text-white p-2 rounded-full transition-all"
        aria-label="Slide anterior"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(240, 185, 77, 0.5)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-400 text-white p-2 rounded-full transition-all"
        aria-label="Siguiente slide"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(240, 185, 77, 0.5)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Indicadores de slides con estilo dorado */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-[#F0B94D]" : "bg-white/50"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            animate={currentSlide === index ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;