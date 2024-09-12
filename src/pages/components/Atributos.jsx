import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importamos Framer Motion



function Atributos({title1, title2, text, image, t1, v1, t2, v2, t3, v3, t4, v4, t5, v5, t6, v6 } ) {
  const [idt1, setIdt1] = useState(t1);
  const [idv1, setIdv1] = useState(v1);
  const [idt2, setIdt2] = useState(t2);
  const [idv2, setIdv2] = useState(v2);
  const [idt3, setIdt3] = useState(t3);
  const [idv3, setIdv3] = useState(v3);
  const [idt4, setIdt4] = useState(t4);
  const [idv4, setIdv4] = useState(v4);
  const [idt5, setIdt5] = useState(t5);
  const [idv5, setIdv5] = useState(v5);
  const [idt6, setIdt6] = useState(t6);
  const [idv6, setIdv6] = useState(v6);

  const stats = [
  { id: 1, name: idt1, value: idv1},
  { id: 2, name: idt2, value: idv2},
  { id: 3, name: idt3, value: idv3},
  { id: 4, name: idt4, value: idv4},
  { id: 5, name: idt5, value: idv5},
  { id: 6, name: idt6, value: idv6},
 
];



  return (
    <section id="atributos"  className="mx-auto max-w-7xl pb-0 sm:px-0 sm:pb-4 lg:px-8 ">
      <div  className="overflow-hidden  relative h-full rounded-b-xl  bg-container  ">
     
        <img
          alt=""
          src={image}
          className="h-56 w-full  object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 "
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 ">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 ">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-4xl font-light text-[#BB8D42] ">
             {title1}
              </h2>
              <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl ">
              {title2}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {text}
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
               


{stats.map((stat, index) => (

  <motion.div
  key={stat.id}
  initial={{ opacity: 0, y: 50 }}  // Inicia invisible y desplazado hacia abajo
  whileInView={{ opacity: 1, y: 0 }}  // Se anima a visible y en su posición
  transition={{ duration: 0.6, delay: index * 0.2 }}  // Retraso basado en el índice
  viewport={{ once: true, margin: '-50px' }}  // La animación ocurre una vez, cuando la tarjeta está visible
>



                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-2xl font-light text-[#BB8D42] ">
                      {stat.name}
                    </dt>
                    <dd className="text-4xl font-black text-[#bdb6ac] ">
                      {stat.value}
                    </dd>
                  </div>
                  </motion.div>
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
