import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';

function Nosotros() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  



  return (
    <section id="nosotros" className="bg-white py-16">
  

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid de imágenes - 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Primera columna - Botón + 2 imágenes apiladas */}
          <div className="space-y-6">
     


            <div className="relative ">
              <img
                alt="Proyecto Costa Pulín"
                src={p1}
                className="w-full h-[250px] lg:h-[300px]  object-cover shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                alt="Desarrollo Entre Valles"
                src={p2}
                className="w-full h-[250px] lg:h-[300px]object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Segunda columna - 1 imagen grande */}
          <div className="relative">
            <img
              alt="Vista panorámica Lago Rapel"
              src={p3}
              className="w-full h-[250px] lg:h-[575px]  object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Nosotros;