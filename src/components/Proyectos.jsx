import React from 'react';
import Card from './Card';
import logosanrafel from '../assets/logosanrafel.svg'; 
import logopulin from '../assets/logopulin.svg'; 
import logovalles from '../assets/logovalles.svg'; 
import { motion } from "framer-motion"; // Importamos Framer Motion
import { Helmet } from 'react-helmet-async';



const proyectos = [
  
    {
      nombreUnico: 'costa-pulin',
      titulo: 'Costa Pulin',
      descripcion: 'Lago Rapel',
      imagen: 'https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/costa-pulin',
      logo: logopulin,
      activo: true
    },
    {
      nombreUnico: 'San Rafael',
      titulo: 'Costa San Rafael',
      descripcion: 'Lago Rapel',
      imagen:  "https://images.pexels.com/photos/1287089/pexels-photo-1287089.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: '/San-rafael',
      logo: logosanrafel,
      activo: true,
    },
    {
      nombreUnico: 'entre-valles',
      titulo: 'Entre Valles',
      descripcion: ' Pumanque ',
      imagen: "https://storage.googleapis.com/bucket-launken/entrevalles/DJI_0926.JPG",
      url: '/entre-valles',
      logo: logovalles,
      activo: false
    },
    
  ];

  

function Proyectos() {
  return (
    <section id="proyectos" >
<Helmet>
        <title>Proyectos - Laukén Inmobiliaria</title>
        <meta name="description" content="Descubre nuestros proyectos de parcelación exclusivos en Chile. Laukén Inmobiliaria te ofrece terrenos únicos en las mejores zonas." />
      </Helmet>
<div className=" ">
<div className="mx-auto max-w-5xl px-6 lg:px-8 my-16  ">
         <div className="mx-auto max-w-2xl text-center ">
         <h1 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl ">
        <a>Proyectos Exclusivos</a> 
         </h1>
         
        </div>
    
      
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1  sm:mt-20 lg:mx-0 lg:max-w-none  gap-[12px]   ">
      
      {proyectos.map((proyecto, index) => (

           <motion.div
           key={proyecto.nombreUnico}
           initial={{ opacity: 0, y: 50 }}  // Inicia invisible y desplazado hacia abajo
           whileInView={{ opacity: 1, y: 0 }}  // Se anima a visible y en su posición
           transition={{ duration: 0.6, delay: index * 0.2 }}  // Retraso basado en el índice
           viewport={{ once: true, margin: '-50px' }}  // La animación ocurre una vez, cuando la tarjeta está visible
         >

          <Card 
            key={proyecto.id} 
            titulo={proyecto.titulo} 
            descripcion={proyecto.descripcion} 
            imagen={proyecto.imagen}
            url={proyecto.url}
            logo={proyecto.logo}
            activo={proyecto.activo}
          />

           </motion.div>
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}

export default Proyectos;
