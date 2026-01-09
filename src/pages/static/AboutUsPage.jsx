import React from "react";

// Imágenes usando placeholders similares a las de la imagen
const aerialRoadsImg = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80';
const gateEntranceImg = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white mt-28 ">
      
      {/* ¿Quiénes Somos? Section */}
      <section className=" text-white  ">
        <div className=" mx-auto  text-center w-screen ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-slate-800  py-4">
            ¿QUIÉNES SOMOS?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-800 pb-10  mx-36">
            Somos una inmobiliaria especialista y dedicada a la venta de parcelas exclusivas en 
            condominios que combinan naturaleza, comodidad y seguridad. Creemos en la vida 
            al aire libre, en el descanso real y en la posibilidad de invertir en un entorno que 
            ofrece calidad de vida, conectividad y plusvalía.
          </p>
        </div>
      </section>

      {/* Aerial Roads Image */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={aerialRoadsImg}
          alt="Vista aérea de caminos serpenteantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      {/* Nuestra Misión Section */}
      <section className=" text-white ">
       <div className=" mx-auto  text-center w-screen ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-slate-800 py-4">
            NUESTRA MISIÓN
          </h2>
           <p className="text-lg md:text-xl leading-relaxed text-slate-800 pb-10 mx-36">
            Crear comunidades sostenibles y de alta calidad, entregando parcelas que 
            integren naturaleza, seguridad y plusvalía, a través de proyectos inmobiliarios 
            responsables y comprometidos con el desarrollo armónico del entorno.
          </p>
        </div>
      </section>

      {/* Gate Entrance Image */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={gateEntranceImg}
          alt="Entrada con portón y letrero Costa Pullin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Simulando el letrero Costa Pullin */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm text-white p-4 rounded">
          <div className="text-2xl font-bold">COSTA PULLIN</div>
          <div className="text-sm">Lago Rapel</div>
        </div>
      </section>

      {/* Nuestra Visión Section */}
      <section className=" text-white ">
         <div className=" mx-auto text-center w-screen ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-slate-800 py-4">
            NUESTRA VISIÓN
          </h2>
         <p className="text-lg md:text-xl leading-relaxed text-slate-800 pb-10 mx-36">
            Ser la inmobiliaria líder en parcelaciones, reconocida por ofrecer proyectos con 
            alto estándar de urbanización, conectividad y vida al aire libre, construyendo 
            espacios que inspiren a vivir mejor.
          </p>
        </div>
      </section>

    </div>
  );
}

export default AboutUsPage;