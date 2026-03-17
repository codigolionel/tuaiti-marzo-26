import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";
import expertiseImg from "@/assets/expertise-section.jpg"; // Keep existing import for now, or you can switch to another image if you have one.

const skills = [
  { label: "Tiempo de Actividad (Uptime)", value: 99.9 },
  { label: "Resolución en Primer Contacto", value: 95 },
  { label: "Satisfacción del Cliente", value: 98 },
];

const bulletPoints = [
  "Soporte 24/7",
  "Auditorias",
  "Migración",
  "Gestión Integral",
];

const ExpertiseSection = () => {
  // Spring animation settings for a premium feel
  const springConfig: any = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image / Visual Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springConfig}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Clean, modern image container */}
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(31,58,95,0.12)] border border-white/60 bg-white">
              <img
                src={expertiseImg}
                alt="Infraestructura Tecnológica Segura"
                className="w-full h-[350px] md:h-[500px] object-cover"
                onError={(e) => {
                  // Fallback in case expertise-section.jpg doesn't exist
                  e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80";
                }}
              />
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-3 md:p-3 rounded-2xl shadow-[0_15px_35px_rgba(31,58,95,0.1)] border border-gray-100 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-14 h-14 rounded-full bg-[#E47223]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#E47223]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Experiencia</p>
                <p className="text-xl font-bold text-[#1F3A5F]">+25 Años</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text & Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springConfig}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1F3A5F]/5 border border-[#1F3A5F]/10 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#E47223]"></span>
              <span className="text-xs font-bold text-[#1F3A5F] uppercase tracking-widest">
                Operatividad
              </span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1d5e] leading-tight mb-6 tracking-tight">
              Nuestro enfoque es{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F3A5F] to-[#2563EB]">
                estabilidad tecnológica
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Transformamos la complejidad técnica en operaciones fluidas.
              Nuestro enfoque garantiza que tu infraestructura tecnológica sea un motor de crecimiento.
            </p>

            {/* Ultra-thin elegant progress bars */}
            <div className="space-y-8 mb-12">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...springConfig, delay: 0.15 * i }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-bold text-[#1F3A5F]">
                      {skill.label}
                    </span>
                    <span className="text-lg font-black text-[#2563EB]">
                      {skill.value}%
                    </span>
                  </div>
                  {/* Container is very thin for modern look */}
                  <div className="w-full h-[3px] bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + 0.1 * i, ease: [0.22, 1, 0.36, 1] }} // smooth custom easing
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-[#E47223]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bullet Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bulletPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...springConfig, delay: 0.4 + (0.05 * i) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#E47223] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#1F3A5F]">{point}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
