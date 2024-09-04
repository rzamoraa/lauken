import React from 'react';
import logo from './lauken.svg'; // Asegúrate de que la ruta es correcta

function Contactus() {
  return (
    <section 
      id="contacto" 
      className="p-10"
    >
<div class="p-4 mx-auto max-w-xl  font-[sans-serif]">
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl ">Contact us</h1>
            <form class="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-[#BB8D42]" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-[#BB8D42]" />
                <input type='text' placeholder='Subject'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-[#BB8D42]" />
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-[#BB8D42]"></textarea>
                <button type='button'
                    class="text-white bg-[#c0bebd] hover:bg-[#8d8d8d] tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>


    </section>
  );
}

export default Contactus;
