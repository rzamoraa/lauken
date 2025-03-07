import React from "react";

import down from './Tdown.svg'
import up from './Tup.svg'




function Titulo({title}) {
  return (

    <div className="mx-auto p-2 ">
          

<div className=" text-center  mx-auto  " >
  <h1 className=" text-4xl font-light text-[#7e6949]">
  {title}
  </h1>

</div>



  
    </div>
  );
}

export default Titulo;