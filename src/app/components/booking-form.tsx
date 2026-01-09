import { motion } from "motion/react";
import { Phone, MapPin, Send, PhoneCall } from "lucide-react";
import { useState } from "react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    pickupDate: "",
    returnDate: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert("شكراً لتواصلك معنا! سنتصل بك قريباً");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#1C1C1C]" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            احجز الآن
          </h2>
          <p className="text-[#888] text-lg">تواصل معنا وابدأ رحلتك المميزة</p>
        </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="gradient-primary-to-brand rounded-2xl p-8 h-full flex flex-col justify-between">
              <h3 className="text-3xl mb-6 text-[#0F0F0F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {/* Responsible block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F0F0F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-[#0F0F0F] font-semibold mb-1">رقم المسئول</p>
                    <a href="tel:+201017900067" className="text-[#0F0F0F]/80 hover:text-[#0F0F0F] transition-colors direction-ltr block text-lg font-medium">
                      01017900067
                    </a>
                  </div>
                </div>

                {/* Booking block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F0F0F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-[#C9A24D]" />
                  </div>
                  <div>
                    <p className="text-[#0F0F0F] font-semibold mb-1">رقم الحجز</p>
                    <a href="tel:+201080519199" className="text-[#0F0F0F]/80 hover:text-[#0F0F0F] transition-colors direction-ltr block text-lg font-medium">
                      01080519199
                    </a>

                    
                  </div>
                </div>
              </div>

              {/* working hours and tourist program button */}
              <div className="mt-8 pt-6 border-t border-[#0F0F0F]/20">
                <div className="mt-6">
                  <p className="text-[#0F0F0F] font-semibold mb-3">ساعات العمل</p>
                  <p className="text-[#0F0F0F]/80">
                    السبت - الخميس: 8:00 ص - 10:00 م<br />
                    الجمعة: 10:00 ص - 8:00 م
                  </p>
                </div>

                {/* Tourist program request button removed as requested */}
              </div>
            </div>
          </motion.div>

          {/* Large Map replacing Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1C1C1C] rounded-2xl border border-[#C9A24D]/20 overflow-hidden min-h-[320px]">
              <iframe
                title="El Wady Tours - Large Map"
                src="https://www.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D9%87%D8%B1%D9%85%2C%20%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9&output=embed"
                className="w-full h-full min-h-[320px]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
