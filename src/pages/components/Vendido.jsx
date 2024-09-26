import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta
import huincha from '../../../src/assets/img/vendido.png'
function Vendido() {
  return (
    
<div className=" mx-auto  my-16 w-screen h-10  fixed z-30    flex  ">
          <div className='w-full '></div>
          <div className='w-full '></div>
          <div className='w-[600px]      '>
          <img
          alt=""
          src={huincha}
          className=""
        />
          </div>
        
        </div>



  );
}

export default Vendido;
