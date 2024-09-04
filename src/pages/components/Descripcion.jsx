import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta
import { Link as ScrollLink } from "react-scroll";

function Description({ video }) {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl sm:px-6 sm:pt-4 lg:px-8   ">
      <div className="overflow-hidden  rounded-none sm:rounded-t-xl bg-container  ">
        <div className="relative h-full md:h-[45vh]  ">
          <video className="" src={video} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
}

export default Description;
