import React from 'react';
import logo from '../assets/lauken.svg'; // Asegúrate de que la ruta es correcta
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';


import updiv from '../pages/components/updiv.svg'
import downdiv from '../pages/components/downdiv.svg'



const navigation = [


  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]




function Nosotros() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Datos estructurados para la empresa inmobiliaria
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Laukén Inmobiliaria",
    "description": "Desarrolladora de proyectos de parcelación exclusivos en Chile, especializada en zonas privilegiadas con enfoque en sustentabilidad y respeto al entorno.",
    "areaServed": "Chile",
    "knowsAbout": ["Parcelación de terrenos", "Desarrollo inmobiliario", "Proyectos exclusivos"],
    "slogan": "Confía en los que saben"
  };

  return (
    <section id="nosotros" className="text-center">
<Helmet>
  <title>Sobre Laukén Inmobiliaria | Desarrolladores de Parcelas Exclusivas en Chile</title>
  
  <meta name="description" content="Laukén Inmobiliaria desarrolla proyectos de parcelación exclusivos en Chile, con valores centrados en el respeto al entorno y la transparencia. Expertos en terrenos y parcelas premium." />
  
  <meta name="keywords" content="Laukén Inmobiliaria, parcelas exclusivas chile, desarrollo inmobiliario sustentable, terrenos premium chile, proyectos parcelación, inmobiliaria transparente" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Laukén Inmobiliaria | Desarrolladores de Confianza en Chile" />
  <meta property="og:description" content="Desarrollamos proyectos de parcelación únicos en zonas exclusivas de Chile, respetando el entorno y priorizando la transparencia." />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Conoce Laukén Inmobiliaria | Parcelas Exclusivas en Chile" />
  <meta name="twitter:description" content="Expertos en desarrollo de parcelas premium en Chile. Proyectos únicos con respeto al entorno y transparencia." />
  
  {/* Datos estructurados */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Laukén Inmobiliaria",
      "description": "Desarrolladora de proyectos de parcelación exclusivos en Chile",
      "areaServed": "Chile",
      "knowsAbout": ["Parcelación de terrenos", "Desarrollo inmobiliario sustentable", "Proyectos exclusivos"],
      "slogan": "Confía en los que saben",
      "serviceType": ["Desarrollo de parcelas", "Proyectos inmobiliarios exclusivos"]
    })}
  </script>

  <link rel="canonical" href="https://lauken.cl/nosotros" />
</Helmet>

      
      <img src={downdiv} alt="Logo" className="mx-auto" />
    <div className="">
    
      <main>
        <div className="relative isolate -mt-16 -mb-20 ">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-[#d6d3c5] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ffffff] to-[#BB8D42] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-light tracking-tight text-[#BB8D42] sm:text-6xl ">
                 <a className='  font-semibold '>Nosotros </a>
                  </h1>
                  <p className="mt-6 text-lg leading-8 tracking-tight text-gray-600 sm:max-w-md lg:max-w-none">
                  En Laukén Inmobiliaria, trabajamos día a día en desarrollar proyectos de parcelación únicos en zonas exclusivas de Chile, teniendo como valores inquebrantables el respeto al entorno y la transparencia hacia nuestros clientes. Nos esforzamos por ofrecer proyectos que superen las expectativas de nuestros propios clientes, acompañándolos en todo el proceso de compra. Nuestro propósito es que encuentres a un socio confiable en la construcción de un futuro próspero y sostenible, tanto para ti como para las comunidades con las que convivimos. Confía en los que saben.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">



                  <ScrollLink  className="text-white hover:text-gray-300 font-light"
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >


                    <a href="#" className="text-sm font-semibold leading-6  text-[#BB8D42] shadow-sm hover:text-[#ceb996]">
                    ¡Hablemos! <span aria-hidden="true">→</span>


         
           
          


                    </a>
                    </ScrollLink>
         
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src= {p4}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src={p5}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={p2}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0 ">
                    <div className="relative">
                      <img
                        alt=""
                        src={p1}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={p3}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
    </section>
  )
}

export default Nosotros;
