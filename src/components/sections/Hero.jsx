import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Logos de proyectos
import logopulin from "../../assets/icons/logopulin.svg";
import logosanrafael from "../../assets/icons/logosanrafel.svg";
import logolaspalmas from "../../assets/icons/logolaspalmas.svg";

/**
 * Hero - Componente de slider principal
 * 
 * Muestra un carrusel de videos promocionales con información
 * de los proyectos inmobiliarios destacados
 */

// Configuración del autoplay (en milisegundos)
const AUTOPLAY_INTERVAL = 18000;

// Configuración de los slides
const SLIDES = [
/*banner las palmas */
    {
    type: "video",
    src: "https://storage.googleapis.com/bucket-launken-web/las-palmas/banner-laspalmas.mp4",
    title: "Sitios desde UF 1.250",
    description: "Condominio de 79 sitios urbanizados con acceso a Lago Rapel",
    //description2: "Ofrecemos Crédito Directo",
    customLogo: logolaspalmas,
    //badge: "Proyecto Exclusivo",
    href: '/bahia-las-palmas',
  },
  {
    type: "video",
    src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20CP%201080p.mp4",
    title: "Desde UF 2.200",
    description: "13 Parcelas con Rol Propio",
    description2: "Ofrecemos Crédito Directo",
    customLogo: logopulin,
    badge: "Proyecto Exclusivo",
    href: '/costa-pulin',
  },
  {
    type: "video",
    src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20CP%20windsurf%201080p.mp4",
    title: "Vive tu Experiencia en Lago Rapel",
    description: "Desde UF 2.200",
    description2: "Ofrecemos Crédito Directo",
    customLogo: logopulin,
    badge: "¡OPORTUNIDAD ÚNICA!",
    href: '/costa-pulin',
  },
  {
    type: "video",
    src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20SR%201080p.mp4",
    title: "Proyecto Exclusivo",
    description: "47 Parcelas con Rol Propio",
    description2: "Desde $34.900.000",
    customLogo: logosanrafael,
    badge: "¡OPORTUNIDAD ÚNICA!",
    href: '/San-rafael',
  },
  {
    type: "video",
    src: "https://storage.googleapis.com/bucket-launken/costapulin/P%C3%A1gina%20SR%20ovejas%201080%20p.mp4",
    title: "Invierte en tu futuro",
    description: "47 Parcelas con Rol Propio",
    description2: "Desde $34.900.000",
    customLogo: logosanrafael,
    badge: "¡OPORTUNIDAD ÚNICA!",
    href: '/San-rafael',
  }
];

// Variantes de animación
const backgroundVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.3, staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Hook personalizado para detectar tamaño móvil
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const isMobile = useIsMobile();

  const slide = SLIDES[currentSlide];

  // Navegación del slider
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col justify-between items-center text-white overflow-hidden bg-black"
    >
      {/* Fondo con video/imagen */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`background-${currentSlide}`}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 0.8 } }}
          className="absolute inset-0"
        >
          {slide.type === "video" ? (
            <video
              //className="absolute inset-0 w-full h-full object-contain md:object-cover" //para moviles
              className="absolute inset-0 w-full h-full object-cover" // ocupa toda la pantalla
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.src}
              alt={slide.title}
            />
          )}
          
          {/* Overlay con gradiente */}
          //<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Logo del proyecto */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          className="z-10 flex flex-grow pt-36"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
      
         { <img 
            src={slide.customLogo}
            alt="Logo del proyecto" 
             className="w-48 md:w-64 h-auto" 
            //className="w-48 md:w-64 h-auto" 
          /> }

        </motion.div>
      </AnimatePresence>

      {/* Espacio flexible */}
      <div className="flex-grow" />

      {/* Contenido inferior */}
      <motion.div
        key={`content-${currentSlide}`}
        className="relative z-10 w-full px-4 max-w-4xl mx-auto mb-16"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="relative bg-gradient-to-r from-black/40 via-black/20 to-black/40 py-6 px-8 rounded-lg border border-yellow-500 shadow-lg"
          animate={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge decorativo */}
          {!isMobile && slide.badge && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold text-md px-3 py-1 rounded-md whitespace-nowrap z-10">
              {slide.badge}
            </div>
          )}
          
          {/* Título con animación de pulso */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          >
            <motion.h1 
              className={`text-yellow-500 font-extrabold tracking-wider mb-2 ${
                isMobile ? "text-xl" : "text-3xl"
              }`}
              variants={itemVariants}
            >
              {slide.title}
            </motion.h1>
          </motion.div>

          {/* Descripción */}
          <motion.p 
            className={`text-white font-semibold tracking-wider mb-3 ${
              isMobile ? "text-md" : "text-xl"
            }`}
            variants={itemVariants}
          >
            {slide.description}

          {slide.description2 && (
  <>
    <span className="text-yellow-500"> | </span>
    <span className="text-white text-2xl font-bold">{slide.description2}</span> {/*test */}
  </>
)}
 
          </motion.p>

          {/* Botón CTA */}
          <Link to={slide.href}>
            <motion.button 
              className="bg-[#F0B94D] hover:bg-yellow-400 text-black text-xs font-bold py-2 px-6 rounded-md shadow-lg transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VER MÁS
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Controles de navegación */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-500/50 text-white p-2 rounded-full transition-all"
        aria-label="Slide anterior"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-500/50 text-white p-2 rounded-full transition-all"
        aria-label="Siguiente slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Indicadores de slides */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
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