import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';  // Usaremos estos íconos para el menú
import logo from '../assets/logo.svg'; // Asegúrate de tener un logo en esta ruta o reemplázalo
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/" className="text-white hover:text-gray-300 font-light">
          <img src={logo} alt="Logo" className="h-8" />
          </Link>
          </div>

          {/* Menu Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 font-light">Inicio</Link>


           
              <ScrollLink className="text-white hover:text-gray-300 font-light cursor-pointer"
            to="descripción" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            descripción
              </ScrollLink>
            

            

            
            
            
          

          
            <ScrollLink  className="text-white hover:text-gray-300 font-light cursor-pointer"
            to="atributos" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Atributos
          </ScrollLink>
            
            
            
           
          
            <ScrollLink  className="text-white hover:text-gray-300 font-light  cursor-pointer"
            to="especificaciones" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            especificaciones
          </ScrollLink>           
           

         
            <ScrollLink  className="text-white hover:text-gray-300 font-light cursor-pointer"
            to="mapa" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            mapa
          </ScrollLink>
            
 
          
            <ScrollLink  className="text-white hover:text-gray-300 font-light cursor-pointer"
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            contacto
          </ScrollLink>
            

          </div>

          {/* Menu Icon - Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu - Mobile */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-gradient`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light">Inicio</Link>

        

         
              <ScrollLink className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light cursor-pointer"
            to="descripción" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            descripción
              </ScrollLink>
           

              <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light cursor-pointer"
            to="atributos" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Atributos
          </ScrollLink>           
       
            
            
          
            <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light cursor-pointer"
            to="especificaciones" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            especificaciones
          </ScrollLink>           
     
          
            <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light cursor-pointer"
            to="mapa" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            mapa
          </ScrollLink>
            
            
            
          
          

        
            <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light cursor-pointer"
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            contacto
          </ScrollLink>
            
            
       


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
