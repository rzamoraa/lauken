import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const mapStyle = [
  
];

const Mapa = ({center}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  });

  // Estado para almacenar el icono del marcador
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (isLoaded && window.google) {
      // Solo asignar el icono cuando `window.google` esté disponible
      setIcon({
        url: "https://storage.googleapis.com/bucket-launken/Logos-iconos.png", 
        scaledSize: new window.google.maps.Size(40, 40)
      });
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section id="ubicacion" className="relative">
      {/* Título de la galería */}
          <div className="text-center py-8">
   
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">
              UBICACIÓN
            </h2>
          </div>

    <div  className="  h-96  ">
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
          zoomControl: false,
        }}
      >
      
      </GoogleMap>
    </div>
 
    </section>
  );
};

export default Mapa;
