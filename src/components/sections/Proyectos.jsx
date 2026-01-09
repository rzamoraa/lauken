import React from 'react';
import { Card } from '../ui';
import { getProjectCards } from '../../data/projects';

/**
 * Proyectos - Sección de tarjetas de proyectos
 * 
 * Muestra todas las tarjetas de proyectos disponibles
 * usando el sistema dinámico de configuración
 */

function Proyectos() {
  // Obtener las cards automáticamente desde el índice de proyectos
  const proyectos = getProjectCards();

  return (
    <section id="proyectos" className=" py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proyectos.map((proyecto) => (
            <Card
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              imagen={proyecto.imagen}
              url={proyecto.pronto ? undefined : proyecto.url}
              logo={proyecto.logo}
              activo={proyecto.activo}
              precio={proyecto.precio}
              franja={proyecto.franja}
              pronto={proyecto.pronto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;