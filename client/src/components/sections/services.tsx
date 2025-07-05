import { FileSpreadsheet, RefreshCw, Zap, Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: card1Ref, isIntersecting: card1Visible } = useIntersectionObserver();
  const { ref: card2Ref, isIntersecting: card2Visible } = useIntersectionObserver();
  const { ref: card3Ref, isIntersecting: card3Visible } = useIntersectionObserver();

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bronze/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">What We Do</h2>
          <p className="text-xl text-champagne max-w-3xl mx-auto leading-relaxed font-body">
            Three ways we build financial models for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            ref={card1Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:scale-105 transition-all duration-100 ease-out cursor-pointer ${card1Visible ? "visible" : ""}`}
          >
            <FileSpreadsheet className="w-8 h-8 text-bronze mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Custom Financial Models
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Built-from-scratch Excel models for fundraising, M&A, or business planning. Investor-ready models delivered in 1-2 weeks.
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">3-statement models (P&L, Balance Sheet, Cash Flow)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">DCF & valuation models</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">Scenario & sensitivity analysis</span>
              </div>
            </div>
          </div>

          <div
            ref={card2Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:scale-105 transition-all duration-100 ease-out cursor-pointer ${card2Visible ? "visible" : ""}`}
          >
            <RefreshCw className="w-8 h-8 text-bronze mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Model Updates & Maintenance
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Keep your models current with regular updates, new scenarios, and performance tracking as your business grows.
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">Monthly model updates</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">New scenario modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">Model optimization & fixes</span>
              </div>
            </div>
          </div>

          <div
            ref={card3Ref}
            className={`elegant-card p-8 lg:p-10 fade-in hover:scale-105 transition-all duration-100 ease-out cursor-pointer ${card3Visible ? "visible" : ""}`}
          >
            <Zap className="w-8 h-8 text-bronze mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Rush & Complex Models
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced Excel models for complex deals and tight deadlines. LBO models, consolidations, and same-week delivery when needed.
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">LBO & acquisition models</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">Multi-entity consolidation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-bronze flex-shrink-0" />
                <span className="text-sm text-gray-400">Rush delivery (3-5 days)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
