import React from "react";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import g1 from '../../assets/projects/san-rafael/carrusel/sr1.jpg';

function CompanyPage() {
  return (
    <div className="min-h-screen bg-white mt-28 ">
      
      {/* ¿Quiénes Somos? Section */}
      <section className=" text-white  ">
            <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-slate-800 text-neutral-50 py-3 sm:py-4 px-4 text-center">
         ¿QUIÉNES SOMOS?
        </h2>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8 md:py-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-800 text-center max-w-6xl mx-auto">
           Somos una inmobiliaria especialista y dedicada a la venta de parcelas exclusivas en 
            condominios que combinan naturaleza, comodidad y seguridad. Creemos en la vida 
            al aire libre, en el descanso real y en la posibilidad de invertir en un entorno que 
            ofrece calidad de vida, conectividad y plusvalía.
          </p>
        </div>
      </div>

      </section>




      {/* Aerial Roads Image */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={g1}
          alt="Entrada con portón y letrero Costa Pullin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Simulando el letrero Costa Pullin */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm text-white p-4 rounded">
          <div className="text-2xl font-bold">COSTA SAN RAFAEL</div>
          <div className="text-sm">Lago Rapel</div>
        </div>
      </section>














      {/* Nuestra Misión Section */}
      <section className=" text-white ">
            <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-slate-800 text-neutral-50 py-3 sm:py-4 px-4 text-center">
        NUESTRA MISIÓN
        </h2>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8 md:py-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-800 text-center max-w-6xl mx-auto">
         Crear comunidades sostenibles y de alta calidad, entregando parcelas que 
            integren naturaleza, seguridad y plusvalía, a través de proyectos inmobiliarios 
            responsables y comprometidos con el desarrollo armónico del entorno.
          </p>
        </div>
      </div>
      </section>





















      {/* Gate Entrance Image */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={p2}
          alt="Entrada con portón y letrero Costa Pullin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Simulando el letrero Costa Pullin */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm text-white p-4 rounded">
          <div className="text-2xl font-bold">COSTA PULÍN</div>
          <div className="text-sm">Lago Rapel</div>
        </div>
      </section>

      {/* Nuestra Visión Section */}
      <section className=" text-white ">

            <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-slate-800 text-neutral-50 py-3 sm:py-4 px-4 text-center">
        NUESTRA VISIÓN
        </h2>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8 md:py-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-800 text-center max-w-6xl mx-auto">
      Ser la inmobiliaria líder en parcelaciones, reconocida por ofrecer proyectos con 
            alto estándar de urbanización, conectividad y vida al aire libre, construyendo 
            espacios que inspiren a vivir mejor.
          </p>
        </div>
      </div>
      </section>

    </div>
  );
}

export default CompanyPage;


