import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroImage = () => {

  const springConfig: any = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] overflow-hidden bg-white pt-24 pb-32 md:pt-32 md:pb-10 flex flex-col items-center justify-center">


      {/* CONTENIDO */}
      <div className="container mx-auto relative z-10 px-4">

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Badge superior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>

            <span className="text-[12px] md:text-[10px] font-semibold  text-blue-800 uppercase tracking-wide">
              Soporte TI
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[4rem] mt-9 md:mt-0 font-extrabold text-[#0f1d5e] leading-[1.1] mb-6 tracking-tight"
          >
            Tu tecnología funcionando. <br className="hidden md:block" />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F3A5F] to-[#2563EB]">
              Sin sorpresas, sin sobrecostos.
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
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >

            <a
              href="https://wa.me/5491135117785"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E47223] mt-5 md:mt-0 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-[0_10px_30px_rgba(228,114,35,0.3)] hover:shadow-[0_15px_40px_rgba(228,114,35,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Contactar ahora
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center bg-white text-[#1F3A5F] border-2 border-gray-200 px-6 py-3.5 rounded-xl font-bold text-base hover:border-[#1F3A5F] hover:bg-gray-50 transition-all duration-300"
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
    </section>
  );
};
export default HeroImage;