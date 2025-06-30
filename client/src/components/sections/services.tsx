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
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Our Approach</h2>
          <p className="text-xl text-muted-text max-w-4xl mx-auto leading-relaxed font-body">
            Institutional-grade analysis with the rigor and sophistication your stakeholders expect
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div 
            ref={card1Ref}
            className={`elegant-card p-10 fade-in ${card1Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 8h10v2H7v-2zm0-4h10v2H7V9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 leading-tight">Capital Markets Excellence</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Investment-grade models that meet institutional standards. Clear assumptions, defensible projections, and scenario analysis crafted for sophisticated stakeholders.
            </p>
          </div>

          <div 
            ref={card2Ref}
            className={`elegant-card p-10 fade-in ${card2Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 leading-tight">Due Diligence Precision</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Rigorous analytical frameworks for deal evaluation. From initial screening to final negotiations, we deliver the depth of analysis that drives confident investment decisions.
            </p>
          </div>

          <div 
            ref={card3Ref}
            className={`elegant-card p-10 fade-in ${card3Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M13 3l3.86 3.86H19c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8.86c0-.53.21-1.04.59-1.41L7.14 4h5.72L13 3zm0 2.5L11.5 7H5.5l-1.5 1.5V19h16V7h-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 leading-tight">Complex Restructuring</h3>
            <p className="text-muted-text leading-relaxed font-body">
              Sophisticated modeling for transformational situations. Merger analysis, restructuring scenarios, and valuation updates delivered with institutional precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
