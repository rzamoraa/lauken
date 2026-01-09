import React, { useState } from "react";
import { Menu, X, Search, Mail, Phone } from "lucide-react";
import logo from "../../assets/icons/logo.svg";
import logofull from "../../assets/icons/logolinea.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Inicio", url: "/", type: "internal" },
    { name: "Proyectos", url: "/ver-proyectos", type: "internal" },
    { name: "Vende tu campo", url: "/vende-tu-campo", type: "internal" },
    { name: "Quienes somos", url: "/quienes-somos", type: "internal" },
    { name: "Contacto", url: "/formulario-contacto", type: "internal" }
  ];

  const handleClick = (section) => {
    setMenuOpen(false);
    
    if (section.type === "internal") {
      // Navegación interna usando window.location.href (como en tu ejemplo)
      window.location.href = section.url;
    } else {
      // Scroll a secciones en la misma página
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const SocialIcons = () => (
    <>
      {/* Facebook */}
      <a href="https://www.facebook.com/laukeninmobiliaria/" className="text-white hover:text-gray-300 transition-colors">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />        </svg>
      </a>
      
      {/* Instagram */}
      <a href="https://www.instagram.com/laukeninmobiliaria/" target="_blank" rel="noopener noreferrer" 
         className="text-white hover:text-gray-300 transition-colors">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />        </svg>
      </a>
      
     
    </>
  );

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Barra superior */}
      <div className="bg-gray-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">

          </div>
          <div className="flex space-x-4">
            <SocialIcons />
          </div>
        </div>
      </div>







      {/* Navbar principal */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Navegación izquierda - Solo los primeros 3 elementos */}


            {/* Logo central - Ahora después de "Vende tu campo" */}
            <div className="flex-shrink-0">







<button onClick={() => handleClick(sections[0])}>
  <svg className="h-14 w-auto m-auto   fill-slate-700" viewBox="0 0 813.2 148.7" xmlns="http://www.w3.org/2000/svg">
   <g>
    <g id="Capa_1">
      <g id="Capa_1-2" data-name="Capa_1">
        <path className="cls-1" d="M225,53.6l-18.1-27.4-18.1,27.4M188.9,53.6l-2.9,4.4-9,13.6h-8.3l34.4-51h7.9l34.4,51h-8.4l-9-13.6-2.9-4.4"/>
        <path className="cls-1" d="M197.6,53.6l-18.1-27.4-18.1,27.4M161.5,53.6l-2.9,4.4-9,13.6h-8.3l34.4-51h7.9l34.4,51h-8.4l-9-13.6-2.9-4.4"/>
        <path className="cls-1" d="M170.2,53.6l-18.1-27.4-18.1,27.4M134.1,53.6l-2.9,4.4-9,13.6h-8.3l34.4-51h7.9l34.4,51h-8.4l-9-13.6-2.9-4.4"/>
        <path className="cls-1" d="M188.9,94.9l18.1,27.4,18.1-27.4M225,94.9l2.9-4.4,9-13.6h8.4l-34.4,51h-7.9l-34.4-50.9h8.3l9,13.6,2.9,4.4"/>
        <path className="cls-1" d="M161.5,94.9l18.1,27.4,18.1-27.4M197.6,94.9l2.9-4.4,9-13.6h8.4l-34.4,51h-7.9l-34.4-50.9h8.3l9,13.6,2.9,4.4"/>
        <path className="cls-1" d="M134.1,94.9l18.1,27.4,18.1-27.4M170.2,94.9l2.9-4.4,9-13.6h8.4l-34.4,51h-7.9l-34.4-50.9h8.3l9,13.6,2.9,4.4"/>
        <polygon className="cls-1" points="260.1 59.5 262.6 59.5 262.6 80.8 275.6 80.8 275.6 82.9 260.1 82.9 260.1 59.5"/>
        <polygon className="cls-1" points="300.2 74.6 294.6 62.1 289 74.6 288.1 76.7 285.3 82.9 282.8 82.9 293.4 59.5 295.9 59.5 306.5 82.9 303.9 82.9 301.1 76.7 300.2 74.6"/>
        <path className="cls-1" d="M311.4,72.9v-13.4h2.5v13.3c0,5.5,2.6,8.1,7.1,8.1s7.2-2.5,7.2-8.1v-13.3h2.4v13.4c0,6.7-3.6,10.2-9.6,10.2s-9.6-3.5-9.6-10.2"/>
        <polygon className="cls-1" points="345.8 71.9 341 76.8 341 82.9 338.6 82.9 338.6 59.5 341 59.5 341 73.6 354.8 59.5 357.6 59.5 347.5 70.1 358.3 82.9 355.4 82.9 345.8 71.9"/>
        <polygon className="cls-1" points="381.6 80.8 381.6 82.9 365.1 82.9 365.1 59.5 381.1 59.5 381.1 61.7 367.6 61.7 367.6 70 379.6 70 379.6 72.1 367.6 72.1 367.6 80.8 381.6 80.8"/>
        <polygon className="cls-1" points="409.7 59.5 409.7 82.9 407.7 82.9 392.7 63.9 392.7 82.9 390.2 82.9 390.2 59.5 392.2 59.5 407.3 78.5 407.3 59.5 409.7 59.5"/>
        <rect className="cls-1" x="419.1" y="59.5" width="5.4" height="23.4"/>
        <polygon className="cls-1" points="454.2 59.5 454.2 82.9 449.8 82.9 438.1 68.7 438.1 82.9 432.8 82.9 432.8 59.5 437.3 59.5 448.9 73.7 448.9 59.5 454.2 59.5"/>
        <polygon className="cls-1" points="483.8 82.9 483.8 68.9 476.9 80.4 474.5 80.4 467.6 69.2 467.6 82.9 462.5 82.9 462.5 59.5 467 59.5 475.8 74 484.4 59.5 488.8 59.5 488.9 82.9 483.8 82.9"/>
        <path className="cls-1" d="M495.7,71.2c0-6.9,5.4-12.1,12.8-12.1s12.8,5.1,12.8,12.1-5.4,12.1-12.8,12.1-12.8-5.1-12.8-12.1M515.8,71.2c0-4.4-3.1-7.5-7.3-7.5s-7.3,3-7.3,7.5,3.1,7.5,7.3,7.5,7.3-3,7.3-7.5"/>
        <path className="cls-1" d="M549.6,76.5c0,4-3.2,6.4-9.3,6.4h-12.1v-23.4h11.4c5.8,0,8.8,2.4,8.8,6.1s-1.2,4.1-3.1,5.1c2.6.8,4.3,2.8,4.3,5.8M533.5,63.6v5.5h5.4c2.6,0,4.1-.9,4.1-2.8s-1.4-2.7-4.1-2.7c0,0-5.4,0-5.4,0ZM544.1,75.9c0-2-1.5-2.9-4.3-2.9h-6.3v5.8h6.3c2.8,0,4.3-.9,4.3-2.9"/>
        <rect className="cls-1" x="556.5" y="59.5" width="5.4" height="23.4"/>
        <polygon className="cls-1" points="570.2 59.5 575.6 59.5 575.6 78.5 587.3 78.5 587.3 82.9 570.2 82.9 570.2 59.5"/>
        <rect className="cls-1" x="593.1" y="59.5" width="5.4" height="23.4"/>
        <polygon className="cls-1" points="616.8 64.8 613.1 73.8 611.4 77.9 609.3 82.9 603.8 82.9 614.2 59.5 619.5 59.5 630 82.9 624.3 82.9 622.2 77.9 616.8 64.8"/>
        <polygon className="cls-1" points="686.2 64.8 682.5 73.8 680.8 77.9 678.7 82.9 673.2 82.9 683.6 59.5 688.9 59.5 699.4 82.9 693.7 82.9 691.6 77.9 686.2 64.8"/>
        <path className="cls-1" d="M650.1,82.9l-4.5-6.5h-5v6.5h-5.4v-23.4h10.1c6.2,0,10.2,3.2,10.2,8.5s-1.8,6.1-4.8,7.4l5.2,7.5h-5.8,0ZM645,63.9h-4.4v8.1h4.4c3.3,0,5-1.5,5-4.1s-1.7-4.1-5-4.1"/>
        <rect className="cls-1" x="662.5" y="59.5" width="5.4" height="23.4"/>
      </g>
    </g>
  </g>
</svg>
</button>





            </div>

            {/* Navegación derecha - Los últimos 2 elementos + búsqueda */}
            <div className="hidden md:flex items-center space-x-8  mx-auto">
              {sections.slice().map((section) => (
                <button
                  key={section.name}
                  onClick={() => handleClick(section)}
                  className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-transparent hover:border-gray-900 transition-all duration-200 pb-1"
                >
                  {section.name}
                </button>
              ))}
          
            </div>

            {/* Botón móvil */}
            <div className="md:hidden mx-5">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 mx-auto  ">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    onClick={() => handleClick(section)}
                    className="block w-full  text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-center "
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;