import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: "inicio", path: "/", name: "Inicio" },
    { id: "nosotros", path: "/nosotros", name: "Nosotros" },
    { id: "proyectos", path: "/proyectos", name: "Proyectos" },
    { id: "vendenos", path: "/vendenos", name: "Vende tu Campo" },
    { id: "contacto", path: "/contacto", name: "Contacto" }
  ];

  const handleSetActive = (to) => {
    const section = sections.find(s => s.id === to);
    if (section && location.pathname === '/') {
      // Actualizar la URL sin recargar la página
      window.history.pushState({}, '', section.path);
    }
  };

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);
    // Si no estamos en la página principal, navegar a ella primero
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // Manejar el scroll y actualizar la URL
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach(({ id, path }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight &&
            location.pathname === '/'
          ) {
            window.history.replaceState(null, '', path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="bg-gradient fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="inicio"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            onClick={() => handleSectionClick('inicio')}
          >
            <img src={logo} alt="Logo" className="h-8" />
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map(({ id, name }) => (
              <ScrollLink
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                className="text-white hover:text-gray-300 font-light cursor-pointer"
                onClick={() => handleSectionClick(id)}
              >
                {name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            {sections.map(({ id, name }) => (
              <ScrollLink
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:bg-slate-300/10 px-3 py-2 rounded-md font-light cursor-pointer"
                onClick={() => handleSectionClick(id)}
              >
                {name}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;