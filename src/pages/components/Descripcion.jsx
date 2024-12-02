import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta
import { Link as ScrollLink } from "react-scroll";
import updiv from './updiv.svg';
import downdiv from './downdiv.svg'



function Description({ video }) {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl sm:px-6 sm:pt-4 lg:px-8   ">
          <img src={updiv} alt="Logo" className="mx-auto" />
      <div className="overflow-hidden  rounded-none sm:rounded-t-xl bg-container   ">
        <div className="relative h-full md:h-full  content-center  ">
          <video className="" src={video} autoPlay loop muted playsInline />
        </div>
      </div>
  
    </section>
  );
}

export default Description;
