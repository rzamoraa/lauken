import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

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
    <section id="contacto" className="py-1 bg-white text-center">
      <Helmet>
        <title>Contacto - Laukén Inmobiliaria</title>
        <meta name="description" content="Contáctanos en Laukén Inmobiliaria para obtener más información sobre nuestros proyectos de parcelación en Chile." />
      </Helmet>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-800/90 px-6 py-24 shadow-2xl sm:rounded-xl sm:px-24 xl:py-32 ">
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
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-2 text-2xl" /> Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto;
