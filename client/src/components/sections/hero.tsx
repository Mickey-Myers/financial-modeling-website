import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <div 
            ref={ref}
            className={`fade-in ${isIntersecting ? "visible" : ""}`}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-semibold text-near-black leading-[1.1] mb-8 tracking-tight">
              Institutional Financial <span className="text-bronze italic">Models</span>
            </h1>
            <div className="mb-8">
              <p className="text-lg text-bronze font-medium tracking-wide uppercase mb-3">
                Built by bankers. Trusted by funds.
              </p>
              <p className="text-xl text-muted-text mb-6 leading-relaxed font-body">
                Institutional-grade financial models for PE/VC-backed companies, real estate developers, and family offices. The caliber of analysis you expect from Moelis or Centerview.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToContact}
                className="bg-oxford-blue text-white px-12 py-4 text-lg font-medium hover:bg-bronze transition-all duration-500 text-center uppercase tracking-wide"
              >
                Start a Conversation
              </button>
              <button 
                onClick={scrollToServices}
                className="border border-oxford-blue text-oxford-blue px-12 py-4 text-lg font-medium hover:bg-oxford-blue hover:text-white transition-all duration-500 text-center uppercase tracking-wide"
              >
                Our Approach
              </button>
            </div>
          </div>
          <div className={`fade-in ${isIntersecting ? "visible" : ""}`}>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
              alt="Professional business meeting" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
