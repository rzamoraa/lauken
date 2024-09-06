import React from 'react';

function Contacto() {
  return (
    <section id="contacto" className="py-1 bg-white text-center">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-800/90 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 ">
          <h1 className="mx-auto max-w-2xl text-center text-4xl  tracking-tight text-white/80 sm:text-6xl font-light">
          ¿Dudas o Preguntas? ¡Hablemos!
          </h1>
        
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-[#BB8D42]">
          Escríbenos y te responderemos a la brevedad. ¡Estamos aquí para ayudarte!
          </p>
          
          <form class="mt-8 space-y-4">
                <input type='text' placeholder='Nombre'
                    class="w-full rounded-md py-3 px-4 text-gray-400 bg-white/10  text-sm outline-[#BB8D42]" />
                <input type='email' placeholder='Correo'
                    class="w-full rounded-md py-3 px-4 text-gray-400 bg-white/10 text-sm outline-[#BB8D42]" />
               
                <textarea placeholder='Mensaje' rows="6"
                    class="w-full rounded-md px-4 text-gray-400 bg-white/10  text-sm pt-3 outline-[#BB8D42]"></textarea>
                <button type='button'
                    class="text-white bg-[#b8a27f] hover:bg-[#BB8D42] tracking-wide rounded-md text-sm px-4 py-3 w-full">Enviar</button>
            </form>
         
        </div>
      </div>
      
    </section>
  )
}

export default Contacto;