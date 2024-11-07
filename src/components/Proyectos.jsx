import React from 'react';
import Card from './Card';
import logosanrafel from '../assets/logosanrafel.svg'; 
import logopulin from '../assets/logopulin.svg'; 
import logovalles from '../assets/logovalles.svg'; 
import { motion } from "framer-motion"; // Importamos Framer Motion
import { Helmet } from 'react-helmet-async';

import costapulin from '../pages/img/bg-costa.jpg';
import sanrafael from '../pages/img/bg-sanrafael.jpg';


import down from '../pages/components/containers/Tdown.svg'

import up from '../pages/components/containers/Tup.svg'


const proyectos = [
  
    {
      nombreUnico: 'costa-pulin',
      titulo: 'Costa Pulín',
      descripcion: 'Lago Rapel',
      imagen: costapulin,
      url: '/costa-pulin',
      logo: logopulin,
      activo: true
    },
    {
      nombreUnico: 'San Rafael',
      titulo: 'Costa San Rafael',
      descripcion: 'Lago Rapel',
      imagen:  sanrafael,
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
  <title>Proyectos Exclusivos en Lago Rapel | Costa Pulín y San Rafael | Laukén Inmobiliaria</title>
  
  <meta 
    name="description" 
    content="Descubre nuestros exclusivos proyectos de parcelación: Costa Pulín y Costa San Rafael en Lago Rapel, y Entre Valles en Pumanque. Parcelas con vista al lago, terrenos urbanizados y proyectos premium en las mejores ubicaciones de la VI Región." 
  />
  
  <meta 
    name="keywords" 
    content="parcelas lago rapel, costa pulin, costa san rafael, entre valles pumanque, terrenos lago rapel, parcelas vista al lago, proyectos inmobiliarios sexta región, parcelas premium chile, terrenos urbanizados, inversión inmobiliaria lago rapel" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/proyectos" />
  <meta property="og:title" content="Proyectos Premium en Lago Rapel | Laukén Inmobiliaria" />
  <meta property="og:description" content="Parcelas exclusivas en Costa Pulín y Costa San Rafael con vista al Lago Rapel. Proyectos premium con la mejor ubicación y urbanización completa." />
  <meta property="og:image" content={costapulin} />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Parcelas Premium en Lago Rapel | Proyectos Laukén" />
  <meta name="twitter:description" content="Descubre nuestros proyectos exclusivos: Costa Pulín y Costa San Rafael en Lago Rapel. Parcelas premium con la mejor vista al lago." />
  <meta name="twitter:image" content={costapulin} />
  
  {/* Datos estructurados para proyectos inmobiliarios */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Laukén Inmobiliaria",
      "description": "Desarrolladora de proyectos exclusivos en Lago Rapel y Pumanque",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "Costa Pulín",
            "description": "Parcelas exclusivas con vista al Lago Rapel",
            "areaServed": "Lago Rapel, Chile"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "Costa San Rafael",
            "description": "Terrenos premium en Lago Rapel",
            "areaServed": "Lago Rapel, Chile"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "Entre Valles",
            "description": "Proyecto exclusivo en Pumanque",
            "areaServed": "Pumanque, Chile"
          }
        }
      ],
      "areaServed": ["Lago Rapel", "Pumanque", "VI Región"],
      "hasMap": "https://www.google.com/maps?q=lago+rapel"
    })}
  </script>

  <link rel="canonical" href="https://lauken.cl/proyectos" />
</Helmet>


<div className=" ">
<img src={up} alt="Logo" className="mx-auto  "  />
<div className="mx-auto max-w-5xl px-6 lg:px-8   ">
  
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
      <img src={down} alt="Logo" className="mx-auto   "  />
      </div>
      </div>
    </section>
  );
}

export default Proyectos;
