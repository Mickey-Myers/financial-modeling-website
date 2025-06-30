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
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div 
            ref={ref}
            className={`fade-in ${isIntersecting ? "visible" : ""}`}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Excel Financial Models That <span className="navy-800">Actually Work</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Professional financial models that help companies raise capital, close deals, and make confident investment decisions. Built by former Investment Bankers & Private Equity / Hedge Fund professionals.
            </p>
            <p className="text-lg navy-800 font-semibold mb-8">
              Used by companies that have raised $2B+
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-navy-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-700 transition-all duration-300 text-center"
              >
                Get Your Model Built
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-navy-800 navy-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-800 hover:text-white transition-all duration-300 text-center"
              >
                Learn More
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
