import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importar Swiper y SwiperSlide
import "swiper/css"; // Importar los estilos de Swiper correctamente
import { Link as ScrollLink } from "react-scroll";

function Spect({ title, descripcion, image1, image2, image3, image4, image5, image6, image7, image8 }) {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8]; // Array de imágenes

  return (
    <section
      id="especificaciones"
      className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-4 lg:px-8"
    >
      <div className="overflow-hidden bg-container rounded-none p-5 sm:rounded-xl">
        <div aria-labelledby="features-heading" className="relative h-full">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl p-5">
                Nuestro Proyecto
              </h1>
             
            </div>
          </div>

          {/* Swiper Carrusel */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-64 sm:h-96 object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
        <div className="m-auto w-full  text-center pt-3">
        <ScrollLink
          className="text-white hover:text-gray-300  "
          to="contacto"
          smooth={true}
          offset={-70}
          duration={500}
          spy={true}
          exact="true"
          activeClass="active"
        >
          <a
            href="#"
            className=" font-light text-2xl text-center   text-[#BB8D42]  hover:text-[#ceb996]     "
          >
            ¡Ven a conocerlo!
            <span aria-hidden="true">→</span>
          </a>
        </ScrollLink>

        </div>
    
     
      </div>

      
    </section>
  );
}

export default Spect;
