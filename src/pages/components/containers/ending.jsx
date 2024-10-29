import React from "react";

import down from './Tdown.svg'
import up from './Tup.svg'




function Ending({title}) {
  return (

    <div className="mx-auto pb-5 ">
            <img src={down} alt="Logo" className="mx-auto" />

<div className=" text-center bg-gradient-to-r from-[#E9E8E4] from-20% via-[#C8C8C8] via-50% to-[#E9E8E4] to-80% mx-auto" >
{title}
</div>



  
    </div>
  );
}

export default Ending;