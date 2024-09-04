import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta

function Mapa() {
  return (
    <section
      id="mapa"
      className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-4 lg:px-8 "
    >
      <div className="overflow-hidden  rounded-none sm:rounded-xl  ">
        <div className="relative h-full md:h-[45vh]  ">
          <img
            className=""
            src="https://plus.unsplash.com/premium_photo-1712281671133-dc5585d0f12f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}

export default Mapa;
