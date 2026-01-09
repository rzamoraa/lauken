import React from "react";

function Description({ nombre, logoproyecto }) {

  return (
    <div className="w-full h-80" 
       >
            <div className="s py-3 ">

      </div>
      <div className="h-64">







<img 
  src={logoproyecto} 
  alt={nombre} 
  className="h-full mx-auto brightness-50 [filter:brightness(0)_invert(10%)_sepia(0%)_saturate(0%)_brightness(200%)_contrast(10%)]" 
/>


      </div>


      
    </div>
  );
}

export default Description;