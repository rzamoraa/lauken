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

import entrevalles1 from './img/costa-pulin-1.jpg';
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
    <div className="bg-white">
       <Helmet>
        <title>Costa Pulin - Proyecto</title>
        <meta name="description" content="Proyecto Costa Pulin - Parcelación cerca del mar." />
      </Helmet>
      <Header />

      <Title
      logoproyecto={logopulin}
        video={
          "https://storage.googleapis.com/bucket-launken/costapulin/costaOnline.mp4"
        }
      />
      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/costapulin/costaOnline.mp4"
        }
      />

      <Gallery
        direccion="Proyecto"
        title="Costa Pulin Lago Rapel"
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
 title2={"Ubicado en un sector exclusivo al interior de condominio Costa del Sol"}
 text={""}
 image={entrevalles4}

 t1={"13 Parcelas de"}
 v1={"5.000 mts2"}

 t2={"Rol"}
 v2={"Propio"}

 t3={"Caminos "}
 v3={"Estabilizados"}

 t4={"Acceso"}
 v4={"Controlado"}

 t5={"Factibilidad de"}
 v5={"Agua y Luz" }
 
 t6={"San Roberto"}
 v6={"Supermercado"}
 
 t7={"Marina"}
 v7={"Privada"}

 t8={"Santiago "}
 v8={"2hr"}

 t9={"Santa Cruz :"}
 v9={"1,20hr"}

 t10={"Acceso a "}
 v10={" Aeródromo"}


      
      
      
      />

<Spect
       
       image1={g1}
       image2={g2}
       image3={g3}
       image4={g4}
       image5={g5}
       image6={g6}
       image7={g7}
       image8={g8}
     />

<Mapa 
      center={point}
      />

<Contacto />

      <Return />
    </div>
  );
}

export default Costapulin;
