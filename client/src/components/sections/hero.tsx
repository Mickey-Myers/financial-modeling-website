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
            <div className="relative">
              <div className="bg-light-accent p-8 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-oxford-blue/10 to-bronze/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-oxford-blue/20 mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-oxford-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-oxford-blue/30 w-3/4 mx-auto"></div>
                      <div className="h-2 bg-bronze/40 w-1/2 mx-auto"></div>
                      <div className="h-2 bg-oxford-blue/20 w-2/3 mx-auto"></div>
                    </div>
                    <p className="text-sm text-muted-text font-medium">Financial Model Preview</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bronze/10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
