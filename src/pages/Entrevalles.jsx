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
    <div className="bg-white">
       <Helmet>
        <title>Entre Valles - Proyecto</title>
        <meta name="description" content="Proyecto Entre Valles - Parcelación exclusiva en Chile." />
      </Helmet>
      <Header />
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
