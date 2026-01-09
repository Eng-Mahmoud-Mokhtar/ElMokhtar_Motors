import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import heroVideo from "./figma/6872469-uhd_3840_2160_25fps.mp4";

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: scroll to top if element not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Overlay (falls back to image if video missing) */}
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            src={heroVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Background video showing luxury cars"
            onError={() => setVideoFailed(true)}
            onLoadedData={() => setVideoFailed(false)}
          >
            متصفحك لا يدعم عرض الفيديو.
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1702593829629-c8b00aaad2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzdW5zZXR8ZW58MXx8fHwxNzY3ODkwNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Car at Sunset"
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              رحلتك تبدأ معنا
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-12 text-[#C9A24D]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            المختار موتورز – تجربة قيادة استثنائية
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-brand-solid hover:bg-brand-solid-dark text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-label="احجز سيارتك الآن"
            >
              <span className="font-semibold">احجز سيارتك الآن</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection("fleet")}
              className="group px-8 py-4 bg-transparent border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#0F0F0F] rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              aria-label="شاهد الأسطول"
            >
              <Play className="w-5 h-5" />
              <span className="font-semibold">شاهد الأسطول</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#C9A24D] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#C9A24D] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
