import React, { useRef, useState } from 'react';


import emailjs from '@emailjs/browser';
import logo2 from './logo_go.png';
import logo1 from './logolinea.svg';



function Contacto() {
  const formRef = useRef();
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const [proyecto, setProyecto] = useState('');



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
          setProyecto('');
      }, (error) => {
          console.log(error.text);
          setMensaje({ tipo: 'error', texto: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
      });
  };

  return (
    <section id="contacto" className="bg-slate-800 min-h-screen flex items-center justify-center py-8 ">

      <div className="w-full max-w-md mx-auto  ">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-2">
            ¡AGENDA TU VISITA!
          </h1>
          <p className="text-gray-300 text-lg">
            Escríbenos y te responderemos a la brevedad
          </p>
        </div>

        {/* Formulario */}
        <div ref={formRef} className="space-y-4">
          <input 
            type='text' 
            name='user_name' 
            placeholder='Nombre'
            required
            className="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-200 placeholder-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-[#BB8D42]" 
          />
          
          <input 
            type='email' 
            name='user_email' 
            placeholder='Correo'
            required
            className="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-200 placeholder-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-[#BB8D42]" 
          />
          
          <input 
            type='tel' 
            name='user_phone' 
            placeholder='Celular'
            required
            className="w-full rounded-md py-2 px-4 text-gray-800 bg-gray-200 placeholder-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-[#BB8D42]" 
          />
          
          <div className="relative">
            <select
              name='proyecto'
              value={proyecto}
              onChange={(e) => setProyecto(e.target.value)}
              required
              className="w-full rounded-md py-2 px-4 text-gray-800 bg-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[#BB8D42] appearance-none"
            >
              <option value="" disabled>Selecciona el proyecto</option>
              <option value="Costa Pulín">Costa Pulín</option>
              <option value="Costa San Rafael">Costa San Rafael</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
         
          <textarea 
            name='message' 
            placeholder='Mensaje' 
            rows="5"
            required
            className="w-full rounded-md py-4 px-4 text-gray-800 bg-gray-200 placeholder-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-[#BB8D42] resize-none"
          />
          
          <button 
            onClick={enviarEmail}
            className="w-full text-white bg-[#BB8D42] hover:bg-[#a67c37] rounded-md text-lg font-semibold py-1 px-4 transition-colors duration-300"
          >
            Enviar
          </button>
        </div>

        {mensaje.texto && (
          <div className={`mt-4 text-sm text-center ${mensaje.tipo === 'exito' ? 'text-green-400' : 'text-red-400'}`}>
            {mensaje.texto}
          </div>
        )}

        {/* Logos y información de contacto */}
        <div className="mt-12 text-center">
          {/* Logos */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            {/* Logo Laukén */}
            <div className="flex items-center text-white">

                           <img
          src={logo1}
          alt="LAUKEN"
          className="w-fill h-10 object-cover"
        />




    </div>

            {/* Logo Goycoolea */}
            <div className="flex items-center text-white">

                           <img
          src={logo2}
          alt="GOYCOOLEA PROPIEDADES"
          className="w-fill h-10 object-cover"
        />


 </div>


            
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Avenida Vitacura 3092, Vitacura, Santiago</span>
            </div>
            
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+56 2 2206 5654 / +56 9 9275 7172</span>
            </div>
            
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>hola@lauken.cl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto;