

// src/components/Spect.jsx
import React from "react";
import Carousel from "../../components/Carousel";
import { Link as ScrollLink } from "react-scroll";

function Spect({ image1, image2, image3, image4, image5, image6, image7, image8 }) {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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
              Galería
              </h1>
            </div>
          </div>

          {/* Carrusel */}
          <Carousel images={images} />
        </div>

        <div className="m-auto w-full text-center pt-3">
          <ScrollLink
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
              className="font-light text-2xl text-center text-[#BB8D42] hover:text-[#ceb996]"
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
