import { motion } from "motion/react";
import { MapPin, Clock, ArrowLeft } from "lucide-react";

const tours = [
  {
    name: "رحلة الأهرامات والمتحف المصري",
    duration: "8 ساعات",
    image: "https://images.unsplash.com/photo-1678199765556-361c8de4c979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHB5cmFtaWRzJTIwdG91cmlzbXxlbnwxfHx8fDE3Njc4OTA1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "جولة سياحية كاملة لأهرامات الجيزة وأبو الهول والمتحف المصري"
  },
  {
    name: "رحلة البحر الأحمر",
    duration: "يومين",
    image: "https://images.unsplash.com/photo-1636885344961-b31b0c615e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzZWElMjBiZWFjaHxlbnwxfHx8fDE3Njc4OTA1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "استمتع بالشواطئ الخلابة والغوص في البحر الأحمر"
  },
  {
    name: "جولة القاهرة التاريخية",
    duration: "6 ساعات",
    image: "https://images.unsplash.com/photo-1699781895619-ecd9d1c56f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMGNpdHklMjB0b3VyfGVufDF8fHx8MTc2Nzg5MDU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "اكتشف معالم القاهرة التاريخية والأسواق الشعبية"
  },
  {
    name: "رحلات الصحراء",
    duration: "يوم كامل",
    image: "https://images.unsplash.com/photo-1643836491806-9d6e65ef7438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjByb2FkJTIwdHJhdmVsfGVufDF8fHx8MTc2Nzg5MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "مغامرة صحراوية مع سيارات الدفع الرباعي"
  }
];

const services = [
  "رحلات داخل المحافظات",
  "استقبال مطارات",
  "جولات VIP",
  "برامج سياحية خاصة",
  "رحلات شهر العسل",
  "رحلات عائلية"
];

export function Tours() {
  const waTourMessage = 'مرحبًا، أود طلب برنامج سياحي خاص. من فضلكم أرسلوا لي التفاصيل والأسعار.';
  const waTourHref = `https://wa.me/201017900067?text=${encodeURIComponent(waTourMessage)}`;
  return (
    <section className="py-20 bg-[#0F0F0F]" id="tours">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            الرحلات السياحية
          </h2>
          <p className="text-[#888] text-lg">اكتشف مصر معنا في رحلات منظمة ومريحة</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#1C1C1C] rounded-lg p-4 text-center hover:bg-[#C9A24D] hover:text-[#0F0F0F] transition-all duration-300 cursor-pointer group"
            >
              <p className="text-sm font-semibold">{service}</p>
            </motion.div>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-[#1C1C1C] hover:shadow-2xl hover:shadow-[#C9A24D]/20 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-[#C9A24D]" />
                    <span className="text-[#C9A24D]">{tour.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl mb-3 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {tour.name}
                  </h3>
                  
                  <p className="text-[#F5F5F5]/80 mb-4">
                    {tour.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-[#C9A24D] hover:text-brand transition-colors group/btn">
                    <span className="font-semibold">تفاصيل الرحلة</span>
                    <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={waTourHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 gradient-primary-to-brand text-[#0F0F0F] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#C9A24D]/50 transition-all duration-300 transform hover:scale-105"
            aria-label="اطلب برنامج سياحي خاص"
          >
            اطلب برنامج سياحي خاص
          </a>
        </motion.div>
      </div>
    </section>
  );
}
