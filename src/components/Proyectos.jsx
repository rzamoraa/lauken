import React from 'react';
import Card from './Card';
import logosanrafel from '../assets/logosanrafel.svg';
import logopulin from '../assets/logopulin.svg';
import logovalles from '../assets/logovalles.svg';
import { Helmet } from 'react-helmet-async';


import costapulin from '../pages/img/bg-costa.png';
import sanrafael from '../pages/img/bg-sanrafael.png';
import entrevalles from'../pages/img/bg-entrevalles.png';

const proyectos = [
  {
    nombreUnico: 'costa-pulin',
    titulo: 'Costa Pulín',
    descripcion: 'Lago Rapel',
    imagen: costapulin,
    url: '/costa-pulin',
    logo: logopulin,
    activo: true,
    precios:'Desde UF 2.500'
  },
  {
    nombreUnico: 'San Rafael',
    titulo: 'Costa San Rafael',
    descripcion: 'Lago Rapel',
    imagen: sanrafael,
    url: '/San-rafael',
    logo: logosanrafel,
    activo: true,
    precios:'Desde $40.000.000'
  },
  {
    nombreUnico: 'entre-valles',
    titulo: 'Entre Valles',
    descripcion: ' Pumanque ',
    imagen: entrevalles,
    url: '/entre-valles',
    logo: logovalles,
    activo: false,
    precios:'VENDIDO'
  },
];

function Proyectos() {
  return (
    <section id="proyectos">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">

          {/* Grid responsivo que se adapta automáticamente */}
          <div className="mx-auto mt-16 sm:mt-20 flex flex-wrap justify-center gap-2 lg:gap-4">
            {proyectos.map((proyecto, index) => (
              <div
                key={proyecto.nombreUnico}
                className="flex-shrink-0 w-full md:flex-1 md:max-w-[450px]"
              >
                <Card
                  key={proyecto.nombreUnico}
                  titulo={proyecto.titulo}
                  descripcion={proyecto.descripcion}
                  imagen={proyecto.imagen}
                  url={proyecto.url}
                  logo={proyecto.logo}
                  activo={proyecto.activo}
                  precio={proyecto.precios}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;