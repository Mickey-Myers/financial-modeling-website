import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProcessSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: step1Ref, isIntersecting: step1Visible } = useIntersectionObserver();
  const { ref: step2Ref, isIntersecting: step2Visible } = useIntersectionObserver();
  const { ref: step3Ref, isIntersecting: step3Visible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-bronze/10 via-transparent to-oxford-blue/8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">Process Timeline</h2>
          <p className="text-xl text-champagne font-body">Simple, fast, effective</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div 
            ref={step1Ref}
            className={`text-center fade-in ${step1Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="serif-nums text-2xl font-semibold text-white drop-shadow-md">I</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-white mb-4 tracking-tight">Discovery Call</h3>
            <p className="text-bronze mb-3 font-medium uppercase tracking-wide text-sm">30 Minutes</p>
            <p className="text-champagne font-body leading-relaxed">Understand your goals and scope the project requirements.</p>
          </div>

          <div 
            ref={step2Ref}
            className={`text-center fade-in ${step2Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="serif-nums text-2xl font-semibold text-white drop-shadow-md">II</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-white mb-4 tracking-tight">Model Build</h3>
            <p className="text-bronze mb-3 font-medium uppercase tracking-wide text-sm">5-7 Days</p>
            <p className="text-champagne font-body leading-relaxed">We build, review, and revise your custom Excel model.</p>
          </div>

          <div 
            ref={step3Ref}
            className={`text-center fade-in ${step3Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="serif-nums text-2xl font-semibold text-white drop-shadow-md">III</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 tracking-tight">Delivery + Support</h3>
            <p className="text-bronze/80 mb-3 font-medium uppercase tracking-wide text-sm">Ongoing</p>
            <p className="text-muted-text font-body leading-relaxed">Final file, onboarding, and optional ongoing help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
