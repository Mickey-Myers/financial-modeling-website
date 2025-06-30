import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProcessSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: step1Ref, isIntersecting: step1Visible } = useIntersectionObserver();
  const { ref: step2Ref, isIntersecting: step2Visible } = useIntersectionObserver();
  const { ref: step3Ref, isIntersecting: step3Visible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-light-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Engagement Process</h2>
          <p className="text-xl text-muted-text font-body">Disciplined approach to institutional-quality deliverables</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div 
            ref={step1Ref}
            className={`text-center fade-in ${step1Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-oxford-blue flex items-center justify-center mx-auto mb-8">
              <span className="serif-nums text-2xl font-semibold text-white">I</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 tracking-tight">Strategic Discovery</h3>
            <p className="text-bronze mb-3 font-medium uppercase tracking-wide text-sm">30 Minutes</p>
            <p className="text-muted-text font-body leading-relaxed">Comprehensive scoping session to understand your analytical requirements, stakeholder expectations, and deliverable specifications.</p>
          </div>

          <div 
            ref={step2Ref}
            className={`text-center fade-in ${step2Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-oxford-blue flex items-center justify-center mx-auto mb-8">
              <span className="serif-nums text-2xl font-semibold text-white">II</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 tracking-tight">Model Development</h3>
            <p className="text-bronze mb-3 font-medium uppercase tracking-wide text-sm">5-7 Days</p>
            <p className="text-muted-text font-body leading-relaxed">Institutional-quality financial model delivered with rigorous documentation, sensitivity analysis, and scenario modeling capabilities.</p>
          </div>

          <div 
            ref={step3Ref}
            className={`text-center fade-in ${step3Visible ? "visible" : ""}`}
          >
            <div className="w-20 h-20 bg-oxford-blue flex items-center justify-center mx-auto mb-8">
              <span className="serif-nums text-2xl font-semibold text-white">III</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-4 tracking-tight">Knowledge Transfer</h3>
            <p className="text-bronze mb-3 font-medium uppercase tracking-wide text-sm">Ongoing Support</p>
            <p className="text-muted-text font-body leading-relaxed">Comprehensive model walkthrough, user training, and iterative refinements to ensure optimal utilization and stakeholder confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
