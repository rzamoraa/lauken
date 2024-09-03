import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta
import { Link as ScrollLink } from 'react-scroll';

function Description() {
  return (
    <section 
      id="descripción" 
      className=""
    >
    
     <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-10 lg:px-8 ">
        <div className="relative  overflow-hidden bg-gray-900 rounded-xl  ">
          <div className="">
           


            <ScrollLink  
            to="especificaciones" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
          
         

           


            </ScrollLink>


          </div>
          <div className="relative h-full md:h-[45vh]  ">
           <video 
        className=""
        src="https://videos.pexels.com/video-files/4934316/4934316-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
          </div>
        </div>
      </div>



    </section>
  );
}

export default Description;
