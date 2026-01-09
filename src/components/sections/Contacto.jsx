import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Contacto - Formulario de contacto principal
 * 
 * Características:
 * - Formulario con validación
 * - Integración con EmailJS
 * - Información de contacto
 * - Diseño responsive
 */

// Proyectos disponibles para el select
const proyectosDisponibles = [
  { value: 'Costa Pulín', label: 'Costa Pulín' },
  { value: 'Costa San Rafael', label: 'Costa San Rafael' },
];

// Información de contacto
const contactInfo = {
  address: 'Avenida Vitacura 3092, Vitacura, Santiago',
  phones: [
    { number: '+56 2 2206 5654', raw: '+56222065654' },
    { number: '+56 9 9275 7172', raw: '+56992757172' },
  ],
  email: 'hola@lauken.cl',
};

function Contacto() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    proyecto: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const enviarEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMensaje({ tipo: '', texto: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setMensaje({ tipo: 'exito', texto: '¡Mensaje enviado correctamente!' });
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        proyecto: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar:', error);
      setMensaje({ tipo: 'error', texto: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estilos de input reutilizables
  const inputClass = `
    w-full rounded-lg 
    py-3 md:py-4 px-4 
    text-gray-800 bg-gray-50 
    placeholder-gray-500 
    text-base 
    border-2 border-transparent
    focus:outline-none focus:border-[#F0B94D] focus:bg-white
    transition-all duration-200
  `;

  return (
    <section id="contacto" className="bg-slate-800 py-16 md:py-20 h-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda: Información */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡AGENDA TU VISITA!
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Escríbenos y te responderemos a la brevedad
            </p>

            {/* Info de contacto */}
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#F0B94D] flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-[#F0B94D] flex-shrink-0" />
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F0B94D] flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div>
            <form ref={formRef} onSubmit={enviarEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
                className={inputClass}
              />

              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
                className={inputClass}
              />

              <input
                type="tel"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className={inputClass}
              />

              <div className="relative">
                <select
                  name="proyecto"
                  value={formData.proyecto}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Selecciona el proyecto</option>
                  {proyectosDisponibles.map((proyecto) => (
                    <option key={proyecto.value} value={proyecto.value}>
                      {proyecto.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje"
                rows="4"
                required
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full 
                  flex items-center justify-center gap-2
                  bg-[#F0B94D] hover:bg-[#E0A93D] 
                  text-white font-semibold 
                  py-4 px-6 
                  rounded-lg 
                  transition-all duration-300
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>

            {/* Mensaje de estado */}
            {mensaje.texto && (
              <div
                className={`
                  mt-4 p-4 rounded-lg flex items-center gap-2
                  ${mensaje.tipo === 'exito' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                  }
                `}
              >
                {mensaje.tipo === 'exito' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                {mensaje.texto}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;