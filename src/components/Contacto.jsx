import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import updiv from '../pages/components/updiv.svg'
import downdiv from '../pages/components/downdiv.svg'

function Contacto() {
  const form = useRef();
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const whatsappLink = 'https://wa.me/56981381556?text=Hola,%20quiero%20más%20información%20sobre%20la%20empresa.';

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setMensaje({ tipo: 'exito', texto: '¡Mensaje enviado correctamente!' });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setMensaje({ tipo: 'error', texto: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
      });
  };

  return (
    <section id="contacto" className="py-1  text-center">
      <img src={updiv} alt="Logo" className="mx-auto" />


      <Helmet>
  <title>Laukén Inmobiliaria</title>
  
  <meta 
    name="description" 
    content="¡Agenda tu visita a nuestros proyectos exclusivos en Lago Rapel! Contáctanos por WhatsApp o formulario para conocer nuestras parcelas premium. Respuesta inmediata y atención personalizada." 
  />
  
  <meta 
    name="keywords" 
    content="contacto laukén inmobiliaria, agendar visita parcelas, contacto proyectos lago rapel, visitar costa pulin, visitar costa san rafael, whatsapp laukén, corredor propiedades lago rapel, consulta parcelas chile" 
  />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lauken.cl/contacto" />
  <meta property="og:title" content="¡Agenda tu Visita! | Proyectos Exclusivos Lago Rapel | Laukén" />
  <meta property="og:description" content="Contáctanos para visitar nuestros proyectos exclusivos en Lago Rapel. Atención inmediata por WhatsApp o formulario. ¡Conoce tu futura parcela!" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contacta a Laukén Inmobiliaria | Visita Nuestros Proyectos" />
  <meta name="twitter:description" content="Agenda una visita a nuestros proyectos exclusivos en Lago Rapel. Atención personalizada y respuesta inmediata." />
  
  {/* Datos estructurados para página de contacto */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Laukén Inmobiliaria",
      "description": "Desarrolladora de proyectos exclusivos en Lago Rapel",
      "url": "https://lauken.cl",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+56981381556",
        "contactType": "sales",
        "availableLanguage": ["Spanish"],
        "contactOption": ["TollFree", "HearingImpairedSupported"],
        "areaServed": "CL"
      },
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CL",
          "addressRegion": "Región del Libertador General Bernardo O'Higgins"
        }
      },
      "sameAs": [
        "https://wa.me/56981381556"
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://lauken.cl/contacto",
          "inLanguage": "es",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Agenda de visita a proyectos"
        }
      }
    })}
  </script>

  {/* Metadatos adicionales */}
  <meta name="format-detection" content="telephone=no" />
  <link rel="canonical" href="https://lauken.cl/contacto" />
  
  {/* Metadatos para motores de búsqueda locales */}
  <meta name="geo.region" content="CL-LI" />
  <meta name="geo.placename" content="Lago Rapel" />
  <meta name="geo.position" content="-34.1667;-71.2833" />
  <meta name="ICBM" content="-34.1667, -71.2833" />
</Helmet>




      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-atributos px-6 py-24 shadow-2xl sm:rounded-xl sm:px-24 xl:py-32 ">
          <h1 className="mx-auto max-w-2xl text-center text-4xl tracking-tight text-white/80 sm:text-6xl font-light">
            ¡Agenda tu Visita!
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-[#BB8D42]">
            Escríbenos y te responderemos a la brevedad
          </p>

          <form ref={form} onSubmit={enviarEmail} className="mt-8 space-y-4">
            <input 
              type='text' 
              name='user_name' 
              placeholder='Nombre'
              required
              className="w-full rounded-md py-3 px-4 text-gray-400 bg-white/10 text-sm outline-[#BB8D42] focus:outline focus:outline-2 focus:outline-[#BB8D42]" 
            />
            <input 
              type='email' 
              name='user_email' 
              placeholder='Correo'
              required
              className="w-full rounded-md py-3 px-4 text-gray-400 bg-white/10 text-sm outline-[#BB8D42] focus:outline focus:outline-2 focus:outline-[#BB8D42]" 
            />
            <textarea 
              name='message' 
              placeholder='Mensaje' 
              rows="6"
              required
              className="w-full rounded-md px-4 text-gray-400 bg-white/10 text-sm pt-3 outline-[#BB8D42] focus:outline focus:outline-2 focus:outline-[#BB8D42]"
            ></textarea>
            <button 
              type='submit'
              className="text-white bg-[#b8a27f] hover:bg-[#BB8D42] tracking-wide rounded-md text-sm px-4 py-3 w-full transition"
            >
              Enviar
            </button>
          </form>

          {mensaje.texto && (
            <div className={`mt-4 text-sm ${mensaje.tipo === 'exito' ? 'text-green-500' : 'text-red-500'}`}>
              {mensaje.texto}
            </div>
          )}

          <div className="flex justify-center mt-10">
        
          </div>
        </div>
      </div>
      <img src={downdiv} alt="Logo" className="mx-auto" />
    </section>
  )
}

export default Contacto;
