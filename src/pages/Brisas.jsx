import React, { useEffect } from "react";


import Contacto from "../components/Contacto";
import Description from "./components/Descripcion";
import Folleto from "./components/Folleto";

import Spect from "./components/Spect";

import Title from "./components/Title";

import Mapa from "./components/Mapa";
import Atributos from "./components/Atributosimagen";

import logotipo from './img/brisas/logo pag web LB.png'




import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/brisas/galeria/1.jpg'
import g2 from './img/brisas/galeria/2.jpg';
import g3 from './img/brisas/galeria/3.jpg';
import g4 from './img/brisas/galeria/4.jpg';
import g5 from './img/brisas/galeria/5.jpg';
import g6 from './img/brisas/galeria/6.jpg';
import g7 from './img/brisas/galeria/7.jpg';
import g8 from './img/brisas/galeria/8.jpg';
import g9 from './img/brisas/galeria/9.jpg';


import WebPreview from "./components/WebPreview";




import a1 from  './img/brisas/AtributosLB.jpg';


import Mocap from "./img/brisas/mockupLB.png";
import Fondo from "./img/brisas/fondo folleto.jpg";



import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer, Building } from 'lucide-react';



function Brisas() {

   
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

    
 
<Title
  logoproyecto={logotipo}
  video="https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20La%20Brisa.mp4"
   brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}

  precio="Parcelas a 49.900.000" 
  texto1="34 parcelas con rol propio a orillas de Lago Rapel "



/>

      <Description
          nombre= "SAN RAFAEL"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
          logoproyecto={logotipo}
          
      />


<WebPreview url="https://www.lanube360.com/brisassanrafael/" />
<Atributos
 texto={"Proyecto exclusivo de 34 parcelas de 5.000 m², ubicadas en el sector de San Rafael, a orillas del Lago Rapel. Un entorno privilegiado donde la naturaleza y la tranquilidad se combinan con la comodidad de contar con acceso directo al lago a través de una marina privada, ideal para disfrutar de actividades náuticas, deportes al aire libre y momentos únicos."}
 image={a1}

      

      
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
       image9={g9}
     />

<Folleto
mocap={Mocap}
fondo={Fondo}
linkfolleto={'https://storage.googleapis.com/bucket-launken/brochure/BrochureSR.pdf'}
/>

      <Mapa 
      center={point}
      />

<Contacto />

 
    </div>
  );
}

export default Brisas;
