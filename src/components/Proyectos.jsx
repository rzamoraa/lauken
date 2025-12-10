import React from 'react';
import Card from './Card';

import { Helmet } from 'react-helmet-async';





import logosanrafel from '../assets/logosanrafel.svg';
import logopulin from '../assets/logopulin.svg';
import logovalles from '../assets/logovalles.svg';

import logopalmas from '../pages/img/palmas/Logo pag web LP .png'
import logolr from '../pages/img/vallesrangue/logo pag web LR.png'
import logolb from '../pages/img/brisas/logo pag web LB.png'

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
    precios:'Desde UF 2.200',
     pronto: false,
  },
  {
    nombreUnico: 'San Rafael',
    titulo: 'Costa San Rafael',
    descripcion: 'Lago Rapel',
    imagen: sanrafael,
    url: '/San-rafael',
    logo: logosanrafel,
    activo: true,
    precios:'Desde $34.900.000',
     pronto: false,
  },
  {
    nombreUnico: 'entre-valles',
    titulo: 'Entre Valles',
    descripcion: ' Pumanque ',
    imagen: entrevalles,
    url: '/entre-valles',
    logo: logovalles,
    activo: false,
    franja: ' 100% VENDIDO ', 
    precios:'VENDIDO',
     pronto: false,
    
  },






    {
    nombreUnico: 'La Brisa',
    titulo: 'La Brisa',
    descripcion: 'Lago Rapel',
    imagen: sanrafael,
    //url: '/la-brisa',
    logo: logolb,
    activo: true,
    franja: 'Proximamente', 
    precios:'Proximamente',
     pronto: true,
  },
    {
    nombreUnico: 'Valles de Rangue',
    titulo: 'Valles de Rangue',
    descripcion: 'Laguna de Aculeo',
    imagen: sanrafael,
    //url: '/valles-de-rangue',
    logo: logolr,
    activo: true,
    franja: 'Proximamente', 
    precios:'Proximamente',
    pronto: true,
  },
    {
    nombreUnico: 'Bahias de Palmas',
    titulo: 'Bahias de Palmas',
    descripcion: 'Lago Rapel',
    imagen: sanrafael,
    //url: '/bahia-las-palmas',
    logo: logopalmas,
    activo: true,
    franja: 'Proximamente', 
    precios:'Proximamente',
    pronto: true,
    
  },




];

function Proyectos() {
  return (
    <section id="proyectos">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">

       
          <div className="mx-auto mt-16 sm:mt-20 flex flex-wrap justify-center gap-2 lg:gap-4">
            {proyectos.map((proyecto, index) => (
              <div
                key={proyecto.nombreUnico}
                className="flex-shrink-0 w-full md: md:max-w-[350px]"
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
                  franja={proyecto.franja}
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