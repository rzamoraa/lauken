import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta

function Tucampo() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl "><a className='font-medium '>¿Tienes un campo?
            </a> ¡Hablemos!
          </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
            En Lauken Inmobiliaria, estamos en constante búsqueda de nuevas oportunidades para desarrollar. Si posees un terreno y deseas venderlo, estamos aquí para ofrecerte una solución rápida y transparente. Nuestro equipo de expertos te guiará en cada paso del proceso, asegurando una transacción eficiente, justa y provechosa para todos.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Confía en nuestra experiencia y profesionalismo para que juntos podamos crear un futuro mejor para todos. ¡Hablemos y descubre cómo podemos ayudarte!
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-[#BB8D42] shadow-sm hover:text-[#ceb996] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
               [¡Hablemos!] <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt=""
                src="https://plus.unsplash.com/premium_photo-1663952767325-6c318c960e1a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt=""
                 src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tucampo;
