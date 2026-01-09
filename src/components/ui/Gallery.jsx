import React, { useState } from "react";

function Gallery({
  direccion,
  title,
  subtitle,
  subtitle1,
  subdes1,
  subtitle2,
  subdes2,
  subtitle3,
  subdes3,
  subtitle4,
  subdes4,
  image1,
  image2,
  image3,
}) {
  // Estado para controlar qué imagen está ampliada (null = ninguna)
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Función para abrir la imagen ampliada
  const openLightbox = (imageSrc) => {
    setEnlargedImage(imageSrc);
    // Evitar scroll del body mientras el lightbox está abierto
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar la imagen ampliada
  const closeLightbox = () => {
    setEnlargedImage(null);
    // Restaurar scroll
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="descripción" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 bg-container">
       
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="py-10">
            <div className="border-b border-gray-200 pb-10">
              <h1 className="text-4xl font-light text-[#BB8D42] mx-1">{direccion}</h1>
              <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl">
                {title}
              </h1>
              <h1 className="text-2xl font-light tracking-tight text-gray-900 sm:text-4xl mx-1">
                {subtitle}
              </h1>
            </div>
            <dl className="space-y-10">
              <div>
                <dt className="text-sm font-medium text-gray-900">
                  {subtitle1}
                </dt>
                <dd className="mt-3 text-sm text-gray-500 text-justify me-0 lg:me-10">{subdes1}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-900">
                  {subtitle2}
                </dt>
                <dd className="mt-3 text-sm text-gray-500 text-justify me-0 lg:me-10">{subdes2}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-900">
                  {subtitle3}
                </dt>
                <dd className="mt-3 text-sm text-gray-500 text-justify me-0 lg:me-10">{subdes3}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-900">
                  {subtitle4}
                </dt>
                <dd className="mt-3 text-sm text-gray-500 text-justify me-0 lg:me-10">{subdes4}</dd>
              </div>
            </dl>
          </div>
          <div className="py-10">
            {/* Imagen principal */}
            <div 
              className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 cursor-pointer transition-transform hover:opacity-90"
              onClick={() => openLightbox(image1)}
            >
              <img
                alt="Vista principal"
                src={image1}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:gap-3 lg:mt-4 lg:gap-4">
              {/* Imagen secundaria 1 */}
              <div 
                className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 cursor-pointer transition-transform hover:opacity-90"
                onClick={() => openLightbox(image2)}
              >
                <img
                  alt="Vista detalle"
                  src={image2}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Imagen secundaria 2 */}
              <div 
                className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 cursor-pointer transition-transform hover:opacity-90"
                onClick={() => openLightbox(image3)}
              >
                <img
                  alt="Vista adicional"
                  src={image3}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full p-4">
            {/* Botón de cerrar */}
            <button 
              className="absolute top-0 right-0 mt-4 mr-4 text-white  bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagen ampliada */}
            <img 
              src={enlargedImage} 
              alt="Imagen ampliada" 
              className="max-h-[85vh] max-w-full object-contain mx-auto shadow-xl rounded-md"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic en la imagen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;