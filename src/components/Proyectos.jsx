import React from 'react';
import Card from './Card';

const proyectos = [
    {
      nombreUnico: 'entre-valles',
      titulo: 'Entre Valles',
      descripcion: ' Proyecto urbanizado, 5.000mts2 EXITO EN VENTAS  ',
      imagen: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: '/entre-valles'
    },
    {
      nombreUnico: 'costa-pulin',
      titulo: 'Costa Pulin',
      descripcion: 'Proyecto con ubicación privilegiada, rodeada de valles',
      imagen: 'https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/costa-pulin'
    },
    {
      nombreUnico: 'San Rafael',
      titulo: 'San Rafael',
      descripcion: 'Trabajando para un nuevo proyecto que te sorprendera!',
      imagen:  "https://images.pexels.com/photos/1287089/pexels-photo-1287089.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: '/San-rafael'
    },
  ];

  

function Proyectos() {
  return (
    <section id="proyectos" >

<div className="">
<div className="mx-auto max-w-4xl px-6 lg:px-8">
         <div className="mx-auto max-w-2xl text-center">
         <h1 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl ">
        <a className='font-medium'>Proyectos únicos</a>  en lugares privilegiados
         </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Nos especializamos en desarrollar proyectos en ubicaciones privilegiadas, enfocados en aquellos que buscan un entorno único para construir su futuro hogar. Acá podrás encontrar nuestros proyectos más recientes, donde la exclusividad y la naturaleza se unen para generar una experiencia inigualable.
          </p>
        </div>
    
      
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      
        {proyectos.map(proyecto => ( 
          
          <Card 
            key={proyecto.id} 
            titulo={proyecto.titulo} 
            descripcion={proyecto.descripcion} 
            imagen={proyecto.imagen}
            url={proyecto.url}
          />
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}

export default Proyectos;
