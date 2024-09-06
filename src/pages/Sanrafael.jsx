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

import logovalles from '../assets/logovalles.svg'



function Sanrafael() {
  return (
    <div className="bg-white">
      <Header />

      <Title
      logoproyecto={logovalles}
        video={
          "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4"
        }
      />
      <Description
        video={
          "https://storage.googleapis.com/bucket-launken/entrevalleVideo.mp4"
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
        image1="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        image2="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        image3="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Atributos />

      <Spect
        title="Especificaciones"
        descripcion="El proyecto Costa Rapel te ofrece una combinación perfecta de ubicación, infraestructura y exclusividad. Cada parcela cuenta con características diseñadas para maximizar tu calidad de vida. Disfruta de acceso controlado, caminos estabilizados, luz subterránea y marina privada. Todo esto, en un entorno rodeado de naturaleza nativa y con vistas espectaculares al lago."
        box1="Diseño"
        box2="Entorno"
        box3="calidad "
        box4="Incluye"
        title1="Diseño exclusivo y adaptado a tus necesidades"
        text1="En Costa Rapel, cada parcela ha sido diseñada para adaptarse a tu estilo de vida. Con opciones de construcción que se ajustan a tus gustos, el proyecto ofrece flexibilidad para que puedas crear el hogar de tus sueños. Desde amplios terrenos hasta acceso directo al lago, cada detalle ha sido pensado para ofrecerte una experiencia de vida inigualable."
        image1="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title2="Entorno natural privilegiado"
        text2="Costa Rapel te ofrece parcelas rodeadas por la belleza natural de la región, con valles y vegetación nativa que crean un ambiente de tranquilidad y armonía. Cada terreno está cuidadosamente seleccionado para garantizar vistas impresionantes y un contacto directo con la naturaleza. Este entorno es ideal para quienes buscan una vida en equilibrio, donde el confort moderno se combina con lo mejor del paisaje natural.."
        image2="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title3="Pensado para mejorar tu calidad de vida"
        text3="En Costa Rapel, hemos diseñado un proyecto que no solo te ofrece un lugar donde vivir, sino una experiencia que transforma tu día a día. Disfruta de la eficiencia y tranquilidad que te brinda estar rodeado de naturaleza, con todas las comodidades modernas a tu alcance. Desde la seguridad de un acceso controlado hasta la exclusividad de una marina privada, cada detalle ha sido pensado para hacer tu vida más placentera y cómoda. ¡Ven a conocerlo y descubre todo lo que tenemos para ti!"
        image3="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title4="Todo lo que necesitas"
        text4="Costa Rapel lo tiene todo para que puedas comenzar a disfrutar de inmediato. Cada lote cuenta con acceso a luz subterránea, agua potable, caminos estabilizados y seguridad 24/7. Además, tendrás acceso exclusivo a una marina privada, perfecta para quienes disfrutan de actividades acuáticas o simplemente quieren relajarse en un entorno natural de lujo. Costa Rapel te ofrece un entorno completo para que vivas con todas las comodidades en un lugar único."
        image4="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Mapa />

      <Contactus />

      <Return />
    </div>
  );
}

export default Sanrafael;
