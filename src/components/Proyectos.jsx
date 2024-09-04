import React from 'react';
import Card from './Card';

const proyectos = [
    {
      nombreUnico: 'proyecto-uno',
      titulo: 'Proyecto 1',
      descripcion: 'Este es un breve resumen del Proyecto 1.',
      imagen: 'https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/proyecto-uno'
    },
    {
      nombreUnico: 'proyecto-dos',
      titulo: 'Proyecto 2',
      descripcion: 'Este es un breve resumen del Proyecto 2.',
      imagen: 'https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/proyecto-dos'
    },
    {
      nombreUnico: 'proyecto-tres',
      titulo: 'Proyecto 3',
      descripcion: 'Este es un breve resumen del Proyecto 3.',
      imagen: 'https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/proyecto-tres'
    },
  ];

  

function Proyectos() {
  return (
    <section id="proyectos" >

<div className="">
<div className="mx-auto max-w-4xl px-6 lg:px-8">
         <div className="mx-auto max-w-2xl text-center">
         <h1 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl ">
         Parcelaciones en áreas exclusivas de Chile
                  </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          En Lauken Inmobiliaria, nos especializamos en desarrollar proyectos en ubicaciones privilegiadas, pensados para aquellos que buscan un entorno único para construir su futuro hogar. A continuación, te presentamos nuestros proyectos más recientes, donde la exclusividad y la naturaleza se unen.
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
