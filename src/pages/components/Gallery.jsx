import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta
import updiv from './updiv.svg';
import downdiv from './downdiv.svg'

function Gallery({
  direccion,
  title,
  subtitle,
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

        <img src={downdiv} alt="Logo" className="mx-auto" />
        
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 ">
            <div className="py-10 ">
              <div className="border-b border-gray-200 pb-10 ">
                <h1 className="text-4xl font-light text-[#BB8D42] mx-1">{direccion}</h1>
                <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl ">
                  {title}
                </h1>
                <h1 className="text-2xl font-light tracking-tight text-gray-900 sm:text-4xl mx-1 ">
                  {subtitle}
                </h1>
              </div>

              <dl className=" space-y-10 ">
                <div>
                  <dt className="text-sm font-medium  text-gray-900">
                    {subtitle1}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500 text-justify  me-0  lg:me-10 ">{subdes1}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900 ">
                    {subtitle2}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500 text-justify  me-0  lg:me-10">{subdes2}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle3}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500 text-justify  me-0  lg:me-10">{subdes3}</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    {subtitle4}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500 text-justify me-0  lg:me-10 ">{subdes4}</dd>
                </div>
              </dl>

            </div>
            <div className="   py-10 ">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100">
                <img
                  alt="costa pulin, lago rapel"
                  src={image1}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:gap-3 lg:mt-4 lg:gap-4">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100">
                  <img
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    src={image2}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100">
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
