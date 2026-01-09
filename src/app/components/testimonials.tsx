import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "أحمد محمود",
    rating: 5,
  comment: "خدمة ممتازة وسيارات نظيفة جداً. السائق كان محترف وودود. تجربة رائعة مع المختار موتورز",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "فاطمة علي",
    rating: 5,
    comment: "استأجرت سيارة لرحلة عائلية وكانت التجربة فوق الممتاز. أسعار معقولة وخدمة متميزة",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "محمد حسن",
    rating: 5,
    comment: "أفضل شركة تأجير سيارات تعاملت معها. السيارة كانت حديثة ونظيفة والخدمة سريعة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "سارة إبراهيم",
    rating: 5,
    comment: "خدمة VIP رائعة. السائق كان على مستوى عالي من الاحترافية. شكراً للوادي تورز",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "عمر خالد",
    rating: 5,
    comment: "استخدمت الخدمة عدة مرات ودائماً راضي. الأسعار تنافسية والسيارات ممتازة",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "نور أحمد",
    rating: 5,
    comment: "تجربة مميزة جداً. الفريق متعاون والسيارة كانت فخمة ومريحة. أنصح بالتعامل معهم",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1C1C1C] to-[#0F0F0F] relative overflow-hidden">
      {/* Decorative Quote */}
      <Quote className="absolute top-20 left-10 w-32 h-32 text-[#C9A24D] opacity-5" />
      <Quote className="absolute bottom-20 right-10 w-32 h-32 text-[#C9A24D] opacity-5 rotate-180" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            آراء عملائنا
          </h2>
          <p className="text-[#888] text-lg">ماذا يقول عملاؤنا عن خدماتنا</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1C1C1C] rounded-xl p-6 border border-[#C9A24D]/20 hover:border-[#C9A24D]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A24D]/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A24D]"
                />
                <div>
                  <h4 className="text-lg text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-[#888] leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-[#C9A24D] w-8" 
                  : "bg-[#888] hover:bg-[#C9A24D]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
