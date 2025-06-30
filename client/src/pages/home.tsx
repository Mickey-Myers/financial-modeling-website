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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FinModel Pro</h3>
            <p className="text-gray-400 mb-6">Professional Financial Modeling Consulting</p>
            <p className="text-sm text-gray-500">© 2024 FinModel Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
