import { motion } from "motion/react";
import { useState } from "react";
import bmw219Img from "./figma/silver-sedan-with-red-lights-parked-port.jpg";
import jeepWranglerImg from "./figma/jeep-wrangler-sunset-adventure.jpg";
import fortunerImg from "./figma/Screenshot (214).png";
import landCruiserImg from "./figma/Screenshot (215).png";
import tucsonImg from "./figma/Screenshot (216).png";
import sportageImg from "./figma/Screenshot (217).png";
import c180Img from "./figma/Screenshot (218).png";
import e300Img from "./figma/Screenshot (219).png";

interface CarCardProps {
  name: string;
  model: string;
  price: string;
  image: string;
  localImage?: string;
  features: string[];
  category: string;
}

const cars: CarCardProps[] = [
  {
    name: "BMW 330I",
    model: "2019",
    price: "3500",
    image: bmw219Img,
    localImage: bmw219Img,
    features: ["Modified", "5 Seats", "Automatic"],
    category: "luxury"
  },
  {
    name: "Jeep Wrangler",
    model: "2015",
    price: "3000",
    image: jeepWranglerImg,
    localImage: jeepWranglerImg,
    features: ["Available 3 days", "5 Seats", "4x4 Drive"],
    category: "suv"
  },
  {
    name: "Toyota Fortuner",
    model: "2015",
    price: "4000",
    image: fortunerImg,
    localImage: fortunerImg,
    features: [],
    category: "suv"
  },
  {
    name: "Toyota Land Cruiser",
    model: "2024",
    price: "5000",
    image: landCruiserImg,
    localImage: landCruiserImg,
    features: [],
    category: "suv"
  },
  {
    name: "Hyundai Tucson",
    model: "2025",
    price: "3000",
    image: tucsonImg,
    localImage: tucsonImg,
    features: ["5 Seats", "Automatic", "Compact SUV"],
    category: "suv"
  },
  {
    name: "Kia Sportage",
    model: "2024",
    price: "3000",
    image: sportageImg,
    localImage: sportageImg,
    features: ["5 Seats", "Automatic", "SUV"],
    category: "suv"
  },
  {
    name: "Mercedes C180",
    model: "2019",
    price: "2500",
    image: c180Img,
    localImage: c180Img,
    features: ["5 Seats", "Automatic", "Luxury"],
    category: "luxury"
  },
  {
    name: "Mercedes E300",
    model: "2024",
    price: "3500",
    image: e300Img,
    localImage: e300Img,
    features: ["5 Seats", "Automatic", "Luxury"],
    category: "luxury"
  },
  
];

// No categories UI: always show all cars

function CarCard({ car }: { car: CarCardProps }) {
  const [hovered, setHovered] = useState(false);

  const whatsappMessage = `طلب حجز: ${car.name} - موديل ${car.model} - السعر ${car.price} EGP/Day`;

  // On mobile we try to include the user's location if available, otherwise just open WhatsApp with the car details.
  const handleWhatsApp = async () => {
    let locationPart = "\nالموقع: القاهرة، مصر - شارع الهرم، الجيزة"; // fallback

    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      try {
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          const timer = setTimeout(() => reject(new Error('timeout')), 3000);
          navigator.geolocation.getCurrentPosition((p) => { clearTimeout(timer); resolve(p); }, (err) => { clearTimeout(timer); reject(err); }, { enableHighAccuracy: false, timeout: 3000 });
        });
        const { latitude, longitude } = pos.coords;
        locationPart = `\nموقعي: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      } catch (e) {
        // ignore and use fallback
      }
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage + locationPart)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-[#1C1C1C] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C9A24D]/20"
      style={{ transformOrigin: 'center' }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.localImage || car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-[#C9A24D] text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-semibold">
          {car.model}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl mb-1 text-white truncate">
          {car.name}
        </h3>

        {/* Features removed from UI as requested */}

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl text-[#C9A24D] font-semibold">
              {car.price}
            </span>
            <span className="text-[#888] ml-2 text-sm">EGP / Day</span>
          </div>
        </div>

        <button
          onClick={() => { void handleWhatsApp(); }}
          aria-label={`WhatsApp booking for ${car.name}`}
          className={`w-full block bg-brand-solid hover:bg-brand-solid-dark text-white py-2 rounded-lg transition-all duration-200 text-center font-semibold`}
        >
          احجز الآن
        </button>
      </div>
    </motion.div>
  );
}

export function CarFleet() {
  // Always show all cars; no filtering UI
  const filteredCars = cars;

  return (
    <section className="py-20 bg-[#0F0F0F]" id="fleet">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
            أسطول السيارات
          </h2>
          <p className="text-[#888] text-lg">
            اختر سيارتك المثالية من أسطولنا الفاخر
          </p>
        </motion.div>

        {/* Categories removed — always showing all cars */}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>

      </div>
    </section>
  );
}
