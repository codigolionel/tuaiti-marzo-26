import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);

      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-sm border-b border-gray-200"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center h-16 md:h-20">

          {/* LOGO */}
          <a href="#home" className="flex items-center h-full">
            <img
              src="/logo-tuaiti-woodmark.svg"
              alt="TUAITI – Technology for Businesses"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* DESKTOP NAV (movido a la derecha) */}
          <ul className="hidden md:flex items-center gap-10 font-medium ml-auto mr-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[14px] pb-1 transition-colors duration-200
                  text-[#1F3A5F] hover:text-[#2563EB]
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-[#E47223]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* DERECHA: soporte + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className={`text-xs ${scrolled ? "text-[#2563EB]" : "text-[#93c5fd]"}`}>
                Soporte al cliente →
              </p>

              <a
                href="tel:+5491135117785"
                className={`text-sm font-semibold text-black`}
              >
                +54 9 11 3511-7785
              </a>
            </div>

            <a
              href="#contact"
              className="bg-[#E47223] hover:bg-[#c95f1a] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-200"
            >
              Contacto
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto transition-colors duration-300 text-[#1F3A5F]"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 z-40 md:hidden bg-black/70 backdrop-blur-xl"
          >
            <motion.div className="flex flex-col items-center justify-center h-full gap-10 text-center">
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-[#E47223] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                variants={itemVariants}
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 bg-[#E47223] hover:bg-[#c95f1a] text-white px-6 py-2.5 rounded-md font-medium transition-colors"
              >
                Contacto
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;