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
import g7 from './img/entre-valles-s-7.jpg';
import g8 from './img/entre-valles-s-8.jpg';
import g9 from './img/entre-valles-s-9.jpg';

import Folleto from "./components/folleto";


import { MapPin, FileText, Anchor, Lock, Route, Droplets, ShoppingCart, Plane, Clock, Timer, Zap, CircleCheckBig  } from 'lucide-react';


import Mocap from "./img/mocap.png";
import Fondo from "./img/costa-pulin-Sl/cp1.jpg";

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
    <div className="bg-background">
  
      <Vendido />
      <Title
      logoproyecto={logovalles}
        video={
          "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4"
        }

          precio="" 
  texto1="21 parcelas con Rol Propio "
  texto2=" Éxito Total de Ventas "
  showBrochureButton={false}


      />
      <Description
          nombre= "ENTRE VALLES"
          bajada="LAGO RAPEL"
          precio="DESDE UF 2200"
          logoproyecto={logovalles}
      />

      <Atributos
    
      texto={"Exclusivo proyecto de 21 parcelas de 5.000 m² en el sector Rincón del Sauce, rodeadas por tres valles únicos y vegetación nativa. Un entorno natural, tranquilo y con caminos establecidos, ideal para quienes buscan desconexión y calidad de vida. Inversión segura y plusvalía garantizada en una zona privilegiada de la VI región."}
   
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


      i1={MapPin}
      i2={FileText}
      i3={Route}
      i4={Lock}
      i5={Droplets}
      i6={Zap}
      i7={CircleCheckBig}
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
        image6={g6}
        image7={g7}
        image8={g8}
        image9={g9}
      />








      <Mapa 
      center={point}
      />
<div className="p-10">
<Contacto />
</div>
   

    </div>
  );
}

export default Entrevalles;
