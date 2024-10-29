// src/components/Spect.jsx
import React from "react";
import Carousel from "../../components/Carousel";
import { Link as ScrollLink } from "react-scroll";
import updiv from "./updiv.svg";
import downdiv from "./downdiv.svg";
import Titulo from "./containers/Titlecontainer";

function Spect({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
}) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <section
      id="especificaciones"
      className="mx-auto max-w-7xl sm:px-6 lg:px-8 sm:mt-0 mt-4   "
    >
      <img src={updiv} alt="Logo" className=" mx-auto" />

      <div className=" bg-container rounded-none sm:rounded-xl">
        <Titulo title="Galeria" />

    <div>


   
        <Carousel images={images} />
        </div>
        <div className="pt-6 pb-3 text-center">
        <ScrollLink
            to="contacto"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            <a className="font-light text-2xl text-[#BB8D42] hover:text-[#ceb996]  cursor-pointer">
              ¡Ven a conocerlo!
            </a>
          </ScrollLink>
        </div>

      </div>

      <img src={downdiv} alt="Logo" className="mx-auto" />
    </section>
  );
}

export default Spect;
