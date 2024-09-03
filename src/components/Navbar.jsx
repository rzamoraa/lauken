import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';  // Usaremos estos íconos para el menú
import logo from '../assets/logo.svg'; // Asegúrate de tener un logo en esta ruta o reemplázalo
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

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
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Menu Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 font-light">Inicio</Link>
            <Link to="/#proyectos" >
            
            <ScrollLink className="text-white hover:text-gray-300 font-light"
            to="proyectos" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Proyectos
          </ScrollLink>
            
            </Link>
            <Link to="/#contacto" >
            
            
            <ScrollLink  className="text-white hover:text-gray-300 font-light"
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Contacto
          </ScrollLink>
            
            
            
            </Link>
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
          <Link to="/#proyectos" >
          
          <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light"
            to="proyectos" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Proyectos
          </ScrollLink>
            
          
          </Link>
          <Link to="/#contacto" >
          
          <ScrollLink  className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md  font-light"
            to="contacto" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            Contacto
          </ScrollLink>
          
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
