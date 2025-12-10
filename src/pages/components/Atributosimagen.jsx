import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';



function Atributos({texto, image }) {


  return (
    <section id="atributos" className="relative">
        {/* Banner superior con texto - Responsive */}
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-slate-800 text-neutral-50 py-3 sm:py-4 px-4 text-center">
          Descripción del proyecto
        </h2>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8 md:py-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-800 text-center max-w-6xl mx-auto">
            {texto} 
          </p>
        </div>
      </div>

<div>
<img src={image} alt="Fondo" className="w-full mt-8 mb-8" />

</div>


    </section>
  );
}

export default Atributos;