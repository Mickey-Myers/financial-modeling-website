import { BarChart3, Search, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: card1Ref, isIntersecting: card1Visible } = useIntersectionObserver();
  const { ref: card2Ref, isIntersecting: card2Visible } = useIntersectionObserver();
  const { ref: card3Ref, isIntersecting: card3Visible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build the financial models that drive successful deals and confident decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={card1Ref}
            className={`bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 fade-in ${card1Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Investor-Ready Models That Get Funded</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional financial models that investors actually want to see. Clear assumptions, defensible projections, and scenario analysis that builds confidence in your deal.
            </p>
          </div>

          <div 
            ref={card2Ref}
            className={`bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 fade-in ${card2Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Due Diligence Models That Uncover Real Value</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom Excel models that help you evaluate deals with confidence. From initial screening to final negotiations, get the analysis you need to make smart investment decisions.
            </p>
          </div>

          <div 
            ref={card3Ref}
            className={`bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 fade-in ${card3Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Modeling When You Need It Most</h3>
            <p className="text-gray-600 leading-relaxed">
              Merger models, restructuring analysis, valuation updates - whatever financial challenge you're facing, we build the models that give you clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
