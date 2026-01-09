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

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            // ensure mobile menu sits above the logo and other elements
            className="md:hidden pb-4 z-50 relative"
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
                className="flex items-center justify-center gap-2 bg-brand-solid hover:bg-brand-solid-dark text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">اتصل الآن</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
