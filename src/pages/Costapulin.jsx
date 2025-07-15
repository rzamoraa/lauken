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


import entrevalles1 from './img/costa-pulin-5.jpg';
import entrevalles2 from './img/costa-pulin-2.jpg';
import entrevalles3 from './img/costa-pulin-3.jpg';

import entrevalles4 from './img/costa-pulin-Sl/datos.jpg';

import g1 from './img/costa-pulin-Sl/cp1.jpg';
import g2 from './img/costa-pulin-Sl/cp2.jpg';
import g3 from './img/costa-pulin-Sl/cp3.jpg';
import g4 from './img/costa-pulin-Sl/cp4.jpg';
import g5 from './img/costa-pulin-Sl/cp5.jpg';

import g6 from './img/costa-pulin-Sl/costapulin6.jpg';



import g7 from './img/costa-pulin-Sl/cp7.jpg';
import g8 from './img/costa-pulin-Sl/cp8.jpg';
import g9 from './img/costa-pulin-Sl/cp9.jpg';
import g10 from './img/costa-pulin-Sl/cp10.jpg';


import WebPreview from "./components/WebPreview";


import Folleto from "./components/Folleto";


import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer } from 'lucide-react';



import Mocap from "./img/mocap costapulin.png";
import Fondo from "./img/costa-pulin-Sl/cp1.jpg";


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


<Title
  logoproyecto={logopulin}
  video="https://storage.googleapis.com/bucket-launken/opcionBanner1.mp4"
    brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}
  precio="Desde UF 2.500" 
  texto1="13 Parcelas con Rol Propio "
  texto2=" Ofrecemos Crédito Directo "
/>
      <Description
          nombre= "COSTA PULIN"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
           logoproyecto={logopulin}
      />
<WebPreview url="https://www.lanube360.com/costa-pulin/" />
<Atributos


 texto={"Proyecto único de 13 parcelas de 5.000 m², ubicadas a orillas del Lago Rapel, en el exclusivo sector de Pulín, Costa del Sol. Un entorno ideal para vivir la experiencia del lago, practicar deportes al aire libre y disfrutar en familia. Seguridad, naturaleza y una inversión con alto potencial de plusvalía futura."}
 


 image={entrevalles4}

 t1={"13 Parcelas "}
 v1={"de 5.000 mts2"}

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
      


      i1={MapPin}
      i2={FileText}
      i3={Anchor}
      i4={Lock}
      i5={Route}
      i6={Droplets}
      i7={ShoppingCart}
      i8={Plane}
      i9={Clock}
      i10={Timer}



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



<Folleto
mocap={Mocap}
fondo={g1}
linkfolleto={'https://storage.googleapis.com/bucket-launken/brochure/BrochurePulin.pdf'}
/>

<Mapa 
      center={point}
      />

<Contacto />




    </div>
  );
}

export default Costapulin;
