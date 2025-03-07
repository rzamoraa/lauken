import React, { useEffect } from "react";
import Header from "../components/Header";

import Contacto from "../components/Contacto";
import Description from "./components/Descripcion";
import Gallery from "./components/Gallery";
import Spect from "./components/Spect";


import Title from "./components/Title";
import Return from "./components/Return";
import Mapa from "./components/Mapa";
import Atributos from "./components/Atributos";
import logopulin from '../assets/logopulin.svg'
import { Helmet } from 'react-helmet-async';

import entrevalles1 from './img/costa-pulin-5.jpg';
import entrevalles2 from './img/costa-pulin-2.jpg';
import entrevalles3 from './img/costa-pulin-3.jpg';

import entrevalles4 from './img/costa-pulin-4.jpg';

import g1 from './img/costa-pulin-Sl/cp1.jpg';
import g2 from './img/costa-pulin-Sl/cp2.jpg';
import g3 from './img/costa-pulin-Sl/cp3.jpg';
import g4 from './img/costa-pulin-Sl/cp4.jpg';
import g5 from './img/costa-pulin-Sl/cp5.jpg';
import g6 from './img/costa-pulin-Sl/cp6.jpg';
import g7 from './img/costa-pulin-Sl/cp7.jpg';
import g8 from './img/costa-pulin-Sl/cp8.jpg';
import g9 from './img/costa-pulin-Sl/cp9.jpg';
import g10 from './img/costa-pulin-Sl/cp10.jpg';


import WebPreview from "./components/WebPreview";


function Costapulin() {

   
  const point = {
    lat: -34.10409508034245,  // Reemplaza con la latitud de tu trabajo
    lng: -71.54721887210357,  // Reemplaza con la longitud de tu trabajo
  };

  // Desplazarse al principio cuando el componente se monte
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior
  }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta

  return (
    <div className="bg-background">


      
     <Helmet>
  <title>Costa Pulín | Parcelas Exclusivas en Lago Rapel | Marina Privada</title>
  
  <meta 
    name="description" 
    content="Costa Pulín: 13 parcelas exclusivas de 5.000m² a orillas de Lago Rapel, con marina privada. Proyecto premium en Condominio Costa del Sol con acceso controlado, factibilidad de agua y luz. A 2 horas de Santiago." 
  />
  
  <meta 
    name="keywords" 
    content="costa pulin, parcelas lago rapel, marina privada lago rapel, condominio costa del sol, terrenos orilla lago, parcelas 5000m2, propiedades premium lago rapel, inversión lago rapel, parcelas con embarcadero" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/costa-pulin" />
  <meta property="og:title" content="Costa Pulín | Parcelas Premium con Marina Privada en Lago Rapel" />
  <meta property="og:description" content="Exclusivo proyecto de 13 parcelas con marina privada en Lago Rapel. Ubicado en Condominio Costa del Sol, con seguridad 24/7 y acceso controlado." />
  <meta property="og:image" content={entrevalles1} />
  <meta property="og:image:alt" content="Vista aérea de Costa Pulín en Lago Rapel" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Costa Pulín | Parcelas Premium en Lago Rapel" />
  <meta name="twitter:description" content="13 parcelas exclusivas con marina privada en Lago Rapel. Condominio cerrado, alta plusvalía y entorno natural privilegiado." />
  <meta name="twitter:image" content={entrevalles1} />
  
  {/* Datos estructurados para proyecto inmobiliario */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Costa Pulín",
      "description": "Exclusivo proyecto de 13 parcelas con marina privada en Lago Rapel",
      "url": "https://lauken.cl/costa-pulin",
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Laukén Inmobiliaria",
        "url": "https://lauken.cl"
      },
      "numberOfRooms": {
        "@type": "QuantitativeValue",
        "value": 13,
        "unitText": "Parcelas"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Marina Privada",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Acceso Controlado",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Factibilidad Servicios Básicos",
          "value": true
        }
      ],
      "locationCreative": {
        "@type": "CreativeWork",
        "video": {
          "@type": "VideoObject",
          "url": "https://storage.googleapis.com/bucket-launken/Videocostapulin.mp4",
          "thumbnailUrl": entrevalles1,
          "name": "Tour Virtual Costa Pulín",
          "description": "Video aéreo del proyecto Costa Pulín en Lago Rapel"
        }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-34.10409508034245",
        "longitude": "-71.54721887210357"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Tamaño parcelas",
          "value": "5000m²"
        },
        {
          "@type": "PropertyValue",
          "name": "Distancia a Santiago",
          "value": "2 horas"
        },
        {
          "@type": "PropertyValue",
          "name": "Ubicación",
          "value": "Condominio Costa del Sol, Lago Rapel"
        }
      ]
    })}
  </script>

  {/* Metadatos para SEO Local */}
  <meta name="geo.position" content="-34.10409508034245;-71.54721887210357" />
  <meta name="geo.placename" content="Costa Pulín, Lago Rapel" />
  <meta name="geo.region" content="CL-LI" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://lauken.cl/costa-pulin" />
  
  {/* Precargar video */}
  <link 
    rel="preload" 
    href="https://storage.googleapis.com/bucket-launken/TV-Pulin_LOW.mp4" 
    as="video" 
    type="video/mp4" 
  />
</Helmet>



      <Header 
      activo={true}
      />

<Title
  logoproyecto={logopulin}
  video="https://storage.googleapis.com/bucket-launken/TV-Pulin_LOW.mp4"
    brochurePdf="https://storage.googleapis.com/bucket-launken/brochure/DesarrollosLauken%5B1%5D.pdf"
  showBrochureButton={true}
/>
      <Description
        video={
         "https://storage.googleapis.com/bucket-launken/TV-Pulin_LOW.mp4"
        }
          precioOferta="DESDE UF 3000"
          oportunidadunica="Ofrecemos crédito directo:"
          a1="Hasta "
          a2="60 cuotas"
          b1=", tasa UF +"
          b2="8%"
          enabled={true}

      />

      <Gallery
        direccion="Proyecto"
        title="Costa Pulín"
        subtitle="Lago Rapel"
        subtitle1="Diseño único"
        subdes1="  Exclusivo proyecto compuesto por 13 sitios ubicado a orillas de Lago Rapel. Desarrollo cuenta con marina privada."
        subtitle2="Exclusividad y Tranquilidad"
        subdes2="    Ubicado en uno de los sectores más exclusivos de Lago Rapel, al interior de Condominio Costa del Sol y rodeado de valles y vegetación nativa."
        subtitle3="Privacidad y Seguridad"
        subdes3="   Proyecto cuenta con acceso controlado,  garantizando privacidad y seguridad a sus residentes. Un espacio para descansar y disfrutar sin preocupaciones."
        subtitle4="Gran Plusvalía"
        subdes4="    Ubicación estratégica en los alrededores más codiciados por la gente. Una oportunidad de inversión 100% garantizada con gran valor agregado a futuro."
        image1= {entrevalles1}
        image2= {entrevalles2}
        image3={entrevalles3}
      />

<Atributos
 title1={"Costa Pulín - Lago Rapel"}
 title2={"Ubicado en un sector exclusivo al interior de Condominio Costa del Sol"}
 text={""}
 image={entrevalles4}

 t1={"13 Parcelas de"}
 v1={"5.000 mts2"}

 t2={"Rol"}
 v2={"Propio"}

 t5={"Caminos "}
 v5={"Estabilizados"}

 t4={"Acceso"}
 v4={"Controlado"}

 t6={"Factibilidad de"}
 v6={"Agua y Luz" }
 
 t7={"San Roberto"}
 v7={"Supermercado"}
 
 t3={"Marina"}
 v3={"Privada"}

 t9={"Santiago "}
 v9={"2hr"}

 t10={"Santa Cruz :"}
 v10={"1,20hr"}

 t8={"Acceso a "}
 v8={" Aeródromo"}


      
      
      
      />

<Spect
       
       image1={g1}
       image2={g2}
       image3={g3}
       image4={g4}
       image5={g5}
       image6={g10}
       image7={g7}
       image8={g8}
       image9={g9}
       image10={g6}
     />


<WebPreview url="https://www.lanube360.com/costa-pulin/" />


<Mapa 
      center={point}
      />

<Contacto />



  


      <Return />
    </div>
  );
}

export default Costapulin;
