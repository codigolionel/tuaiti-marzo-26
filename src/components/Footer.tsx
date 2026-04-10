import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1F3A5F 0%, #0f1e30 50%, #0a0f1a 100%)" }} className="text-white">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <a href="#home" className="inline-block mb-6">
              <img
                src="/logo-tuaiti-main-inverse.svg"
                alt="TUAITI – Technology for Businesses"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-md font-medium">
              Soporte tecnológico gestionado para empresas. Ayudamos a las empresas a mantener la continuidad operativa y a tomar las decisiones tecnológicas adecuadas.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-lg tracking-wide">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#home" },
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-5">
            <h4 className="font-semibold mb-6 text-white text-lg tracking-wide">Servicios</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Servidores siempre bajo control",
                "Tu correo y archivos, siempre disponibles",
                "Internet estable en toda tu oficina",
                "Tus datos protegidos ante cualquier imprevisto",
                "Menos tareas manuales, más productividad",
                "Soporte rápido cuando algo falla",
              ].map((service) => (
                <li key={service} className="text-sm font-medium text-white/60">
                  {service}
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="text-sm font-medium text-white/80 hover:text-white inline-flex items-center gap-1 transition-colors duration-300"
            >
              Ver todos los servicios <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Tuaiti | Tecnología para Empresas | Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/politica-de-privacidad"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
