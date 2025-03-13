import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importamos Framer Motion
import { Link as ScrollLink } from 'react-scroll';
import updiv from './updiv.svg';
import downdiv from './downdiv.svg'


function Atributos({title1, title2, text, image, t1, v1, t2, v2, t3, v3, t4, v4, t5, v5, t6, v6, t7, v7, t8, v8, t9, v9, t10, v10 } ) {
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

  const [idt7, setIdt7] = useState(t7);
  const [idv7, setIdv7] = useState(v7);
  const [idt8, setIdt8] = useState(t8);
  const [idv8, setIdv8] = useState(v8);
  const [idt9, setIdt9] = useState(t9);
  const [idv9, setIdv9] = useState(v9);
  const [idt10, setIdt10] = useState(t10);
  const [idv10, setIdv10] = useState(v10);




  const stats = [
  { id: 1, name: idt1, value: idv1},
  { id: 2, name: idt2, value: idv2},
  { id: 3, name: idt3, value: idv3},
  { id: 4, name: idt4, value: idv4},
  { id: 5, name: idt5, value: idv5},
  { id: 6, name: idt6, value: idv6},
  { id: 7, name: idt7, value: idv7},
  { id: 8, name: idt8, value: idv8},
  { id: 9, name: idt9, value: idv9},
  { id: 10, name: idt10, value: idv10},
 
];



  return (
    <section id="atributos"  className="mx-auto max-w-7xl pb-0 sm:px-0 sm:pb-0 lg:px-8   bg ">
      <div className="bg-container">
      <img src={updiv} alt="Logo" className="mx-auto " />
      </div>
      
      <div  className="overflow-hidden  relative h-full   rounded-none bg-atributos ">
      
     
        <img
          alt=""
          src={image}
          className="h-56 w-full  object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 "
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 ">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 ">
            <div className="mx-auto max-w-1xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-4xl mb-6 font-bold text-[#BB8D42] ">
             {title1}
              </h2>
              <h1 className="text-4xl font-light  text-[#ece0ca] sm:text-6xl  ">
              {title2}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {text}
              </p>
              <ScrollLink  className="text-white hover:text-gray-300  "
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >


                    <a href="#" className=" font-light text-2xl   text-[#ece0ca]  hover:text-[#ceb996]    p-3 ">
                    Ven a conocerlo! <span aria-hidden="true">→</span>


         
           
          


                    </a>
                    </ScrollLink>
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
                    <dt className="text-2xl font-light text-[#ece0ca] ">
                      {stat.name}
                    </dt>
                    <dd className="text-3xl font-black text-[#e6ad5d]   ">
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
