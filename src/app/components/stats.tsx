import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Users, MapPin, Calendar, Car } from "lucide-react";

interface StatItemProps {
  end: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

function StatItem({ end, label, icon: Icon, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center group"
    >
  <div className="gradient-primary-to-brand rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-10 h-10 text-[#0F0F0F]" />
      </div>
      
      <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
        {count.toLocaleString()}{suffix}
      </div>
      
      <div className="text-[#888] text-lg">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #C9A24D 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            إنجازاتنا بالأرقام
          </h2>
          <p className="text-[#888] text-lg">نفخر بثقة عملائنا وإنجازاتنا على مدار السنوات</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          <StatItem 
            end={1500}
            suffix="+"
            label="عملاء سعداء"
            icon={Users}
          />
          <StatItem 
            end={3000}
            suffix="+"
            label="رحلات"
            icon={MapPin}
          />
          <StatItem 
            end={10}
            label="سنوات خبرة"
            icon={Calendar}
          />
          <StatItem 
            end={50}
            suffix="+"
            label="سيارة"
            icon={Car}
          />
        </div>
      </div>
    </section>
  );
}
