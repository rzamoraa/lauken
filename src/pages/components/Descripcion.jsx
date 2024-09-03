import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta
import { Link as ScrollLink } from 'react-scroll';

function Description() {
  return (
    <section 
      id="descripción" 
      className=""
    >
    
     <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-10 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white ">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>


            <ScrollLink  
            to="especificaciones" 
            smooth={true} 
            offset={-70} 
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
          
         

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
             
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                
                Saber más <span aria-hidden="true">→</span>
              </a>
            </div>
            


            </ScrollLink>


          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
           <video 
        className="h-full m-auto"
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
