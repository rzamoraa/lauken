import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.svg"; // Asegúrate de tener un logo en esta ruta o reemplázalo
import Contacto from "../components/Contacto";
import manos from './img/manos.png';
import heroimg from './img/vendetucampo.jpg';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos un icono de WhatsApp para el botón
import logofull from "../assets/logofull.svg";
import img1 from './img/img1.png';
import bento  from './img/bento-03-performance.png';
import seguridad  from './img/seguridad.png';
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
  const whatsappLink = 'https://wa.me/56981381556?text=Hola,%20quiero%20más%20información%20sobre%20la%20empresa.';
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
        <div className="relative isolate overflow-hidden px-6 py-12 shadow-2xl sm:rounded-t-xl sm:px-24 mt-20 h-56">
          <img
            alt=""
            src={heroimg}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
            <div className="relative z-10 flex justify-center items-center  ">
          <img src={logofull} alt="Logo" className="w-200 h-48  fill-white pb-10" />
        </div>
        </div>
      

        <div className="bg-gray-100 py-1 sm:py-1  rounded-b-3xl">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pb-6">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">   </h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-[#BB8D42] sm:text-5xl">
        
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"

           style={{ backgroundImage: `url(${manos})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}

            ></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                Tu éxito  es nuestro compromiso.
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Vende tus parcelas agrícolas con la asesoría experta que realmente mereces.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700/0 bg-gray-900/0 ">
                  <img
                    className="size-full object-cover object-top"
                    src= {img1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
          <div
  className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] bg-auto bg-top"
  style={{ backgroundImage: `url(${manos})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
></div>



            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Seguridad
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Contamos con el mejor equipo para gestionar la venta de tu campo de forma rápida y segura
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={bento}
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"
            style={{ backgroundImage: `url(${manos})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Confianza</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src={seguridad}
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]"
            style={{ backgroundImage: `url(${manos})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                ¡Agenda tu Visita!
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Escríbenos y te responderemos a la brevedad
                </p>
              </div>
            
              <form class="mt-8 space-y-4">
                <input type='text' placeholder='Nombre'
                    class="w-full  py-3 px-4 text-gray-800 bg-gray-100 focus:bg-gray-50 text-sm outline-[#BB8D42]" />
                <input type='email' placeholder='Email'
                    class="w-full  py-3 px-4 text-gray-800 bg-gray-100 focus:bg-gray-50 text-sm outline-[#BB8D42]" />
                <input type='text' placeholder='Telefono'
                    class="w-full  py-3 px-4 text-gray-800 bg-gray-100 focus:bg-gray-50text-sm outline-[#BB8D42]" />
                <textarea placeholder='Mensaje' rows="6"
                    class="w-full  px-4 text-gray-800 bg-gray-100 focus:bg-gray-50 text-sm pt-3 outline-[#BB8D42]"></textarea>
                <button type='button'
                    class="text-white bg-[#c0bebd] hover:bg-[#8d8d8d] tracking-wide  text-sm px-4 py-3 w-full">Enviar</button>
            </form>




            <div className="flex justify-center m-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg  font-light hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Enviar mensaje por WhatsApp
            </a>
          </div>









            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>

      

      </div>
    
    </section>
  );
}

export default Tucampopage;
