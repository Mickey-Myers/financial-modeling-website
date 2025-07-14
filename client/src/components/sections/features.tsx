import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const features = [
  {
    number: "01",
    title: "Wall Street-Grade Models",
    description: "Built using investment banking standards and best practices"
  },
  {
    number: "02",
    title: "Bulletproof Excel Structure",
    description: "Clean structure with logical formulas that actually work"
  },
  {
    number: "03",
    title: "Investor-Ready Formatting",
    description: "Professional formatting that impresses lenders and VCs"
  },
  {
    number: "04",
    title: "Multiple Scenario Testing",
    description: "Test different outcomes and assumptions with confidence"
  },
  {
    number: "05",
    title: "Complete Documentation",
    description: "You'll know exactly how to use and update your model"
  },
  {
    number: "06",
    title: "Fast Delivery Guaranteed",
    description: "Professional models delivered fast when you need them"
  }
];

export default function FeaturesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: gridRef, isIntersecting: gridVisible } = useIntersectionObserver();
  const { ref: driverRef, isIntersecting: driverVisible } = useIntersectionObserver();

  return (
    <section id="features" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bronze/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">Why Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-xl text-bronze font-medium italic">
              How our financial models help our clients win
            </p>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-bronze via-bronze to-bronze/80 mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Feature cards */}
        <div 
          ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 fade-in ${gridVisible ? "visible" : ""}`}
        >
          {features.map((feature, index) => (
              <div key={index} className="relative p-6 md:p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-100">
                <div className="absolute -top-1 -left-1 md:-top-3 md:-left-3 w-8 h-8 md:w-10 md:h-10 bg-bronze rounded-full flex items-center justify-center text-slate-900 font-bold text-xs md:text-sm shadow-lg">
                  {feature.number}
                </div>
                <h4 className="text-base md:text-lg font-display font-semibold text-bronze mb-2 md:mb-3 mt-2 md:mt-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right side - Driver-based planning */}
          <div 
            ref={driverRef}
            className={`fade-in ${driverVisible ? "visible" : ""} lg:justify-self-center`}
          >
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 md:p-8 rounded-xl border border-slate-700/30 shadow-xl max-w-lg mx-auto">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-bronze mb-3 md:mb-4 text-center">Driver-based Planning</h3>
              <p className="text-xs md:text-sm text-white mb-4 md:mb-6 leading-relaxed">
                We approach financial models based on measurable drivers, not vanity assumptions. 
                Our goal is for you to understand which KPIs will drive your startup's revenue, make 
                assumptions based on real-world benchmarks and bring real-world data as soon as you have it.
              </p>
              
              {/* Driver flow diagram */}
              <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-slate-600/30 mb-4 md:mb-6">
                <svg viewBox="0 0 720 300" className="w-full h-48 md:h-auto">
                  {/* Paid Marketing */}
                  <rect x="40" y="60" width="130" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="105" y="90" textAnchor="middle" fill="#c1b398" fontSize="15" fontFamily="system-ui" fontWeight="500">Paid Marketing</text>
                  
                  {/* Organic Traffic */}
                  <rect x="40" y="190" width="130" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="105" y="220" textAnchor="middle" fill="#c1b398" fontSize="15" fontFamily="system-ui" fontWeight="500">Organic Traffic</text>
                  
                  {/* Arrows converging to Sign ups */}
                  <path d="M 180 85 L 220 85 L 220 135 L 250 135" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <path d="M 180 215 L 220 215 L 220 165 L 250 165" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <polygon points="245,132 250,135 245,138" fill="#94a3b8"/>
                  <polygon points="245,162 250,165 245,168" fill="#94a3b8"/>
                  
                  {/* Sign ups */}
                  <rect x="260" y="140" width="110" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="315" y="170" textAnchor="middle" fill="#c1b398" fontSize="15" fontFamily="system-ui" fontWeight="500">Sign ups</text>
                  
                  {/* Arrow to Monthly active users */}
                  <path d="M 380 165 L 420 165" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <polygon points="415,162 420,165 415,168" fill="#94a3b8"/>
                  
                  {/* Monthly active users */}
                  <rect x="430" y="140" width="110" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="485" y="160" textAnchor="middle" fill="#c1b398" fontSize="14" fontFamily="system-ui" fontWeight="500">Monthly active</text>
                  <text x="485" y="177" textAnchor="middle" fill="#c1b398" fontSize="14" fontFamily="system-ui" fontWeight="500">users</text>
                  
                  {/* Arrow branching to Subscribers and Ad revenue */}
                  <path d="M 550 165 L 570 165" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <path d="M 570 165 L 570 125 L 590 125" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <path d="M 570 165 L 570 205 L 590 205" fill="none" stroke="#94a3b8" strokeWidth="2"/>
                  <polygon points="585,122 590,125 585,128" fill="#94a3b8"/>
                  <polygon points="585,202 590,205 585,208" fill="#94a3b8"/>
                  
                  {/* Subscribers */}
                  <rect x="600" y="100" width="110" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="655" y="130" textAnchor="middle" fill="#c1b398" fontSize="15" fontFamily="system-ui" fontWeight="500">Subscribers</text>
                  
                  {/* Ad revenue */}
                  <rect x="600" y="180" width="110" height="50" rx="8" fill="none" stroke="#a3865a" strokeWidth="2"/>
                  <text x="655" y="210" textAnchor="middle" fill="#c1b398" fontSize="15" fontFamily="system-ui" fontWeight="500">Ad revenue</text>
                </svg>
              </div>

              <p className="text-bronze text-xs italic">
                This concept can be applied across different industries - from technology and SaaS to manufacturing, 
                real estate, and professional services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}