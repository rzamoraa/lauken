import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout - Componente de layout principal
 * 
 * Envuelve todas las páginas con:
 * - SEO tags (canonical, hreflang)
 * - Navbar
 * - Footer
 * - Espaciado para navbar fija
 */

// Dominios alternativos para SEO
const DOMAINS = [
  'https://lauken.cl',
  'https://laukeninmobiliaria.cl',
  'https://inmobiliarialauken.cl',
];

function Layout({ children, showNavbar = true, showFooter = true }) {
  const location = useLocation();
  const primaryDomain = DOMAINS[0];

  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <link rel="canonical" href={`${primaryDomain}${location.pathname}`} />
        {DOMAINS.map((domain) => (
          <link
            key={domain}
            rel="alternate"
            hrefLang="es-CL"
            href={`${domain}${location.pathname}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${primaryDomain}${location.pathname}`}
        />
      </Helmet>

      {/* Estructura de la página */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        {showNavbar && <Navbar />}

        {/* Contenido principal con espacio para navbar fija */}
        <main className={showNavbar ? 'pt-[104px]' : ''}>
          {children}
        </main>

        {/* Footer */}
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default Layout;