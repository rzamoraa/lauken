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

import entrevalles4 from './img/costa-pulin-4.jpg';

import g1 from './img/costa-pulin-Sl/cp1.jpg';
import g2 from './img/costa-pulin-Sl/cp2.jpg';
import g3 from './img/costa-pulin-Sl/cp3.jpg';
import g4 from './img/costa-pulin-Sl/cp4.jpg';
import g5 from './img/costa-pulin-Sl/cp5.jpg';
import g6 from './img/costa-pulin-Sl/cp6.jpg';
import g7 from './img/costa-pulin-Sl/cp7.jpg';
import g8 from './img/costa-pulin-Sl/cp8.jpg';
import g9 from './img/costa-pulin-Sl/cp9.jpg';
import g10 from './img/costa-pulin-Sl/cp10.jpg';


import WebPreview from "./components/WebPreview";


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
      <Header 
      activo={true}
      />

<Title
  logoproyecto={logopulin}
  video="https://storage.googleapis.com/bucket-launken/TV-Pulin_LOW.mp4"
    brochurePdf="https://storage.googleapis.com/bucket-launken/costapulin/Lauken_CC3.pdf"
  showBrochureButton={true}
/>
      <Description
        video={
         "https://storage.googleapis.com/bucket-launken/TV-Pulin_LOW.mp4"
        }
          precioOferta="DESDE UF 2.200"
          oportunidadunica="Ofrecemos crédito directo:"
          a1=" "
          a2=""
          b1="tasa UF +"
          b2="8%"
          enabled={true}

      />
<WebPreview url="https://www.lanube360.com/costa-pulin/" />
<Atributos
 title1={"Costa Pulín - Lago Rapel"}
 title2={"Ubicado en un sector exclusivo al interior de Condominio Costa del Sol"}
 text={""}
 image={entrevalles4}

 t1={"13 Parcelas de"}
 v1={"5.000 mts2"}

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


      
      
      
      />
      <Gallery
        direccion="Proyecto"
        title="Costa Pulín"
        subtitle="Lago Rapel"
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




<Mapa 
      center={point}
      />

<Contacto />



  


      <Return />
    </div>
  );
}

export default Costapulin;
