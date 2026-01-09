import { motion } from "motion/react";
import { Car, Shield, Sparkles, DollarSign, UserCheck, HeadphonesIcon, Calendar, Award } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "سيارات موديلات حديثة",
    description: "أحدث الموديلات من أفضل الماركات العالمية"
  },
  {
    icon: Shield,
    title: "صيانة دورية",
    description: "فحص شامل وصيانة منتظمة لضمان السلامة"
  },
  {
    icon: Sparkles,
    title: "نظافة وتعقيم يومي",
    description: "تنظيف وتعقيم كامل بعد كل استئجار"
  },
  {
    icon: DollarSign,
    title: "أسعار تنافسية",
    description: "أفضل الأسعار في السوق مع عروض خاصة"
  },
  {
    icon: UserCheck,
    title: "سائق محترف",
    description: "خدمة سائق محترف عند الطلب"
  },
  {
    icon: HeadphonesIcon,
    title: "دعم 24/7",
    description: "فريق دعم متاح على مدار الساعة"
  },
  {
    icon: Calendar,
    title: "تأجير مرن",
    description: "خيارات يومية، أسبوعية، وشهرية"
  },
  {
    icon: Award,
    title: "خبرة 10 سنوات",
    description: "أكثر من عقد من الخبرة في الخدمة"
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#1C1C1C] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#C9A24D] rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-solid rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              لماذا المختار موتورز?
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            نقدم لك تجربة استثنائية في تأجير السيارات مع خدمات متميزة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#1C1C1C] rounded-xl p-6 h-full border border-transparent hover:border-[#C9A24D]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A24D]/10">
                <div className="w-14 h-14 gradient-primary-to-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#0F0F0F]" />
                </div>
                
                <h3 className="text-xl mb-3 text-white group-hover:text-[#C9A24D] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-[#888] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
