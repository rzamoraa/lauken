import React from "react";

function Atributos({ texto, image, t1, v1, t2, v2, t3, v3, t4, v4, t5, v5, t6, v6, t7, v7, t8, v8, t9, v9, t10, v10, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10 }) {
  const stats = [
    { id: 1, name: t1, value: v1, icon: i1 },
    { id: 2, name: t2, value: v2, icon: i2 },
    { id: 3, name: t3, value: v3, icon: i3 },
    { id: 4, name: t4, value: v4, icon: i4 },
    { id: 5, name: t5, value: v5, icon: i5 },
    { id: 6, name: t6, value: v6, icon: i6 },
    { id: 7, name: t7, value: v7, icon: i7 },
    { id: 8, name: t8, value: v8, icon: i8 },
    { id: 9, name: t9, value: v9, icon: i9 },
    { id: 10, name: t10, value: v10, icon: i10 },
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
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <section
                    key={stat.id}
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