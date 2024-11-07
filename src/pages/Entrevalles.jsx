import React, { useEffect } from "react";
import Header from "../components/Header";


import Contacto from "../components/Contacto";
import Vendido from "./components/Vendido";
import Description from "./components/Descripcion";
import Gallery from "./components/Gallery";
import Spect from "./components/Spect";

import Title from "./components/Title";
import Return from "./components/Return";
import Mapa from "./components/Mapa";
import Atributos from "./components/Atributos";

import logovalles from '../assets/logovalles.svg'

import { Helmet } from 'react-helmet-async';


import entrevalles1 from './img/entre-valles1.jpeg';
import entrevalles2 from './img/entre-valles2.jpeg';
import entrevalles3 from './img/entre-valles3.jpeg';

import entrevalles4 from './img/entre-valles4.jpeg';

import g1 from './img/entre-valles-s-1.jpg';
import g2 from './img/entre-valles-s-2.jpg';
import g3 from './img/entre-valles-s-3.jpg';
import g4 from './img/entre-valles-s-4.jpg';
import g5 from './img/entre-valles-s-5.jpg';
import g6 from './img/entre-valles-s-6.jpg';



function Entrevalles() {


  const point = {
    lat: -34.625450416181025,  // Reemplaza con la latitud de tu trabajo
    lng: -71.59507535756717,  // Reemplaza con la longitud de tu trabajo
  };

  // Desplazarse al principio cuando el componente se monte
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior
  }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta

  return (
    <div className="bg-background">


      
<Helmet>
  <title>Entre Valles Pumanque | Parcelas de 5.000m² | Proyecto Vendido | Laukén</title>
  
  <meta 
    name="description" 
    content="Entre Valles Pumanque: 21 parcelas planas de 5.000m² en Rincón del Sauce. Proyecto vendido con urbanización completa, factibilidad de agua y luz, roles propios y aprobación SAG. A 1 hora de Santa Cruz." 
  />
  
  <meta 
    name="keywords" 
    content="entre valles pumanque, parcelas pumanque, rincon del sauce, terrenos sexta region, parcelas planas, parcelas urbanizadas, inversión terrenos chile, proyectos vendidos lauken, santa cruz chile, parcelas con rol propio" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/entre-valles" />
  <meta property="og:title" content="Entre Valles Pumanque | Proyecto Premium Vendido | Laukén Inmobiliaria" />
  <meta property="og:description" content="21 parcelas planas de 5.000m² en sector Rincón del Sauce. Proyecto vendido con urbanización completa, factibilidad de servicios y aprobación SAG." />
  <meta property="og:image" content={entrevalles1} />
  <meta property="og:image:alt" content="Vista panorámica de Entre Valles Pumanque" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Entre Valles | Parcelas Premium en Pumanque" />
  <meta name="twitter:description" content="Proyecto vendido: 21 parcelas planas con urbanización completa en Rincón del Sauce, Pumanque. Entorno natural privilegiado." />
  <meta name="twitter:image" content={entrevalles1} />
  
  {/* Datos estructurados para proyecto inmobiliario */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Entre Valles Pumanque",
      "description": "Proyecto de 21 parcelas planas en sector Rincón del Sauce, Pumanque",
      "url": "https://lauken.cl/entre-valles",
      "status": "SOLD",
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Laukén Inmobiliaria",
        "url": "https://lauken.cl"
      },
      "numberOfRooms": {
        "@type": "QuantitativeValue",
        "value": 21,
        "unitText": "Parcelas"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Factibilidad de Agua",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Factibilidad de Luz",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Caminos Establecidos",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Aprobación SAG",
          "value": true
        }
      ],
      "locationCreative": {
        "@type": "CreativeWork",
        "video": {
          "@type": "VideoObject",
          "url": "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4",
          "thumbnailUrl": entrevalles1,
          "name": "Tour Virtual Entre Valles",
          "description": "Video aéreo del proyecto Entre Valles en Pumanque"
        }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-34.625450416181025",
        "longitude": "-71.59507535756717"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Tamaño parcelas",
          "value": "5000m²"
        },
        {
          "@type": "PropertyValue",
          "name": "Distancia a Santa Cruz",
          "value": "1 hora"
        },
        {
          "@type": "PropertyValue",
          "name": "Distancia a Pichilemu",
          "value": "1.30 horas"
        },
        {
          "@type": "PropertyValue",
          "name": "Distancia a Pumanque",
          "value": "7 minutos"
        }
      ],
      "publicTransport": "7 minutos al centro de Pumanque",
      "potentialAction": {
        "@type": "ViewAction",
        "target": "https://lauken.cl/proyectos"
      }
    })}
  </script>

  {/* Metadatos para SEO Local */}
  <meta name="geo.position" content="-34.625450416181025;-71.59507535756717" />
  <meta name="geo.placename" content="Entre Valles, Pumanque" />
  <meta name="geo.region" content="CL-LI" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://lauken.cl/entre-valles" />
  
  {/* Precargar video */}
  <link 
    rel="preload" 
    href="https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4" 
    as="video" 
    type="video/mp4" 
  />
</Helmet>




      <Header 
      nube={false}
      />
      <Vendido />
      <Title
      logoproyecto={logovalles}
        video={
          "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4"
        }
      />
      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4"
        }
      />

      <Gallery
        direccion="Proyecto"
        title="Entre Valles Pumanque "
        subtitle1="Entorno Armónico"
        subdes1="21 parcelas totalmente planas en sector “Rincón del Sauce”. Proyecto  rodeado por 3 valles únicos y abundante vegetación nativa"
        subtitle2="Comodidad y Tranquilidad"
        subdes2=" Caminos establecidos, rodeado de naturaleza y apartado de la urbanización en un lugar privilegiado de la 6ta región"
        subtitle3="Calidad Garantizada"
        subdes3="   Inversión en urbanización, incluyendo portones de acceso, cercos, pasos de aguas-lluvia. Incluye factibilidad de agua y luz"
        subtitle4="Inversión Segura"
        subdes4="   Ubicación en un sector exclusivo con tremenda plusvalía. Parcelas de 5.000mts2, planos actualizados con aprobación total por parte del SAG y cada parcela cuenta con Rol propio. "
        image1= {entrevalles1}
        image2= {entrevalles2}
        image3= {entrevalles3}
      />

      <Atributos
      title1={"Entre Valles - Pumanque"}
      title2={"Ubicado en un lugar exclusivo en sector Rincón del Sauce."}
      text={""}
      image={entrevalles4}

      t1={"21 Parcelas de"}
      v1={"5.000 mts2"}
      t2={"Rol"}
      v2={"Propio"}
      t3={"Caminos "}
      v3={"Establecidos"}
      t4={"Portones de acceso"}
      v4={"2" }
      t5={"Factibilidad de"}
      v5={"Agua"}
      t6={"Factibilidad de "}
      v6={"Luz"}
      t7={"SAG "}
      v7={"Aprobado"}
      t8={"Santa Cruz :"}
      v8={"1hr"}
      t9={"Pichilemu:"}
      v9={" 1.30 hr"}
      t10={"Pumanque Centro: "}
      v10={" 7 min"}

      
      
      />

      <Spect
       
        image1={g1}
        image2={g2}
        image3={g3}
        image4={g4}
        image5={g5}
        image6={g6}
        image7={g2}
        image8={g3}
      />

      <Mapa 
      center={point}
      />
<div className="p-10">
<Contacto />
</div>
   

      <Return />
    </div>
  );
}

export default Entrevalles;
