import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import TrackRecordSection from "@/components/sections/track-record";
import FeaturesSection from "@/components/sections/features";
import ProcessSection from "@/components/sections/process";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TrackRecordSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-display font-medium mb-4 tracking-tight">Financial Modeling Partners</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
              <a href="#services" className="text-champagne hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-champagne hover:text-white transition-colors">Contact</a>
            </div>
            <div className="border-t border-champagne/20 pt-6">
              <p className="text-sm text-champagne/70">© 2025 Financial Modeling Partners. Terms • Privacy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
