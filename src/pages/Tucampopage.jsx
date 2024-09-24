import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.svg"; // Asegúrate de tener un logo en esta ruta o reemplázalo
import Contacto from "../components/Contacto";

import heroimg from './img/vendetucampo.jpg';

function Logo() {
  return (
    <nav className="bg-gradient fixed top-0 w-full z-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  justify-center h-16">
            <Link to="/" className="text-white hover:text-gray-300 font-light">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
        </div>
      </div> 
    </nav>
  );
}

function Tucampopage() {
  // Asegura que el scroll se posicione en la parte superior al montar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="vendenos">
      <Helmet>
        <title>¿Quieres vender tu Campo? - Laukén</title>
        <meta
          name="description"
          content="Tu éxito es nuestro compromiso. Vende tus parcelas agrícolas con la asesoría experta que realmente mereces. Contamos con el mejor equipo para gestionar la venta de tu campo de forma rápida y segura"
        />
      </Helmet>
      <Logo />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-12 shadow-2xl sm:rounded-xl sm:px-24 mt-20">
          <img
            alt=""
            src={heroimg}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="mx-auto max-w-7xl  lg:gap-x-8 lg:px-8 bg-white/60 backdrop-blur-sm w-full rounded-xl">
            <div className="px-6 pb-24 pt-10 sm:pb-32 col-span-7 lg:px-0 lg:pb-12 lg:pt-12 xl:col-span-6">
              <h2 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl text-center">
                <a className="font-medium text-center">¿Quieres vender tu Campo?</a>
              </h2>
              <p className="mt-6 text-xl text-gray-600  text-center">
                Tu éxito es nuestro compromiso. Vende tus parcelas agrícolas con la asesoría experta que realmente mereces.
              </p>
              <p className="mt-2 text-base  text-gray-600 text-center">
                Contamos con el mejor equipo para gestionar la venta de tu campo de forma rápida y segura
              </p>
              <div className="mt-10 flex">
                <ScrollLink
                  to="contacto"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  {/* Aquí puedes agregar un botón o enlace para desplazarse al contacto */}
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contacto />
    </section>
  );
}

export default Tucampopage;
