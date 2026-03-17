import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    helpType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      helpType: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full max-lg:bg-[linear-gradient(to_bottom,#f3f6fa,#d6e2ef)] lg:bg-[linear-gradient(to_bottom,#1A1C1D_0%,#1A1C1D_55%,#E5E9F5_55%,#E5E9F5_100%)] z-0"
    >
      <div className="container mx-auto py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Dark Section Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white pt-4 pb-8 lg:pb-12 max-lg:relative"
            >
              {/* Full bleed dark background for mobile only */}
              <div className="absolute top-[-4rem] bottom-0 w-[4000px] left-1/2 -translate-x-1/2 bg-[#1A1C1D] -z-10 lg:hidden" />

              <span className="inline-block border border-gray-600 bg-black/20 text-[10px] sm:text-xs font-bold tracking-widest px-3 py-1.5 rounded mb-6 uppercase max-lg:relative max-lg:z-10">
                Contáctanos
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight shadow-sm max-lg:relative max-lg:z-10">
                Asóciate con nosotros para una solución informática integral.
              </h2>
            </motion.div>

            {/* Light Section Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#1F3A5F] pt-4 lg:pt-8"
            >
              <p className="text-lg font-medium leading-relaxed mb-6 max-lg:text-[#1F3A5F] text-[#d4d4d4]">
                Estaremos encantados de responder a cualquier pregunta que tenga
                y ayudarle a determinar cuál de nuestros servicios se adapta
                mejor a sus necesidades.
              </p>

              <p className="text-xl font-bold mb-10 pb-4 max-lg:text-[#1F3A5F] text-[#d4d4d4]">
                Llámenos al: +54 9 11 3511-7785
              </p>

              <h4 className="font-bold text-xl mb-6">Sus beneficios:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <ul className="space-y-3 font-semibold text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Orientado al cliente
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Independiente
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Competente
                  </li>
                </ul>
                <ul className="space-y-3 font-semibold text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Orientado a resultados
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Resolución de problemas
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Transparente
                  </li>
                </ul>
              </div>

              <h4 className="font-bold text-xl mb-8">¿Qué pasa después?</h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">1</span>
                  <p className="text-xs leading-tight font-medium">
                    Agendamos una llamada a tu conveniencia
                  </p>
                </div>
                <div className="text-gray-300 text-2xl font-light hidden sm:block">
                  ›
                </div>
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">2</span>
                  <p className="text-xs leading-tight font-medium">
                    Realizamos una reunión de consultoría
                  </p>
                </div>
                <div className="text-gray-300 text-2xl font-light hidden sm:block">
                  ›
                </div>
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">3</span>
                  <p className="text-xs leading-tight font-medium">
                    Preparamos una propuesta
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (OVERLAPPING FORM) */}
          <div className="lg:col-span-6 relative z-20 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 md:p-10 border border-gray-100 relative h-full flex flex-col justify-center"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-[#1A11D3]/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-[#1A11D3]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1F3A5F]">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-gray-500">
                    Nos pondremos en contacto contigo lo antes posible para organizar tu consulta gratuita.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10 relative">
                    <h3 className="text-xl md:text-[1.35rem] font-bold text-[#1F3A5F]">
                      Solicite una consulta gratuita.
                    </h3>
                    {/* Simulated hand-drawn arrow pointing to form */}
                    <div className="absolute -bottom-6 left-1/2 translate-x-12 hidden md:block">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 rotate-12">
                        <path d="M14.5 17.5L12 21L8 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 7C10.5 7 13.5 10.5 13 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500">
                          Nombre de pila
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500">
                          Apellido
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Correo electrónico de la empresa
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        ¿Cómo podemos ayudarle?
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm appearance-none"
                        value={formData.helpType}
                        onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                        required
                      >
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="Servicios Gestionados">Servicios Gestionados</option>
                        <option value="Consultoría IT">Consultoría IT</option>
                        <option value="Seguridad y Redes">Seguridad y Redes</option>
                        <option value="Soporte Remoto">Soporte Remoto</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Mensaje
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Para poder ayudarle mejor, describa cómo podemos ayudarle..."
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none placeholder:text-gray-400"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-[#E47223] hover:bg-[#c95f1a] text-white font-bold text-sm px-8 py-3 rounded transition-colors duration-300 w-auto"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;