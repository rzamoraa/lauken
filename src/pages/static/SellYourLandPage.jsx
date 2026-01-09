import React, { useRef, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import bg from '../../assets/images/vendetucampo.jpg';

const heroimg = bg;

function SellYourLandPage() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    ubicacion: '',
    hectareas: '',
    mensaje: ''
  });
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const [cargando, setCargando] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    setCargando(true);

    // Simulación del envío (reemplaza con tu lógica de EmailJS)
    setTimeout(() => {
      setMensaje({ tipo: 'exito', texto: '¡Mensaje enviado correctamente!' });
      setFormData({
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        ubicacion: '',
        hectareas: '',
        mensaje: ''
      });
      setCargando(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroimg}
          alt="Campo agrícola"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ¿TE GUSTARÍA<br />
              VENDER TU CAMPO?
            </h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              ¡ESCRÍBENOS PARA CREAR UNA ALIANZA!
            </h2>
            <div className="w-96 h-[2px] bg-slate-400 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                placeholder="Apellido"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                placeholder="Correo"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
              <input
                type="tel"
                name="celular"
                value={formData.celular}
                onChange={handleInputChange}
                placeholder="Celular"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleInputChange}
                placeholder="Ubicación de campo"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
              <input
                type="text"
                name="hectareas"
                value={formData.hectareas}
                onChange={handleInputChange}
                placeholder="Número de hectáreas"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm"
              />
            </div>

            <div className="mb-8">
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Mensaje"
                rows="6"
                required
                className="w-full py-4 px-6 bg-white text-gray-800 placeholder-gray-400 text-lg outline-none border border-gray-300 focus:border-[#F0B94D] focus:ring-2 focus:ring-[#F0B94D]/20 transition-all rounded-lg shadow-sm resize-none"
              ></textarea>
            </div>

            <button
              onClick={enviarEmail}
              disabled={cargando}
              className="w-full py-4 px-8 bg-[#F0B94D] hover:bg-yellow-500 text-slate-800 text-xl font-semibold transition-colors disabled:opacity-70 rounded-lg"
            >
              {cargando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>

          {/* Mensaje de confirmación */}
          {mensaje.texto && (
            <div className={`mt-6 text-center text-lg font-medium ${
              mensaje.tipo === 'exito' ? 'text-green-600' : 'text-red-600'
            }`}>
              {mensaje.texto}
            </div>
          )}

          {/* Botón de WhatsApp */}
       
        </div>
      </div>
    </div>
  );
}

export default SellYourLandPage;