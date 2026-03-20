import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", contact: "", message: "" });
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
                Si tenés dudas sobre qué necesita tu empresa a nivel tecnológico, escribinos o llamanos. Te orientamos sin compromiso y sin presión de venta.
              </p>

              <p className="text-xl font-bold mb-4 max-lg:text-[#1F3A5F] text-[#d4d4d4]">
                <a
                  href="https://wa.me/5491135117785"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Llamanos al: +54 9 11-3511-7785
                </a>
              </p>



              <h4 className="font-bold text-xl mt-6 mb-6">Tus beneficios:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <ul className="space-y-3 font-semibold text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Sin ataduras a marcas: recomendamos la mejor opción
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Respuesta en el día para urgencias
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    25 años de experiencia real con PYMES
                  </li>
                </ul>
                <ul className="space-y-3 font-semibold text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Presupuestos claros, sin costos ocultos
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Un referente único para toda tu tecnología
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1A11D3] w-5 h-5 flex-shrink-0" />
                    Sin contratos de permanencia
                  </li>
                </ul>
              </div>

              <h4 className="font-bold text-xl mb-8">¿Qué pasa después?</h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">1</span>
                  <p className="text-sm font-semibold">
                    Agendamos una llamada a tu conveniencia
                  </p>
                </div>
                <div className="text-gray-300 text-2xl font-light hidden sm:block">›</div>
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">2</span>
                  <p className="text-sm font-semibold">
                    Hacemos una reunión de consultoría
                  </p>
                </div>
                <div className="text-gray-300 text-2xl font-light hidden sm:block">›</div>
                <div className="flex items-start sm:items-center gap-3 max-w-[160px]">
                  <span className="text-4xl sm:text-3xl font-normal text-[#1F3A5F]">3</span>
                  <p className="text-sm font-semibold">
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
                  <div className="w-20 h-20 rounded-full bg-[#E47223]/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-[#E47223]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1F3A5F]">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-500">
                    Te respondemos en el día.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8 relative">
                    <h3 className="text-xl md:text-[1.35rem] font-bold text-[#1F3A5F]">
                      Escribinos y te respondemos en el día
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre */}
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="¿Cómo te llamás?"
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#E47223] focus:ring-1 focus:ring-[#E47223] transition-all text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Contacto (email o teléfono) */}
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Contacto
                      </label>
                      <input
                        type="text"
                        placeholder="Email o teléfono"
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#E47223] focus:ring-1 focus:ring-[#E47223] transition-all text-sm"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        required
                      />
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-500">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Contá brevemente qué necesitás..."
                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#E47223] focus:ring-1 focus:ring-[#E47223] transition-all text-sm resize-none placeholder:text-gray-400"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-[#E47223] hover:bg-[#c95f1a] text-white font-bold text-sm px-8 py-3.5 rounded-md transition-colors duration-300 w-full"
                      >
                        Enviar consulta
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-4 mb-4">
                        O si preferís, <a href="https://wa.me/+5491135117785" target="_blank" rel="noopener noreferrer" className="text-[#E47223]  font-medium hover:underline">escribinos por WhatsApp</a>.
                      </p>
                      {/* WhatsApp CTA */}
                      <a
                        href="https://wa.me/5491135117785"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 justify-center bg-[#1da851] hover:bg-[#25D366] text-white font-bold text-sm px-8 py-3.5 rounded-md transition-colors duration-300 w-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Escribinos por WhatsApp
                      </a>
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

