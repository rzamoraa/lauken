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

import logosanrafel from '../assets/logosanrafel.svg'
import { Helmet } from 'react-helmet-async';




import f1 from './img/san-rafael/san-rafael-1.jpg';
import f2 from './img/san-rafael/san-rafael-2.jpg';
import f3 from './img/san-rafael/san-rafael-7.jpg';

import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/san-rafael/carrusel/sr1.jpg';
import g2 from './img/san-rafael/carrusel/sr2.jpg';
import g3 from './img/san-rafael/carrusel/sr3.jpg';
import g4 from './img/san-rafael/carrusel/sr4.jpg';
import g5 from './img/san-rafael/carrusel/sr5.jpg';
import g6 from './img/san-rafael/carrusel/sr6.jpg';
import g7 from './img/san-rafael/carrusel/sr7.jpg';
import g8 from './img/san-rafael/carrusel/sr8.jpg';


import WebPreview from "./components/WebPreview";
import { FaL } from "react-icons/fa6";





function Sanrafael() {

   
  const point = {
    lat: -34.187536,  // Reemplaza con la latitud de tu trabajo
    lng: -71.490558,  // Reemplaza con la longitud de tu trabajo
  };

  // Desplazarse al principio cuando el componente se monte
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior
  }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta


  return (
    <div className="bg-background">
    <Helmet>
  <title>Costa San Rafael | Parcelas con Marina Exclusiva en Lago Rapel | Laukén</title>
  
  <meta 
    name="description" 
    content="47 parcelas exclusivas de 5.000m² en Costa San Rafael, Lago Rapel. Marina privada de 16.000m² con muelle propio. Vista al lago y Cordillera de Los Andes. A 2,5 hrs de Santiago. Proyecto premium ideal para deportes náuticos." 
  />
  
  <meta 
    name="keywords" 
    content="costa san rafael lago rapel, parcelas vista al lago, marina exclusiva rapel, parcelas con muelle, terrenos lago rapel, parcelas 5000m2, propiedades premium lago rapel, deportes náuticos rapel, parcelas con rol propio, vista cordillera andes" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/costa-san-rafael" />
  <meta property="og:title" content="Costa San Rafael | Parcelas Premium con Marina Exclusiva en Lago Rapel" />
  <meta property="og:description" content="Exclusivo proyecto de 47 parcelas con marina privada, muelle y áreas comunes en Lago Rapel. Vista privilegiada al lago y Cordillera de Los Andes." />
  <meta property="og:image" content={f1} />
  <meta property="og:image:alt" content="Vista panorámica de Costa San Rafael en Lago Rapel" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Costa San Rafael | Parcelas con Marina en Lago Rapel" />
  <meta name="twitter:description" content="47 parcelas exclusivas con marina privada de 16.000m². Proyecto premium para amantes de los deportes náuticos." />
  <meta name="twitter:image" content={f1} />
  
  {/* Datos estructurados para proyecto inmobiliario */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Costa San Rafael",
      "description": "Proyecto exclusivo de 47 parcelas con marina privada en Lago Rapel",
      "url": "https://lauken.cl/costa-san-rafael",
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Laukén Inmobiliaria",
        "url": "https://lauken.cl"
      },
      "numberOfRooms": {
        "@type": "QuantitativeValue",
        "value": 47,
        "unitText": "Parcelas"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Marina Privada",
          "value": true,
          "description": "Marina de 16.000m² con muelle y playa"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Vista al Lago",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Vista Cordillera",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Acceso Controlado",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Factibilidad Servicios",
          "value": true,
          "description": "Agua y luz disponibles"
        }
      ],
      "locationCreative": {
        "@type": "CreativeWork",
        "video": {
          "@type": "VideoObject",
          "url": "https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4",
          "thumbnailUrl": f1,
          "name": "Tour Virtual Costa San Rafael",
          "description": "Vista aérea del proyecto Costa San Rafael en Lago Rapel"
        }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-34.187536",
        "longitude": "-71.490558"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Tamaño parcelas",
          "value": "5000m²"
        },
        {
          "@type": "PropertyValue",
          "name": "Tamaño marina",
          "value": "16000m²"
        },
        {
          "@type": "PropertyValue",
          "name": "Frente lago",
          "value": "70 metros"
        },
        {
          "@type": "PropertyValue",
          "name": "Distancia Santiago",
          "value": "2.5 horas"
        }
      ],
      "specialFeatures": [
        "Marina exclusiva",
        "Muelle privado",
        "Playa",
        "Estacionamientos de embarcaciones",
        "Áreas comunes",
        "Vista al lago",
        "Vista Cordillera de Los Andes"
      ]
    })}
  </script>

  {/* Metadatos para SEO Local */}
  <meta name="geo.position" content="-34.187536;-71.490558" />
  <meta name="geo.placename" content="Costa San Rafael, Lago Rapel" />
  <meta name="geo.region" content="CL-LI" />
  
  {/* Enlaces canónicos y precargas */}
  <link rel="canonical" href="https://lauken.cl/costa-san-rafael" />
  <link 
    rel="preload" 
    href="https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4" 
    as="video" 
    type="video/mp4" 
  />
  <link rel="prerender" href="https://lanube360.com/temporales/costa-sanrafael1/" />
</Helmet>

      <Header 
      nube={true}
      />
<Title
  logoproyecto={logosanrafel}
  video="https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4"
   brochurePdf="https://storage.googleapis.com/bucket-launken/DesarrollosLauken%5Bcc%5D.pdf"
  showBrochureButton={true}
/>

      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4"
        }
        precioOferta="DESDE $30.000.000"
        oportunidadunica=""
      
        a1=""
        a2=""
        b1=""
        b2=""
        enabled={true}
      />
<WebPreview url="https://www.lanube360.com/costa-sanrafael/" />
<Atributos
 title1={"Costa San Rafael - Lago Rapel"}
 title2={"Proyecto único por su ubicación, características del suelo y acceso al lago.  "}
 text={""}
 image={f4}

 t1={"47 Parcelas de "}
 v1={" 5.000 mts2"}

 t2={"Rol"}
 v2={"Propio"}

 t3={"Caminos "}
 v3={"Estabilizados"}

 t5={"Acceso al loteo"}
 v5={"Controlado"}

 t6={"Factibilidad de"}
 v6={"Agua y Luz" }
 
 t4={"Marina "}
 v4={"Común"}
 
 t7={"Santiago"}
 v7={"2,30 hr"}

 t10={"La Estrella:  "}
 v10={"45 min"}

 t8={"Santa Cruz:"}
 v8={"1,20 hr"}

 t9={"Puertecillo: "}
 v9={" 1,20 hr"}


      
      
      
      />
<Gallery
        direccion="Proyecto"
        title="Costa San Rafael"
        subtitle="Lago Rapel"
        subtitle1="Proyecto Revolucionario"
        subdes1="  Exclusivo proyecto 47 parcelas planas y de lomaje suave y con vista hacia el lago y Cordillera de Los Andes. Todas de 5.000m2 y con rol propio, ubicadas al interior de fundo militar en un valle único de sector San Rafael."
        subtitle2="Atributos Únicos"
        subdes2="   Marina exclusiva para la copropiedad, compuesta por un terreno plano de 16.000 m2, 70 mts de frente de lago con muelle, estacionamientos, áreas comunes, playa y amplia bajada para embarcaciones."
        subtitle3="Ambiente Familiar"
        subdes3="   Proyecto 100% enfocado en cautivar el ambiente familiar y atraer a los amantes de los deportes náuticos."
        subtitle4="Inversión Segura"
        subdes4="    A tan solo 2,5 hrs de Santiago, en una ubicación estratégica y con características únicas, garantizando alta plusvalía a futuro."
        image1= {f3}
        image2= {f2}
        image3={f1}
      />



<Spect
       
       image1={g1}
       image2={g2}
       image3={g3}
       image4={g4}
       image5={g5}
       image6={g8}
       image7={g7}
       image8={g6}
     />



      <Mapa 
      center={point}
      />

<Contacto />

      <Return />
    </div>
  );
}

export default Sanrafael;
