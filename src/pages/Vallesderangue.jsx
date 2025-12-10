import React, { useEffect } from "react";


import Contacto from "../components/Contacto";
import Description from "./components/Descripcion";
import Folleto from "./components/Folleto";

import Spect from "./components/Spect";

import Title from "./components/Title";

import Mapa from "./components/Mapa";
import Atributos from "./components/Atributosimagen";

import logotipo from './img/vallesrangue/logo pag web LR.png'





import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/vallesrangue/galeria/1.jpg'
import g2 from './img/vallesrangue/galeria/2.jpg';
import g3 from './img/vallesrangue/galeria/3.jpg';
import g4 from './img/vallesrangue/galeria/4.jpg';
import g5 from './img/vallesrangue/galeria/5.jpg';
import g6 from './img/vallesrangue/galeria/6.jpg';
import g7 from './img/vallesrangue/galeria/7.jpg';
import g8 from './img/vallesrangue/galeria/8.jpg';
import g9 from './img/vallesrangue/galeria/9.jpg';

import WebPreview from "./components/WebPreview";



import a1 from  './img/vallesrangue/atributosAculeo.jpg';


import Mocap from "./img/vallesrangue/mockupRangue.png";
import Fondo from "./img/vallesrangue/Fondo folleto con opacidad.jpg";



import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer, Building } from 'lucide-react';



function VallesdeRangue() {

   
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
  video="https://storage.googleapis.com/bucket-launken/videosproyectos/banner%20lomas%20de%20rangue%20.mp4"
   brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}

  precio="Parcelas a 49.900.000" 
  texto1="19 parcelas ubicadas en Laguna de Aculeo "
  texto2=""


/>

      <Description
          nombre= "SAN RAFAEL"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
          logoproyecto={logotipo}
          
      />


<WebPreview url="https://www.lanube360.com/vallederangue/" />
<Atributos
 texto={"Proyecto exclusivo de 19 parcelas de 5.000 m² en la Laguna de Aculeo, rodeado de naturaleza y tranquilidad. Disfruta de excelente conectividad con Santiago, en un entorno ideal para vivir, descansar y disfrutar al aire libre.Una oportunidad única de inversión con alta plusvalía. "}
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
fondo={g1}
linkfolleto={'https://storage.googleapis.com/bucket-launken/brochure/BrochureSR.pdf'}
/>

      <Mapa 
      center={point}
      />

<Contacto />

 
    </div>
  );
}

export default VallesdeRangue;
