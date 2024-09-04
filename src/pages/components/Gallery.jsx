import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta

function Gallery({
  direccion,
  title,
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
  return (
    <section id="descripción"  className="mx-auto max-w-7xl  sm:px-6  lg:px-8   ">

     
        <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 bg-container">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="p-10">
              <div className="border-b border-gray-200 pb-10 ">
                <h1 className="text-4xl font-light text-[#BB8D42] ">{direccion}</h1>
                <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl ">
                  {title}
                </h1>
              </div>

              <dl className="mt-10 space-y-10 ">
                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle1}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">{subdes1}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle2}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">{subdes2}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle3}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">{subdes3}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle4}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">{subdes4}</dd>
                </div>
              </dl>
            </div>
            <div className="pb-5">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  src={image1}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    src={image2}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                    src={image3}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
}

export default Gallery;
