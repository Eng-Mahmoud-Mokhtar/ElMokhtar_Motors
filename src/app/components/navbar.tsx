import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "./figma/freepik-gradient-professional-autofix-mechanic-logo-202601082314247GPe-removebg-preview.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الأسطول", href: "#fleet" },
    { name: "الرحلات", href: "#tours" },
    { name: "احجز الآن", href: "#contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            // reduce logo size on mobile and lower z-index so mobile menu overlays it
            className="flex items-center z-20"
          >
            <img
              src={logoImg}
              alt="شعار المختار"
              className="w-16 h-16 md:w-32 md:h-32 mb-0 md:mb-0 md:mr-0"
            />
            <h1 className="text-lg md:text-2xl text-[#C9A24D] mr-2 md:mr-0">
              المختار موتورز
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 mr-auto">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-[#C9A24D] transition-colors font-medium"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:+201017900067"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white hover:text-[#C9A24D] transition-colors font-medium"
            >
              اتصل الآن
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu as right-side drawer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50"
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            {/* drawer panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="absolute top-0 bottom-0 right-0 w-72 bg-[#0F0F0F] p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-[#C9A24D] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="tel:+201017900067"
                  className="block w-full bg-brand-solid hover:bg-brand-solid-dark text-white py-3 rounded-lg text-center font-semibold transition-all duration-200"
                >
                  اتصل الآن
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
