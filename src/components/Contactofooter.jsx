import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';




function Contactofooter() {


  const whatsappLink = 'https://wa.me/56981381556?text=Hola,%20quiero%20más%20información%20sobre%20la%20empresa.';
  const navigation = [


    
    {
      name: 'Whatsapp',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]


  return (
    <footer className="fixed bottom-1 w-full z-10">
      <div className="mx-auto px-6 py-1">
        <div className="flex justify-center gap-x-6 md:order-2">
          {/* Botón con ícono y texto en pantallas grandes */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
          >
            {/* Texto visible solo en pantallas medianas o más grandes */}
            
            <FaWhatsapp className="text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contactofooter;
