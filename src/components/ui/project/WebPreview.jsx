import React, { useState } from 'react';
import { Loader2, AlertCircle, RotateCcw } from 'lucide-react';
import SectionTitle from '../SectionTitle';

/**
 * WebPreview - Componente para mostrar tours 360° o contenido embebido
 * 
 * @param {string} url - URL del contenido a embeber
 * @param {string} title - Título de la sección (default: "TOUR 360°")
 */
const WebPreview = ({ url, title = "TOUR 360°" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const handleRetry = () => {
    setError(false);
    setIsLoading(true);
  };

  if (!url) return null;

  return (
    <section id="tour360" className="relative">
      {/* Título de la sección */}
      <SectionTitle title={title} />

      {/* Contenedor del iframe */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-14 md:pb-16">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
          
          {/* Estado de carga */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <Loader2 className="w-10 h-10 text-[#F0B94D] animate-spin mx-auto mb-3" />
                <p className="text-gray-500 text-sm">Cargando tour virtual...</p>
              </div>
            </div>
          )}

          {/* Estado de error */}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">No se pudo cargar el tour virtual</p>
                <button
                  onClick={handleRetry}
                  className="
                    inline-flex items-center gap-2
                    bg-slate-800 hover:bg-slate-700
                    text-white px-4 py-2 rounded-lg
                    transition-colors duration-300
                  "
                >
                  <RotateCcw className="w-4 h-4" />
                  Reintentar
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={url}
              className="absolute inset-0 w-full h-full"
              onLoad={handleLoad}
              onError={handleError}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin"
              title="Tour virtual 360°"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WebPreview;
