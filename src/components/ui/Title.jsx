import React from 'react';

function Title({ precio, texto1, texto2, video, logoproyecto, brochurePdf, showBrochureButton = false}) {
  // Función para manejar la apertura del PDF desde Google Cloud Storage
  const handleBrochureClick = () => {
    if (brochurePdf) {
      // Si ya es una URL completa, úsala directamente
      if (brochurePdf.startsWith('http')) {
        window.open(brochurePdf, '_blank');
      }
      // Si es una ruta relativa en Google Cloud Storage
      else {
        // Formato común para URLs públicas de Google Cloud Storage
        // https://storage.googleapis.com/[BUCKET_NAME]/[OBJECT_NAME]
        const fullUrl = `https://storage.googleapis.com/${brochurePdf}`;
        window.open(fullUrl, '_blank');
      }
    }
  };

  return (
    <section
      id="title"
      className="relative min-h-[90vh]  flex flex-col justify-between items-center text-white overflow-hidden bg-black "
    > 
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      


<div
         
          className="relative z-10 w-full max-w-4xl   bg-teal-50  m-auto "
    
        >
          {/* Contenedor con estilos similares a Description */}
          
          
       
          
          
          
          <div   className="bg-gradient-to-r from-[#000000b7] via-[#111111a7] to-[#000000ce] 
          py-6 px-8 rounded-lg border border-yellow-500 shadow-lg w-full absolute my-28"
          
         
          >
            {/* Cinta decorativa similar a Description */}
           
              <div className="bg-yellow-500 text-black font-bold text-sm md:text-md  px-2 rounded-t-md absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center z-10">
              Proyecto Exclusivo
              </div>
      
            
            {/* Título con efecto de pulsación y estilo dorado */}
            <div
 
            >
              <h1 
                className=
                  "text-yellow-500 font-extrabold mb-2 tracking-wider text-2xl md:text-4xl " 

              >
               {precio}
              </h1>
            </div>

                                  <div 
                                    className=
                                      "text-white text-sm font-semibold mb-3 tracking-wider md:text-md" 
                                     
                                  
                                    
                                  >
                                    
                                   {texto1}
                                   <span className="text-yellow-500">
                              
                                     |
                                     </span>
                                     
                                     <span className="text-white text-xl font-bold md:text-2xl"> 
                                     {texto2}
                                     </span>
                                  </div>
</div>


<div>
</div>


</div>

















      {/* Capa oscura sobre el video para mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full "></div>
     
      {/* SVG del logo centrado */}
      <div className="relative z-10 flex flex-col items-center">
      
      </div>
      
      {/* Botón fijo para descargar brochure en la esquina inferior izquierda */}

    </section>
  );
}

export default Title;