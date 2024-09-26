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
import f3 from './img/san-rafael/san-rafael-3.jpg';

import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/san-rafael/carrusel/sr1.jpg';
import g2 from './img/san-rafael/carrusel/sr2.jpg';
import g3 from './img/san-rafael/carrusel/sr3.jpg';
import g4 from './img/san-rafael/carrusel/sr4.jpg';
import g5 from './img/san-rafael/carrusel/sr5.jpg';
import g6 from './img/san-rafael/carrusel/sr6.jpg';
import g7 from './img/san-rafael/carrusel/sr7.jpg';
import g8 from './img/san-rafael/carrusel/sr8.jpg';






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

<Gallery
        direccion="Proyecto"
        title="Costa San Rafael Lago Rapel"
        subtitle1="Proyecto Revolucionario"
        subdes1="  Exclusivo proyecto 47 parcelas planas y de lomaje suave y con vista hacia el lago y Cordillera de Los Andes. Todas de 5.000m2 y con rol propio, ubicadas al interior de fundo militar en un valle único de sector San Rafael."
        subtitle2="Atributos Únicos"
        subdes2="   Marina exclusiva para la copropiedad, compuesta por un terreno plano de 16.000 m2, 70 mts de frente de lago con muelle, estacionamientos, áreas comunes, playa y amplia bajada para embarcaciones."
        subtitle3="Ambiente Familiar"
        subdes3="   Proyecto 100% enfocado en cautivar el ambiente familiar y atraer a los amantes de los deportes náuticos."
        subtitle4="Inversión Segura"
        subdes4="    A tan solo 2,5 hrs de Santiago, en una ubicación estratégica y con características únicas, garantizando alta plusvalía a futuro."
        image1= {f1}
        image2= {f2}
        image3={f3}
      />

<Atributos
 title1={"Costa San Rafael - Lago Rapel"}
 title2={"Proyecto único por su ubicación, características del suelo y marina privada.  "}
 text={""}
 image={f4}

 t1={"47 Parcelas de "}
 v1={" 5.000 mts2"}

 t2={"Rol"}
 v2={"Propio"}

 t3={"Caminos "}
 v3={"Estabilizados"}

 t4={"Acceso"}
 v4={"Controlado"}

 t5={"Factibilidad de"}
 v5={"Agua y Luz" }
 
 t6={"Marina "}
 v6={"Privada"}
 
 t7={"Santiago"}
 v7={"2,30 hr"}

 t8={"La Estrella:  "}
 v8={"45 min"}

 t9={"Santa Cruz:"}
 v9={"1,20 hr"}

 t10={"Puertecillo: "}
 v10={" 1,20 hr"}


      
      
      
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

export default Sanrafael;
