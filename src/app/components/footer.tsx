import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "./figma/freepik-gradient-professional-autofix-mechanic-logo-202601082314247GPe-removebg-preview.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#C9A24D]/20">
      <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl mb-4 text-[#C9A24D]" style={{ fontFamily: 'Playfair Display, serif' }}>
              المختار موتورز
            </h3>
            <p className="text-[#888] mb-4 leading-relaxed">
              شركة رائدة في تأجير السيارات السياحية وتنظيم الرحلات في مصر. نقدم لك تجربة قيادة استثنائية مع أفضل الخدمات.
            </p>
          </div>

          {/* Quick Links: right-aligned on mobile, centered on md+ */}
          <div className="flex flex-col items-end md:items-center justify-self-center">
            <h4 className="text-xl mb-4 text-white">روابط سريعة</h4>
            <ul className="space-y-2 text-right w-full max-w-xs md:mx-auto">
              <li>
                <a href="#fleet" className="text-[#888] hover:text-[#C9A24D] transition-colors">
                  أسطول السيارات
                </a>
              </li>
              <li>
                <a href="#tours" className="text-[#888] hover:text-[#C9A24D] transition-colors">
                  الرحلات السياحية
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#888] hover:text-[#C9A24D] transition-colors">
                  احجز الآن
                </a>
              </li>
              <li>
                <a href="#" className="text-[#888] hover:text-[#C9A24D] transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-[#888] hover:text-[#C9A24D] transition-colors">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4 text-white">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#888]">
                <Phone className="w-5 h-5 text-[#C9A24D]" />
                <a href="tel:+201080519199" className="hover:text-[#C9A24D] transition-colors">
                  01080519199
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#888]">
                <Mail className="w-5 h-5 text-[#C9A24D]" />
                <a href="mailto:mahmoudmokhtar2001@gmail.com" className="hover:text-[#C9A24D] transition-colors">
                  mahmoudmokhtar2001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#888]">
                <MapPin className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-1" />
                <span>القاهرة، مصر - شارع الهرم، الجيزة</span>
              </li>
            </ul>
          </div>

          {/* Removed social media and payment blocks as requested */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A24D]/20 pt-8 text-right space-y-2 md:text-center">
          <p className="text-[#888]">
            © {currentYear} المختار موتورز. جميع الحقوق محفوظة.
          </p>
          <p className="text-[#888] text-sm mt-2">Developed by Engineer Mahmoud Mokhtar</p>
        </div>
      </div>
    </footer>
  );
}
