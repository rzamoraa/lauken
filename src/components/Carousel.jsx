// src/components/Carousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Anterior"
      >
        &#10094;
      </button>
    );
  };


  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Siguiente"
      >
        &#10095;
      </button>
    );
  };

const Carousel = ({ images }) => {
  const settings = {
    dots: true, // Mostrar puntos de paginación
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazarse una imagen a la vez
    autoplay: true, // Autoplay
    autoplaySpeed: 3000, // Intervalo de autoplay en ms
    arrows: true, // Mostrar flechas de navegación
    prevArrow: <PrevArrow />, // Flecha anterior personalizada
    nextArrow: <NextArrow />, // Flecha siguiente personalizada
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // Para pantallas muy pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="especificaciones"
      className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-4 lg:px-8"
    >
     
        <div aria-labelledby="features-heading" className="relative h-full">
     

        
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-96 object-cover "
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="m-auto w-full text-center pt-3">
     
      
      </div>
    </section>
  );
};

export default Carousel;
