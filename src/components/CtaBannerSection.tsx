import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";

// You can keep using publish.webp as an underlying texture, 
// or remove it completely. I'll use it as a subtle overlay.
const CtaBannerSection = () => {
  const springConfig: any = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springConfig}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl"
        >
          {/* Main Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/publish.webp')" }}
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#0f1d5e]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 py-20 md:py-28 flex flex-col items-center text-center">

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ...springConfig, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
            >
              <Headphones className="w-4 h-4 text-[#E47223]" />
              <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                Soporte de Nivel Empresarial
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-[1.15] max-w-4xl mb-8 tracking-tight"
            >
              Servicio orientado a empresas que buscan delegar la gestión IT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#E47223]">
                por completo
              </span>{" "}
              y valoran un soporte confiable y presente.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-lg md:text-xl mb-10 max-w-2xl font-medium"
            >
              No dejes que los problemas técnicos frenen el crecimiento de tu organización.
              Da el siguiente paso hacia la tranquilidad operativa.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E47223] text-white px-5 py-3 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
              >
                Hablar con un experto
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+5491135117785"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white px-5 py-3 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
              >
                Llamar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;