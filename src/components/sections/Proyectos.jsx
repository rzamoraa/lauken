import { useState } from 'react';
import { Card } from '../ui';
import { getProjectCards } from '../../data/projects';

/**
 * Proyectos - Seccion de tarjetas de proyectos
 */

function Proyectos() {
  const proyectos = getProjectCards();

  const proyectosPorPagina = 6;
  const totalPaginas = Math.ceil(proyectos.length / proyectosPorPagina);
  const [paginaActual, setPaginaActual] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const paginas = Array.from({ length: totalPaginas }, (_, index) =>
    proyectos.slice(
      index * proyectosPorPagina,
      index * proyectosPorPagina + proyectosPorPagina
    )
  );

  const siguientePagina = () => {
    setPaginaActual((prev) => (prev + 1) % totalPaginas);
  };

  const paginaAnterior = () => {
    setPaginaActual((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));
  };

  const handleIndicadorTouchEnd = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 24) {
      if (distance > 0) {
        siguientePagina();
      } else {
        paginaAnterior();
      }
    }

    setTouchStartX(null);
  };

  return (
    <section id="proyectos" className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:hidden">
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

        <div className="relative hidden md:block">
          {totalPaginas > 1 && (
            <>
              <button
                type="button"
                onClick={paginaAnterior}
                className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 shadow-lg hover:bg-[#F0B94D] hover:text-white hover:border-[#F0B94D] items-center justify-center text-3xl font-light transition-all duration-300"
                aria-label="Proyectos anteriores"
              >
                &lsaquo;
              </button>

              <button
                type="button"
                onClick={siguientePagina}
                className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 shadow-lg hover:bg-[#F0B94D] hover:text-white hover:border-[#F0B94D] items-center justify-center text-3xl font-light transition-all duration-300"
                aria-label="Proyectos siguientes"
              >
                &rsaquo;
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex gap-12 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${paginaActual * 100}% - ${paginaActual * 3}rem))` }}
            >
              {paginas.map((pagina, index) => (
                <div
                  key={index}
                  className="min-w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {pagina.map((proyecto) => (
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
              ))}
            </div>
          </div>

          {totalPaginas > 1 && (
            <div
              className="flex justify-center gap-2 mt-8 touch-pan-y"
              onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
              onTouchEnd={handleIndicadorTouchEnd}
            >
              {paginas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPaginaActual(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    paginaActual === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir a pagina ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
