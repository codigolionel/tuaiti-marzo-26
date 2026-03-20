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
          {/* Main Background with pure CSS gradient instead of relying on local publish.webp */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              background: "linear-gradient(135deg, #1A1C1D 0%, #1F3A5F 50%, #0f1d5e 100%)"
            }}
          />

          {/* Additional Overlays for depth */}
          <div className="absolute inset-0 bg-black/20" />

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
              <span className="text-sm md:text-sm font-semibold text-white uppercase tracking-wider">
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
              ¿Tu tecnología te da más problemas que soluciones?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#E47223]">
                podemos ayudarte.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-lg md:text-xl mb-10 max-w-2xl font-medium"
            >
              En 15 minutos te decimos qué mejorar y el precio. Sin vueltas.
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
                href="https://wa.me/5491135117785"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E47223] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-[0_10px_30px_rgba(228,114,35,0.3)] hover:shadow-[0_15px_40px_rgba(228,114,35,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Habla con un experto
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5491135117785"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:-translate-y-1 transition-all duration-300"
              >
                Llamar por WhatsApp
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