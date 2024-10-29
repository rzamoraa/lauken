import React from "react";

import down from './Tdown.svg'
import up from './Tup.svg'




function Titulo({title}) {
  return (

    <div className="mx-auto pt-5 ">
            <img src={up} alt="Logo" className="mx-auto" />

<div className=" text-center bg-gradient-to-r from-[#e9e8e400] from-20% via-[#C8C8C8] via-50% to-[#e9e8e400] to-80% mx-auto  " >
  <h1 className=" text-4xl font-light text-[#7e6949]">
  {title}
  </h1>

</div>



  
    </div>
  );
}

export default Titulo;