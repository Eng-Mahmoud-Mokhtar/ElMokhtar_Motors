import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { CarFleet } from "./components/car-fleet";
import { WhyUs } from "./components/why-us";
import { Tours } from "./components/tours";
import { Testimonials } from "./components/testimonials";
import { Stats } from "./components/stats";
import { BookingForm } from "./components/booking-form";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/whatsapp-button";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white" dir="rtl">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <CarFleet />
        <WhyUs />
        <Tours />
        <Testimonials />
        <Stats />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
