import { BarChart3, Search, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: card1Ref, isIntersecting: card1Visible } = useIntersectionObserver();
  const { ref: card2Ref, isIntersecting: card2Visible } = useIntersectionObserver();
  const { ref: card3Ref, isIntersecting: card3Visible } = useIntersectionObserver();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">What We Do</h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto leading-relaxed font-body">
            Three ways we help you build financial models that get results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div 
            ref={card1Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:translate-y-[-2px] transition-transform duration-300 ${card1Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8 stroke-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 8h10v2H7v-2zm0-4h10v2H7V9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 leading-tight">Project-Based Builds</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Fully custom Excel models for fundraising, M&A, or internal planning.
            </p>
          </div>

          <div 
            ref={card2Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:translate-y-[-2px] transition-transform duration-300 ${card2Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8 stroke-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 leading-tight">Ongoing Support</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Retainers for scenario testing, board prep, and rolling updates.
            </p>
          </div>

          <div 
            ref={card3Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:translate-y-[-2px] transition-transform duration-300 ${card3Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8 stroke-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 leading-tight">Interim Partner</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Embedded modeling & strategy help during transitions (e.g., new CFO).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
