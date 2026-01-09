import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "./figma/freepik-gradient-professional-autofix-mechanic-logo-202601082314247GPe-removebg-preview.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // While the mobile menu is open we ignore scroll events to avoid
      // changing header state (keeps header stable/transparent while menu is open)
      if (isOpen) return;
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body from scrolling while mobile menu is open to keep the UI stable
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الأسطول", href: "#fleet" },
    { name: "الرحلات", href: "#tours" },
    { name: "احجز الآن", href: "#contact" }
  ];

  // showDrawerContent delays rendering heavy drawer content until the backdrop
  // has had time to paint. This avoids the drawer rendering its contents before
  // the backdrop appears which can cause a visual lag on slower devices.
  const [showDrawerContent, setShowDrawerContent] = useState(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    if (isOpen) {
      setShowDrawerContent(false);
      // small delay so the backdrop paints first; tuned to 80ms
      t = setTimeout(() => setShowDrawerContent(true), 80);
    } else {
      setShowDrawerContent(false);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Keep header transparent while menu is open; only use scrolled state when menu closed
        isScrolled && !isOpen
          ? "bg-[#0F0F0F]/100 backdrop-blur-md shadow-lg"
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

          {/* Mobile Menu Button: keep visible above backdrop/drawer by increasing z-index */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 relative z-[9999]"
            aria-label={isOpen ? 'close menu' : 'open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu as right-side drawer */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 z-60"
          >
            {/* semi-opaque backdrop so the page is dimmed while menu is open */}
            <div
              // keep a transparent click-catcher so clicking outside closes the drawer,
              // but don't darken the whole screen — the drawer itself is the visible panel.
              className="absolute inset-0 bg-transparent z-50 transition-none"
              onClick={() => setIsOpen(false)}
            />

            {/* drawer panel: occupy ~1/4 of viewport width on small screens, include internal close button */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              // small delay so backdrop can paint first on slower devices, avoids drawer-before-backdrop flash
              transition={{ type: 'tween', duration: 0.18, delay: 0.04 }}
              className="absolute top-0 bottom-0 right-0 w-[30%] md:w-1/4 min-w-[220px] bg-[#0F0F0F]/100 p-6 shadow-2xl z-70"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            >
              {/* internal close removed - use main toggle button or backdrop to close */}
              <div className="flex flex-col gap-4">
                {showDrawerContent ? (
                  <>
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
                      className="block w-full bg-brand-solid hover:bg-brand-solid-dark text-white py-2 rounded-md text-center font-semibold text-sm transition-all duration-200"
                    >
                      اتصل الآن
                    </a>
                  </>
                ) : (
                  // lightweight skeleton placeholders while backdrop paints
                  <>
                    <div className="h-4 bg-[#0A0A0A]/60 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-[#0A0A0A]/60 rounded w-2/3 animate-pulse" />
                    <div className="h-4 bg-[#0A0A0A]/60 rounded w-1/2 animate-pulse" />
                    <div className="h-10 bg-[#0A0A0A]/60 rounded w-full mt-4 animate-pulse" />
                  </>
                )}
              </div>
            </motion.aside>
          </div>
        )}
      </div>
    </nav>
  );
}
