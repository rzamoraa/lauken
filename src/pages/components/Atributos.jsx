import React from "react";
import logo from "./lauken.svg"; // Asegúrate de que la ruta es correcta
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

function Atributos() {
  return (
    <section id="atributos"  className="mx-auto max-w-7xl pb-0 sm:px-0 sm:pb-4 lg:px-8 ">
      <div  className="overflow-hidden  relative h-full rounded-b-xl  bg-container  ">
     
        <img
          alt=""
          src="https://plus.unsplash.com/premium_photo-1663952767325-6c318c960e1a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 w-full  object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 "
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 ">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 ">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-4xl font-light text-[#BB8D42] ">
                Our track record
              </h2>
              <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl ">
                Trusted by thousands of creators&nbsp;worldwide
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-2xl font-light text-[#BB8D42] ">
                      {stat.name}
                    </dt>
                    <dd className="text-4xl font-black text-[#cfc8bd] ">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
}

export default Atributos;
