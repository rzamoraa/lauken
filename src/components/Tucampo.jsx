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
  <title>Vende tu Campo o Terreno Agrícola | Maximiza su Valor | Laukén Inmobiliaria</title>
  
  <meta 
    name="description" 
    content="Expertos en la venta de campos y terrenos agrícolas en Chile. Maximiza el valor de tu propiedad con Laukén Inmobiliaria. Tasación gratuita, asesoría profesional y amplia cartera de inversionistas." 
  />
  
  <meta 
    name="keywords" 
    content="vender campo chile, venta terrenos agrícolas, tasación campos, corretaje propiedades agrícolas, vender parcelas, compra campos chile, terrenos agrícolas en venta, inversión campos chile, loteo terrenos agrícolas, subdivisión campos" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/vendenos-tu-campo" />
  <meta property="og:title" content="¿Quieres Vender tu Campo? | Expertos en Corretaje de Campos | Laukén" />
  <meta property="og:description" content="Maximiza el valor de tu campo o terreno agrícola con los expertos en corretaje. Tasación profesional y asesoría especializada para la venta de tu propiedad." />
  <meta property="og:image" content="https://images.pexels.com/photos/4919672/pexels-photo-4919672.jpeg" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Vende tu Campo con Expertos | Laukén Inmobiliaria" />
  <meta name="twitter:description" content="Especialistas en venta de campos y terrenos agrícolas. Obtén el mejor valor por tu propiedad con asesoría profesional." />
  <meta name="twitter:image" content="https://images.pexels.com/photos/4919672/pexels-photo-4919672.jpeg" />
  
  {/* Datos estructurados para servicio de venta de campos */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Laukén Inmobiliaria",
      "description": "Especialistas en venta y corretaje de campos en Chile",
      "knowsAbout": [
        "Venta de campos",
        "Tasación de terrenos agrícolas",
        "Subdivisión de predios",
        "Desarrollo inmobiliario",
        "Loteos agrícolas"
      ],
      "service": {
        "@type": "Service",
        "name": "Venta de Campos y Terrenos Agrícolas",
        "description": "Servicio profesional de corretaje y venta de campos con maximización de valor",
        "serviceType": "Real Estate Service",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Laukén Inmobiliaria"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Venta de Campos",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tasación Profesional de Campos"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Asesoría en Subdivisión de Terrenos"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corretaje de Propiedades Agrícolas"
              }
            }
          ]
        }
      },
      "areaServed": "Chile",
      "serviceArea": ["Región del Libertador General Bernardo O'Higgins", "Región Metropolitana"],
      "slogan": "¡Confía en los expertos en corretaje de campos!"
    })}
  </script>

  <link rel="canonical" href="https://lauken.cl/vendenos-tu-campo" />
</Helmet>



    <div className="overflow-hidden  py-12">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 ">
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
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end bg">
              <img
                alt=""
                src="https://images.pexels.com/photos/4919672/pexels-photo-4919672.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover lg:h-auto "
              />
            </div>
            <div className=" lg:col-span-2 lg:col-end-2 lg:ml-auto flex lg:w-[37rem] lg:items-start lg:justify-end gap-x-8">
              <div className="order-first flex w-64  justify-end self-end lg:w-auto">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/4452204/pexels-photo-4452204.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className=" w-[24rem] max-w-none  h-0  rounded-2xl bg-gray-50 object-cover  collapse  md:visible lg:h-[24rem]"
                />
              </div>
              <div className="flex w-96  justify-end lg:w-auto ">
                <img
                  alt=""
                 src="https://images.pexels.com/photos/7939872/pexels-photo-7939872.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className=" w-[24rem]   h-0 max-w-none rounded-2xl bg-gray-50 object-cover collapse  md:visible lg:h-[24rem]"
                />
              </div>
              <div className="hidden sm:block sm:w-0  lg:w-auto ">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/9470955/pexels-photo-9470955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className=" w-[24rem] h-0 max-w-none rounded-2xl bg-gray-50 object-cover collapse  md:visible lg:h-[24rem]"
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
