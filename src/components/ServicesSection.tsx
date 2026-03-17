import { motion } from "framer-motion";
import {
  Server,
  Mail,
  Globe,
  HardDrive,
  Zap,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Administración y monitoreo",
    description:
      "Gestión y control del estado de servidores. Monitoreo proactivo y respuesta ante incidencias.",
  },
  {
    icon: Mail,
    title: "Hosting y correo gestionado",
    description:
      "Configuración, mantenimiento y soporte integral para tu infraestructura web y correos corporativos.",
  },
  {
    icon: Globe,
    title: "Redes y conectividad",
    description:
      "Implementación de VPNs empresariales, firewalls y acceso remoto seguro para múltiples sedes.",
  },
  {
    icon: HardDrive,
    title: "Backups y recuperación",
    description:
      "Estrategias de copia de seguridad y restauración para evitar pérdida de datos crítica.",
  },
  {
    icon: Zap,
    title: "Automatización TI",
    description:
      "Optimización de procesos internos para ahorrar horas hombre y reducir el margen de error.",
  },
  {
    icon: Headphones,
    title: "Soporte e incidencias",
    description:
      "Servicio de atención directa y prioritaria para bloqueos operativos sin intermediarios lentos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-[#0A0F1A]">
      {/* Modern Background Textures */}
      {/* 1. Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      
      {/* 2. Top radiant glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(31,58,95,0.4)_0%,transparent_70%)] z-0 blur-2xl pointer-events-none" />

      {/* 3. Bottom corner accent glow */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[radial-gradient(circle,rgba(228,114,35,0.08)_0%,transparent_70%)] z-0 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold tracking-wider uppercase mb-3 block"
            style={{ color: "#E47223" }}
          >
            Qué ofrecemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Gestión integral de TI diseñada para brindar estabilidad y seguridad a tu empresa, 
            permitiéndote delegar la tecnología con total confianza.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] backdrop-blur-sm transition-all duration-500 ease-premium overflow-hidden"
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(228,114,35,0.05)_0%,transparent_100%)] transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(228,114,35,0.15)" }}
                >
                  <service.icon
                    className="h-6 w-6"
                    style={{ color: "#E47223" }}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative animated line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-premium"
                style={{ backgroundColor: "#E47223" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;