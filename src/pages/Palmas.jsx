import React, { useEffect } from "react";


import Contacto from "../components/Contacto";
import Description from "./components/Descripcion";
import Folleto from "./components/Folleto";

import Spect from "./components/Spect";

import Title from "./components/Title";

import Mapa from "./components/Mapa";
import Atributos from "./components/Atributosimagen";

import logotipo from './img/palmas/Logo pag web LP .png'





import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/palmas/galeria/foto1.jpg'
import g2 from './img/palmas/galeria/foto2.jpg';
import g3 from './img/palmas/galeria/foto3.jpg';
import g4 from './img/palmas/galeria/foto4.jpg';
import g5 from './img/palmas/galeria/foto5.jpg';
import g6 from './img/palmas/galeria/foto6.jpg';
import g7 from './img/palmas/galeria/foto7.jpg';
import g8 from './img/palmas/galeria/foto8.jpg';
import g9 from './img/palmas/galeria/foto9.jpg';


import WebPreview from "./components/WebPreview";



import a1 from  './img/palmas/atributosLP.jpg';



import Mocap from "./img/palmas/mockupLP.png";
import Fondo from "./img/palmas/bgmocap.jpg";


import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer, Building } from 'lucide-react';



function Palmas() {

   
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
  video="https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20las%20palmas%20.mp4"
   brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}

  precio="Parcelas a 49.900.000" 
  texto1="79 parcelas con rol propio a orillas de Lago Rapel"
  texto2=""


/>

      <Description
          nombre= "PALMAS"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
          logoproyecto={logotipo}
          
      />


<WebPreview url="https://www.lanube360.com/bahialaspalmas/" />






<Atributos
 texto={"Proyecto exclusivo condominio de 79 sitios desde 1.500 m² a orillas del Lago Rapel, con acceso a marina privada. Un entorno único, urbanizado y con agua y luz subterránea, pensado para disfrutar la vida frente al lago, conectar con la naturaleza y asegurar una inversión de alto potencial. Vive tranquilidad, paisaje y experiencias inolvidables en Rapel."}
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

export default Palmas;
