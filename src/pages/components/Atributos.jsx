import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';



function Atributos({texto, image, t1, v1, t2, v2, t3, v3, t4, v4, t5, v5, t6, v6, t7, v7, t8, v8, t9, v9, t10, v10, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10 }) {
  const [idt1, setIdt1] = useState(t1);
  const [idv1, setIdv1] = useState(v1);
  const [ico1, setIco1] = useState(i1);

  const [idt2, setIdt2] = useState(t2);
  const [idv2, setIdv2] = useState(v2);
  const [ico2, setIco2] = useState(i2);

  const [idt3, setIdt3] = useState(t3);
  const [idv3, setIdv3] = useState(v3);
  const [ico3, setIco3] = useState(i3);

  const [idt4, setIdt4] = useState(t4);
  const [idv4, setIdv4] = useState(v4);
  const [ico4, setIco4] = useState(i4);

  const [idt5, setIdt5] = useState(t5);
  const [idv5, setIdv5] = useState(v5);
  const [ico5, setIco5] = useState(i5);


  const [idt6, setIdt6] = useState(t6);
  const [idv6, setIdv6] = useState(v6);
  const [ico6, setIco6] = useState(i6);


  const [idt7, setIdt7] = useState(t7);
  const [idv7, setIdv7] = useState(v7);
  const [ico7, setIco7] = useState(i7);


  const [idt8, setIdt8] = useState(t8);
  const [idv8, setIdv8] = useState(v8);
  const [ico8, setIco8] = useState(i8);


  const [idt9, setIdt9] = useState(t9);
  const [idv9, setIdv9] = useState(v9);
  const [ico9, setIco9] = useState(i9);


  const [idt10, setIdt10] = useState(t10);
  const [idv10, setIdv10] = useState(v10);
  const [ico10, setIco10] = useState(i10);



  const stats = [
    { id: 1, name: idt1, value: idv1, icon: ico1 },
    { id: 2, name: idt2, value: idv2, icon: ico2 },
    { id: 3, name: idt3, value: idv3, icon: ico3 },
    { id: 4, name: idt4, value: idv4, icon: ico4 },
    { id: 5, name: idt5, value: idv5, icon: ico5 },
    { id: 6, name: idt6, value: idv6, icon: ico6 },
    { id: 7, name: idt7, value: idv7, icon: ico7 },
    { id: 8, name: idt8, value: idv8, icon: ico8 },
    { id: 9, name: idt9, value: idv9, icon: ico9 },
    { id: 10, name: idt10, value: idv10, icon: ico10 },
  ];

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



      {/* Imagen de fondo con overlay */}
      <div className="relative p-10 overflow-hidden">
        <img
          alt=""
          src={image || "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&auto=format&fit=crop&q=60"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Grid de características */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <section
                
                    className="text-center"
                  >
                    {/* Círculo con icono */}
                    <div className="mx-auto mb-4 w-28 h-28 rounded-full border-4 border-white flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors duration-300">
                      <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
                    </div>
                    
                    {/* Texto - Responsive */}
                    <div className="space-y-1">
                      <h3 className="
                        text-white 
                        text-base sm:text-lg md:text-xl 
                        font-semibold
                        px-2
                      ">
                        {stat.name}
                      </h3>
                      <p className="
                        text-white/90 
                        text-sm sm:text-base 
                        font-light
                        px-2
                      ">
                        {stat.value}
                      </p>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Atributos;