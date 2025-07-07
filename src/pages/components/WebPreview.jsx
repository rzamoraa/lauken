import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import updiv from './updiv.svg';
import downdiv from './downdiv.svg'

import Titulo from './containers/Titlecontainer';
import Ending from './containers/ending';

const WebPreview = ({ url }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <section
    id="360"
    className="relative    "
  >





       <div className="overflow-hidden bg-container rounded-none px-0      ">
        

  
        <div className="relative  h-80" style={{ paddingTop: '56.25%' }}>
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-b-[#ceb996] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg border border-red-200 ">
            
            </div>
          ) : (
        

            
            <iframe
              src={url}
              className="absolute inset-0 w-full h-full border-2  rounded-none  "
              onLoad={handleLoad}
              onError={handleError}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin"
            />
           
          )}
        </div>
      
      
      </div>
      
    
     
    </section>
  );
};

export default WebPreview;