import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users } from "lucide-react";
import aboutImg from "@/assets/perfil1.webp";

const highlights = [
  { icon: ShieldCheck, label: "Más de 25 años de experiencia con pymes" },
  { icon: Clock, label: "Enfoque en la continuidad operativa" },
  { icon: Users, label: "Participación personal en cada proyecto" },
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-10 pb-24 md:pt-0 md:pb-32 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Alejandro Sanchez, fundador de Tuiati"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Elegant Modern Soft Glows */}
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full -z-10 blur-3xl opacity-30"
              style={{ backgroundColor: "#1F3A5F" }} />

            <div
              className="absolute -top-10 -left-10 w-48 h-48 rounded-full -z-10 blur-3xl opacity-20"
              style={{ backgroundColor: "#E47223" }}
            />

            {/* Founder badge */}
            <div
              className="absolute bottom-6 left-6 text-white px-4 py-3 rounded-xl shadow-lg"
              style={{ backgroundColor: "#1F3A5F" }}
            >
              <p className="text-xs font-medium uppercase tracking-wider opacity-75">
                Fundador
              </p>

              <p className="text-sm font-semibold">
                Alejandro Sanchez
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >

            <h2 className="section-title mb-6">
              Sobre{" "}
              <span style={{ color: "#1F3A5F" }}>
                Nosotros
              </span>
            </h2>

            <p className="text-[#505050] leading-relaxed mb-5">
              En <strong>Tuiati</strong>, brindamos{" "}
              <strong>soporte tecnológico gestionado para empresas</strong>.
              Acompañamos a cada cliente proporcionando herramientas para la
              toma de decisiones, ayudando a seleccionar la tecnología
              adecuada y asignar el presupuesto de forma eficiente a
              soluciones adaptadas a sus necesidades.
            </p>

            <p className="text-[#505050] leading-relaxed mb-8">
              Soy Alejandro Sanchez y cuento con{" "}
              <strong>25 años de experiencia trabajando con pymes</strong>
              {" "}que requieren soporte responsable y continuo.
              Nuestro enfoque está en mantener la continuidad operativa,
              resolver problemas con rapidez y comunicarnos de forma clara
              con cada cliente. Me involucro personalmente en cada proyecto
              para asegurar un trato cercano desde el primer contacto.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(31,58,95,0.08)" }}
                  >
                    <item.icon
                      className="h-5 w-5"
                      style={{ color: "#1F3A5F" }}
                    />
                  </div>

                  <span className="text-sm text-[#505050] font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <p
              className="text-sm font-semibold italic"
              style={{ color: "#1F3A5F" }}
            >
              — Alejandro Sanchez, Fundador de Tuiati.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;