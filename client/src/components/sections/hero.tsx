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
    <section className="pt-32 pb-32 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 dark:from-ivory dark:via-background dark:to-light-accent overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/8 via-transparent to-bronze/12 dark:from-oxford-blue/5 dark:via-transparent dark:to-bronze/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[90vh] relative z-10">
          <div 
            ref={ref}
            className={`fade-in ${isIntersecting ? "visible" : ""}`}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-semibold text-slate-900 dark:text-near-black leading-tight mb-8 tracking-tight">
              Get a Financial Model <span className="text-bronze italic drop-shadow-sm">That Wins Deals</span>
            </h1>
            <div className="mb-10">
              <p className="text-xl text-slate-700 dark:text-muted-text mb-8 leading-relaxed font-body max-w-2xl">
                Custom-built Excel models for founders, investors, and developers who need clarity, speed, and results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-oxford-blue to-oxford-blue/90 text-white px-12 py-5 text-lg font-medium hover:from-bronze hover:to-bronze/90 transition-all duration-300 text-center shadow-2xl hover:shadow-bronze/20 hover:translate-y-[-4px] transform"
              >
                Book an Intro Call
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-oxford-blue/50 text-oxford-blue px-12 py-5 text-lg font-medium hover:bg-gradient-to-r hover:from-oxford-blue/8 hover:to-oxford-blue/12 transition-all duration-300 text-center shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 dark:border-oxford-blue/30 dark:bg-white/80 dark:hover:from-oxford-blue/5 dark:hover:to-oxford-blue/10"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className={`fade-in ${isIntersecting ? "visible" : ""}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-light-accent to-background p-10 shadow-2xl border border-white/50 backdrop-blur-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-oxford-blue/15 via-bronze/10 to-oxford-blue/5 flex items-center justify-center shadow-inner">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 mx-auto flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-oxford-blue/40 to-oxford-blue/20 w-3/4 mx-auto shadow-sm rounded-full"></div>
                      <div className="h-3 bg-gradient-to-r from-bronze/50 to-bronze/30 w-1/2 mx-auto shadow-sm rounded-full"></div>
                      <div className="h-3 bg-gradient-to-r from-oxford-blue/30 to-oxford-blue/10 w-2/3 mx-auto shadow-sm rounded-full"></div>
                    </div>
                    <p className="text-sm text-muted-text font-medium drop-shadow-sm">Financial Model Preview</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-bronze/20 to-bronze/5 -z-10 shadow-xl rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-oxford-blue/10 to-oxford-blue/5 -z-10 shadow-lg rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
