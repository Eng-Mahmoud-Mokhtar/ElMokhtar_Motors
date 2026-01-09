import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "201234567890"; // WhatsApp number without + or spaces
  const message = "مرحباً، أريد الاستفسار عن خدمات تأجير السيارات";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      
      {/* Tooltip */}
      <div className="absolute left-full ml-4 bg-[#1C1C1C] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        تواصل معنا عبر واتساب
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#1C1C1C]"></div>
      </div>
    </motion.button>
  );
}
