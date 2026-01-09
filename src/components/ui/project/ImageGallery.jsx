import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import SectionTitle from "../SectionTitle";

/**
 * ImageGallery - Galería de imágenes con modal de ampliación
 * 
 * @param {Array} images - Array de URLs de imágenes
 * @param {string} title - Título de la sección (default: "GALERÍA")
 */
function ImageGallery({ images = [], title = "GALERÍA" }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtrar imágenes válidas
  const validImages = images.filter(img => img);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  if (validImages.length === 0) return null;

  return (
    <section id="galeria" className="relative">
      {/* Título de la sección */}
      <SectionTitle title={title} />

      {/* Grid de imágenes */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-14 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {validImages.map((image, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden 
                rounded-lg shadow-md 
                hover:shadow-xl 
                transition-all duration-300 
                cursor-pointer group
                aspect-[4/3]
              "
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Galería imagen ${index + 1}`}
                className="
                  absolute inset-0 
                  w-full h-full 
                  object-cover 
                  transition-transform duration-500 
                  group-hover:scale-110
                "
              />
              
              {/* Overlay en hover */}
              <div className="
                absolute inset-0 
                bg-black/0 group-hover:bg-black/40 
                transition-all duration-300 
                flex items-center justify-center
              ">
                <ZoomIn 
                  className="
                    w-10 h-10 md:w-12 md:h-12 
                    text-white 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  " 
                  strokeWidth={1.5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 
            bg-black/90 
            flex items-center justify-center 
            z-50 p-4 md:p-8
          "
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="
                absolute -top-2 -right-2 md:top-4 md:right-4 
                bg-white/10 hover:bg-white/20 
                rounded-full p-2 
                text-white 
                transition-all duration-300
              "
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ImageGallery;
