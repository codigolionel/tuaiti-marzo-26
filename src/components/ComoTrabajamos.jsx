import { motion } from "framer-motion";
import { Wrench, Search, Monitor, AlertTriangle, ArrowRight } from "lucide-react";

// Datos de los pasos del proceso - Textos resumidos sin número
const pasos = [
  {
    icono: Search,
    titulo: "Diagnóstico",
    descripcion: "Analizamos tu entorno para detectar áreas de oportunidad.",
  },
  {
    icono: AlertTriangle,
    titulo: "Detección",
    descripcion: "Identificamos riesgos ocultos que afectan tu operación.",
  },
  {
    icono: Wrench,
    titulo: "Implementación",
    descripcion: "Ejecutamos mejoras precisas minimizando el impacto.",
  },
  {
    icono: Monitor,
    titulo: "Monitoreo",
    descripcion: "Supervisión 24/7 para garantizar disponibilidad continua.",
  },
];

const contenedorVariants = {
  oculto: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const tarjetaVariants = {
  oculto: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ComoTrabajamos() {
  return (
    // Sección principal con más "aire" arriba (padding-top aumentado)
    <section className="relative bg-[#f3f6fa] pt-24 pb-20 lg:pt-32 lg:pb-28 flex flex-col justify-center overflow-hidden">


      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-8 lg:gap-6">
          {/* Encabezado Centrado en móvil y tablet, y ajustado a la izquierda en desktop */}
          <motion.div
            className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >

            <h2 className="text-3xl font-extrabold text-[#1F3A5F] mb-8 mt-4 leading-tight tracking-tight">
              Có{""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F3A5F] to-[#2563EB]">
                mo  trabajamos
              </span>
            </h2>

            <p className="text-xl md:text-[1.35rem] font-bold text-[#1F3A5F] leading-relaxed max-w-sm mb-8 md:mb-10 px-6 md:px-12 lg:px-0">
              Resultados rápidos para tu infraestructura.
            </p>
          </motion.div>

          {/* Grid de pasos - Todo centrado */}
          <motion.div
            className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={contenedorVariants}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {pasos.map((paso, index) => {
              const Icono = paso.icono;
              return (
                <motion.div
                  key={index}
                  variants={tarjetaVariants}
                  // Sin fondos de caja ni bordes, solo centrado y padding limpio
                  className="group px-4 py-2 transition-all duration-300 flex flex-col items-center text-center justify-start hover:-translate-y-1"
                >

                  {/* Contenedor del ícono - Estilo Tuiati */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(31,58,95,0.08)" }}
                  >
                    <Icono className="w-6 h-6 text-[#1F3A5F]" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#1F3A5F] mb-2">
                      {paso.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto px-4 md:px-8 lg:px-0">
                      {paso.descripcion}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E47223] hover:bg-[#c95f1a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-[0_10px_30px_rgba(228,114,35,0.3)] hover:shadow-[0_15px_40px_rgba(228,114,35,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Pedí tu diagnóstico gratis
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
