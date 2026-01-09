export default function Folleto({ mocap, fondo, linkfolleto }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = linkfolleto;
    link.download = 'Lauken_CC3.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="ubicacion" className="relative">
      {/* Título */}
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">
          FOLLETO
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] lg:min-h-[700px]"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
       
        {/* Contenido */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-24">
          
          {/* Imagen del mockup - Izquierda */}
          <div className=" lg:shrink-0 flex justify-center lg:justify-start">
            <img
              alt="Mockup del folleto"
              src={mocap}
              className="max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] drop-shadow-2xl"
            />
          </div>
          
          {/* Texto y botón - Derecha */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:flex-auto text-center lg:text-left">
            {/* Botón de descarga */}
            <button
              onClick={handleDownload}
              className="bg-[#F0B94D] hover:bg-[#E0A93D] px-10 py-5 text-xl lg:text-2xl font-bold text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-8"
            >
              DESCARGAR AQUÍ
            </button>
            
            {/* Texto descriptivo */}
            <p className="text-lg lg:text-xl font-medium text-white leading-relaxed max-w-lg mx-auto lg:mx-0 drop-shadow-lg">
              Infórmate de todos los detalles de nuestras increíbles parcelas,
              imágenes exclusivas, ubicación, planos, zonas cercanas y mucho más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}