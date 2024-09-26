import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
///https://plus.unsplash.com/premium_photo-1663952767325-6c318c960e1a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D///
function Tucampo() {
  return (
    <section id="vendenos" >
        <Helmet>
        <title>Tu Campo - Proyecto Laukén</title>
        <meta name="description" content="Proyecto Tu Campo de Laukén Inmobiliaria ofrece parcelas únicas para aquellos que buscan tranquilidad y naturaleza en Chile." />
      </Helmet>
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl "><a className='font-medium '>
          ¿Quieres vender tu Campo?
            </a> Maximiza el valor de tus parcelas agrícolas.
          </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
            ¡Confía en los expertos en corretaje de campos!            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            </p>
            <div className="mt-10 flex">


            <Link
              to="/vendenos-tu-campo"
              className="text-[#BB8D42] hover:text-gray-300 font-light"
            >



              <a
                href="#"
                className="rounded-md  px-3.5 py-2.5 font-semibold text-[#BB8D42] shadow-sm hover:text-[#ceb996] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-xl bg-gray-600/25  "
              >
               ¡Hablemos! <span aria-hidden="true">&rarr;</span>
              </a>
              


            </Link>


            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt=""
                src="https://images.pexels.com/photos/4919672/pexels-photo-4919672.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/4452204/pexels-photo-4452204.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt=""
                 src="https://images.pexels.com/photos/7939872/pexels-photo-7939872.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/9470955/pexels-photo-9470955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Tucampo;
