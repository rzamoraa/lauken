import React from "react";
import Header from "../components/Header";

import Contactus from "./components/Contactus";
import Description from "./components/Descripcion";
import Gallery from "./components/Gallery";
import Spect from "./components/Spect";

import Title from "./components/Title";
import Return from "./components/Return";
import Mapa from "./components/Mapa";
import Atributos from "./components/Atributos";

import logosanrafel from '../assets/logosanrafel.svg'
import { Helmet } from 'react-helmet-async';


function Sanrafael() {

   
  const point = {
    lat: -34.187536,  // Reemplaza con la latitud de tu trabajo
    lng: -71.490558,  // Reemplaza con la longitud de tu trabajo
  };




  return (
    <div className="bg-white">
       <Helmet>
        <title>San Rafael - Proyecto Laukén</title>
        <meta name="description" content="Proyecto San Rafael de Laukén Inmobiliaria, parcelas exclusivas con vistas a la naturaleza en una de las regiones más privilegiadas de Chile." />
      </Helmet>
      <Header />

      <Title
      logoproyecto={logosanrafel}
        video={
          "https://storage.googleapis.com/bucket-launken/sanrafael/sanrafael-homeonline.mp4"
        }
      />
      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/sanrafael/sanrafael-homeonline.mp4"
        }
      />

 


      <Mapa 
      center={point}
      />

     

      <Return />
    </div>
  );
}

export default Sanrafael;
