import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import TrackRecordSection from "@/components/sections/track-record";
import IndustriesSection from "@/components/sections/industries";
import CaseStudiesSection from "@/components/sections/case-studies";
import TestimonialsSection from "@/components/sections/testimonials";
import TeamSection from "@/components/sections/team";
import ProcessSection from "@/components/sections/process";
import EngagementModelsSection from "@/components/sections/engagement-models";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TrackRecordSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <ProcessSection />
      <EngagementModelsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-near-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-display font-medium mb-4 tracking-tight">Financial Modeling Partners</h3>
            <p className="text-champagne mb-8 font-body">Institutional Financial Advisory</p>
            <div className="border-t border-champagne/20 pt-8">
              <p className="text-sm text-champagne/70 uppercase tracking-wide">© 2025 Financial Modeling Partners. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
