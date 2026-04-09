import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroImage = () => {

  const springConfig = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] overflow-hidden bg-white pt-24 pb-32 md:pt-32 md:pb-10 flex flex-col items-center justify-center">


      {/* Decorative sine waves */}
      <svg
        className="absolute bottom-[30%] md:bottom-[20%] lg:bottom-[15%] left-0 w-full h-[200px] pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100 C 160 40, 320 160, 480 100 S 800 40, 960 100 S 1280 160, 1440 100"
          fill="none"
          stroke="#1F3A5F"
          strokeWidth="1.5"
          strokeOpacity="0.1"
        />
        <path
          d="M0 110 C 160 50, 320 170, 480 110 S 800 50, 960 110 S 1280 170, 1440 110"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1"
          strokeOpacity="0.07"
          strokeDasharray="8 6"
        />
      </svg>
      <svg
        className="absolute top-[12%] left-0 w-full h-[150px] pointer-events-none"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 75 C 100 45, 200 105, 300 75 S 500 45, 600 75 S 800 105, 900 75 S 1100 45, 1200 75 S 1340 105, 1440 75"
          fill="none"
          stroke="#1F3A5F"
          strokeWidth="1"
          strokeOpacity="0.07"
        />
        <path
          d="M0 80 C 100 55, 200 110, 300 80 S 500 55, 600 80 S 800 110, 900 80 S 1100 55, 1200 80 S 1340 110, 1440 80"
          fill="none"
          stroke="#E47223"
          strokeWidth="1"
          strokeOpacity="0.06"
          strokeDasharray="5 8"
        />
      </svg>

      {/* CONTENIDO */}
      <div className="container mx-auto relative z-10 px-4">

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">


          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[4rem] mt-9 md:mt-0 font-extrabold text-[#0f1d5e] leading-[1.1] mb-6 tracking-tight"
          >
            Tu tecnología funcionando. <br className="hidden md:block" />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F3A5F] to-[#2563EB]">
              sin sorpresas, sin sobrecostos.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.3 }}
            className="text-gray-500 text-sm md:text-lg max-w-2xl mb-10 leading-relaxed font-semibold"
          >
            Somos el equipo de IT que tu empresa necesita: soluciones reales al precio adecuado, sin venderte lo que no necesitás.
          </motion.p>

          {/* Botones — min 44px touch target */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-4 mb-14"
          >

            <a
              href="#contact"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#E47223] mt-5 md:mt-0 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-[0_10px_30px_rgba(228,114,35,0.3)] hover:shadow-[0_15px_40px_rgba(228,114,35,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Empezá tu consulta
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full md:w-auto flex items-center justify-center bg-white text-[#1F3A5F] border-2 border-gray-200 px-6 py-3.5 rounded-xl font-bold text-base hover:border-[#1F3A5F] hover:bg-gray-50 transition-all duration-300"
            >
              Ver servicios
            </a>

          </motion.div>

          {/* Trayectoria — sin fuente de estrellas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center mb-16 md:mb-24"
          >
            <p className="text-sm text-gray-500 font-semibold">
              Más de 25 años de trayectoria acompañando empresas.
            </p>

          </motion.div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gray-400 hover:text-[#1F3A5F] transition-colors"
        aria-label="Ir a la siguiente sección"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
};
export default HeroImage;