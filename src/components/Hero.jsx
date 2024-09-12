import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta
import logofull from '../assets/logofull.svg'; 
import { Helmet } from 'react-helmet-async';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex justify-center items-center text-white"
    ><div>
   <Helmet>
        <title>Bienvenidos a Laukén Inmobiliaria</title>
        <meta name="description" content="Laukén Inmobiliaria te ofrece proyectos exclusivos de parcelación de terrenos en las mejores zonas de Chile." />
      </Helmet>
    </div>
      
      {/* Video de fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm b"
        src="https://videos.pexels.com/video-files/3126453/3126453-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70  "></div>

      {/* SVG del logo centrado */}
      <div>
      <div className="relative z-10 flex justify-center items-center ">
        <img src={logofull} alt="Logo" className="w-200 h-48  fill-white" />
      </div>


      <div  className="relative z-10 text-center " >
 
  <ScrollLink  className="text-white hover:text-gray-300  "
            to="proyectos" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >


                    <a href="#" className=" font-light text-2xl leading-6   text-[#BB8D42] shadow-sm hover:text-[#ceb996] bg-slate-600/25  rounded-md border-2 p-3 border-stone-50/10">
                    Conoce nuestros proyectos <span aria-hidden="true">→</span>


         
           
          


                    </a>
                    </ScrollLink>
      </div>
      </div>

    </section>
  );
}

export default Hero;
