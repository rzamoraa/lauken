import React, { useEffect } from "react";


import Contacto from "../components/Contacto";
import Description from "./components/Descripcion";
import Folleto from "./components/Folleto";

import Spect from "./components/Spect";

import Title from "./components/Title";

import Mapa from "./components/Mapa";
import Atributos from "./components/Atributos";

import logosanrafel from '../assets/logosanrafel.svg'





import f4 from './img/san-rafael/san-rafael-4.jpg';

import g1 from './img/san-rafael/carrusel/sr1.jpg';
import g2 from './img/san-rafael/carrusel/sr2.jpg';
import g3 from './img/san-rafael/carrusel/sr3.jpg';
import g4 from './img/san-rafael/carrusel/sr4.jpg';
import g5 from './img/san-rafael/carrusel/sr5.jpg';
import g6 from './img/san-rafael/carrusel/sr6.jpg';
import g7 from './img/san-rafael/carrusel/sr7.jpg';
import g8 from './img/san-rafael/carrusel/sr8.jpg';
import g9 from './img/san-rafael/carrusel/sr9.jpg';


import WebPreview from "./components/WebPreview";







import Mocap from "./img/mocap sanrafael.png";
import Fondo from "./img/costa-pulin-Sl/cp1.jpg";


import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer, Building } from 'lucide-react';



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

    
 
<Title
  logoproyecto={logosanrafel}
  video="https://storage.googleapis.com/bucket-launken/Videosanrafael.mp4"
   brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}

  precio="Desde $34.900.000" 
  texto1="47 Parcelas con Rol Propio "
  texto2=" ¡Agenda tu visita! "


/>

      <Description
          nombre= "SAN RAFAEL"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
          logoproyecto={logosanrafel}
          
      />


<WebPreview url="https://www.lanube360.com/costa-sanrafael/" />
<Atributos
 texto={"Innovador proyecto de 47 parcelas con terrenos planos y suaves lomajes, que ofrecen espectaculares vistas al Lago Rapel y la Cordillera de los Andes. Vive rodeado de naturaleza, en un entorno ideal para descansar, practicar deportes y conectar con lo mejor de la vida junto al lago. Todo esto, en un valle privilegiado del sector San Rafael, Lago Rapel. "}
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

      i1={MapPin}
      i2={FileText}
      i3={Route}
      i4={Anchor}
      i5={Lock}
      i6={Droplets}
      i7={ShoppingCart}
      i8={Building}
      i9={Clock}
      i10={Timer}

      
      

      
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

export default Sanrafael;
