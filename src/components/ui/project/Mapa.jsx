import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import SectionTitle from "../SectionTitle";

const containerStyle = {
  width: '100%',
  height: '100%',
};

/**
 * Mapa - Componente de mapa de Google Maps
 * 
 * @param {Object} center - Coordenadas { lat, lng }
 * @param {string} title - Título de la sección (default: "UBICACIÓN")
 * @param {number} zoom - Nivel de zoom (default: 15)
 */
const Mapa = ({ center, title = "UBICACIÓN", zoom = 15 }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (isLoaded && window.google) {
      setIcon({
        url: "https://storage.googleapis.com/bucket-launken/Logos-iconos.png",
        scaledSize: new window.google.maps.Size(40, 40)
      });
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <section id="ubicacion" className="relative">
        <SectionTitle title={title} />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-gray-500">Cargando mapa...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ubicacion" className="relative">
      {/* Título de la sección */}
      <SectionTitle title={title} />

      {/* Contenedor del mapa */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="h-[400px] md:h-[500px] lg:h-[550px] w-full rounded-lg overflow-hidden shadow-lg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              scrollwheel: false,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Mapa;
