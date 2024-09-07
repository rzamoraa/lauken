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
import logopulin from '../assets/logopulin.svg'


function Costapulin() {

   
  const point = {
    lat: -34.10409508034245,  // Reemplaza con la latitud de tu trabajo
    lng: -71.54721887210357,  // Reemplaza con la longitud de tu trabajo
  };



  return (
    <div className="bg-white">
      <Header />

      <Title
      logoproyecto={logopulin}
        video={
          "https://storage.googleapis.com/bucket-launken/costapulin/costaOnline.mp4"
        }
      />
      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/costapulin/costaOnline.mp4"
        }
      />

      <Gallery
        direccion="Proyecto Loteo Costa Rapel"
        title="Exclusividad en cada detalle"
        subtitle1="Diseño único"
        subdes1="  Este proyecto en la costa del Lago Rapel ofrece parcelas rodeadas de naturaleza, con acceso privado y marinas que elevan tu estilo de vida. Un lugar que se distingue por su belleza natural y sus vistas panorámicas."
        subtitle2="Comodidad y tranquilidad"
        subdes2="    Disfruta de la comodidad de contar con caminos estabilizados, seguridad 24/7, y cercanía a importantes servicios. Cada parcela está diseñada para ofrecerte paz y privacidad, todo en un ambiente conectado con la naturaleza."
        subtitle3="Acceso controlado"
        subdes3="   Contamos con acceso exclusivo para propietarios, garantizando tu seguridad y la de tu familia. Un espacio pensado para disfrutar sin preocupaciones."
        subtitle4="Inversión segura"
        subdes4="    Con precios desde UF 2.200, este proyecto no solo es un lugar donde construir tu hogar de ensueño, sino también una inversión inteligente que se revaloriza con el tiempo."
        image1="https://storage.googleapis.com/bucket-launken/costapulin/1v2.jpg"
        image2="https://storage.googleapis.com/bucket-launken/costapulin/2.jpg"
        image3="https://storage.googleapis.com/bucket-launken/costapulin/3.jpg"
      />

<Atributos
      title1={"Nuestra Trayectoria"}
      title2={"Confiado por decenas de familias que buscan &nbsp; calidad de vida"}
      text={"En Lauken Inmobiliaria, estamos orgullosos de haber ayudado a numerosas familias a encontrar su hogar ideal. Nuestro proyecto en Costa Rapel combina exclusividad, naturaleza y una alta calidad de vida. Cada lote ha sido diseñado pensando en ti y en el futuro que mereces. ¡Únete a quienes ya están disfrutando de este increíble lugar y asegura tu espacio hoy mismo!"}
      image={"https://storage.googleapis.com/bucket-launken/costapulin/4.jpg"}

      t1={"Matanza puertecillo"}
      v1={"1HR"}
      t2={"Litueche la estrella"}
      v2={"20 MIN"}
      t3={"Santacruz Ruta Colchagua Pichilemu"}
      v3={"1,20 HR"}
      t4={"Caminos estabilizados"}
      v4={"100%" }
      t5={"Acceso controlado"}
      v5={"+Seguridad"}
      t6={"Luz y agua subterranea"}
      v6={"100%"}
      
      
      
      />

      <Spect
        title="Especificaciones"
        descripcion="El proyecto Costa Rapel te ofrece una combinación perfecta de ubicación, infraestructura y exclusividad. Cada parcela cuenta con características diseñadas para maximizar tu calidad de vida. Disfruta de acceso controlado, caminos estabilizados, luz subterránea y marina privada. Todo esto, en un entorno rodeado de naturaleza nativa y con vistas espectaculares al lago."
        box1="Diseño"
        box2="Entorno"
        box3="calidad "
        box4="Incluye"
        title1="Diseño exclusivo y adaptado a tus necesidades"
        text1="En Costa Rapel, cada parcela ha sido diseñada para adaptarse a tu estilo de vida. Con opciones de construcción que se ajustan a tus gustos, el proyecto ofrece flexibilidad para que puedas crear el hogar de tus sueños. Desde amplios terrenos hasta acceso directo al lago, cada detalle ha sido pensado para ofrecerte una experiencia de vida inigualable."
        image1="https://storage.googleapis.com/bucket-launken/costapulin/Container01.jpg"
        title2="Entorno natural privilegiado"
        text2="Costa Rapel te ofrece parcelas rodeadas por la belleza natural de la región, con valles y vegetación nativa que crean un ambiente de tranquilidad y armonía. Cada terreno está cuidadosamente seleccionado para garantizar vistas impresionantes y un contacto directo con la naturaleza. Este entorno es ideal para quienes buscan una vida en equilibrio, donde el confort moderno se combina con lo mejor del paisaje natural.."
        image2="https://storage.googleapis.com/bucket-launken/costapulin/Container02.jpg"
        title3="Pensado para mejorar tu calidad de vida"
        text3="En Costa Rapel, hemos diseñado un proyecto que no solo te ofrece un lugar donde vivir, sino una experiencia que transforma tu día a día. Disfruta de la eficiencia y tranquilidad que te brinda estar rodeado de naturaleza, con todas las comodidades modernas a tu alcance. Desde la seguridad de un acceso controlado hasta la exclusividad de una marina privada, cada detalle ha sido pensado para hacer tu vida más placentera y cómoda. ¡Ven a conocerlo y descubre todo lo que tenemos para ti!"
        image3="https://storage.googleapis.com/bucket-launken/costapulin/Container03.jpg"
        title4="Todo lo que necesitas"
        text4="Costa Rapel lo tiene todo para que puedas comenzar a disfrutar de inmediato. Cada lote cuenta con acceso a luz subterránea, agua potable, caminos estabilizados y seguridad 24/7. Además, tendrás acceso exclusivo a una marina privada, perfecta para quienes disfrutan de actividades acuáticas o simplemente quieren relajarse en un entorno natural de lujo. Costa Rapel te ofrece un entorno completo para que vivas con todas las comodidades en un lugar único."
        image4="https://storage.googleapis.com/bucket-launken/costapulin/Container04.jpg"
      />

<Mapa 
      center={point}
      />

      <Contactus />

      <Return />
    </div>
  );
}

export default Costapulin;
