import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta
import { Link } from 'react-router-dom';


function Return() {
  return (
    <section 
      id="return" 
      className=" h-[12vh] flex justify-center items-center text-white"
    >
     <div>

     <Link to="/"  aria-labelledby="features-heading" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ">
        Volver a la página principal
      </Link>


     </div>
     
    </section>
  );
}

export default Return;
