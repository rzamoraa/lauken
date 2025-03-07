import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import updiv from './updiv.svg';
import downdiv from './downdiv.svg'


const containerStyle = {
  width: '100%',
  height: '100%',
};

const mapStyle = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 20 }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e2cead" }
    ]
  }
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
    <section id="ubicacion" className="sm:pb-3 pb-0">
         <img src={updiv} alt="Logo" className=" mx-auto " />
    <div  className="mx-auto max-w-7xl sm:px-6  lg:px-8 h-96   ">
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
        {icon && (
          <Marker 
            position={center} 
            icon={icon}  // Solo renderiza el marcador si el icono está definido
          />
        )}
      </GoogleMap>
    </div>
    <img src={downdiv} alt="Logo" className="mx-auto" />
    </section>
  );
};

export default Mapa;
