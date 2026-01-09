import React from 'react';
import Card from '../ui/Card';
import { getProjectCards } from '../../data/projects';

function Proyectos() {
  // Obtener las cards automáticamente desde el índice de proyectos
  const proyectos = getProjectCards();
  
  return (
    <section id="proyectos">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="mx-auto mt-16 sm:mt-20 flex flex-wrap justify-center gap-2 lg:gap-4">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="flex-shrink-0 w-full md: md:max-w-[350px]"
              >
                <Card
                  titulo={proyecto.titulo}
                  descripcion={proyecto.descripcion}
                  imagen={proyecto.imagen}
                  url={proyecto.pronto ? undefined : proyecto.url}
                  logo={proyecto.logo}
                  activo={proyecto.activo}
                  precio={proyecto.precio}
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