import { FileText, Clock, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function EngagementModelsSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: model1Ref, isIntersecting: model1Visible } = useIntersectionObserver();
  const { ref: model2Ref, isIntersecting: model2Visible } = useIntersectionObserver();
  const { ref: model3Ref, isIntersecting: model3Visible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Engagement Models</h2>
          <p className="text-xl text-muted-text font-body">Flexible structures to support your institutional needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div 
            ref={model1Ref}
            className={`elegant-card p-10 text-center fade-in ${model1Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mx-auto mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <path d="M14 2v6h6"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 tracking-tight">Project-Based</h3>
            <p className="text-muted-text font-body leading-relaxed">Defined scope engagements with clear deliverables and institutional-quality documentation tailored to your transaction timeline.</p>
          </div>

          <div 
            ref={model2Ref}
            className={`elegant-card p-10 text-center fade-in ${model2Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mx-auto mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 tracking-tight">Embedded Advisory</h3>
            <p className="text-muted-text font-body leading-relaxed">Ongoing analytical support as an integrated extension of your investment or finance team with flexible capacity allocation.</p>
          </div>

          <div 
            ref={model3Ref}
            className={`elegant-card p-10 text-center fade-in ${model3Visible ? "visible" : ""}`}
          >
            <div className="w-8 h-8 text-bronze mx-auto mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M13 3l3.86 3.86H19c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8.86c0-.53.21-1.04.59-1.41L7.14 4h5.72L13 3z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-6 tracking-tight">Interim Leadership</h3>
            <p className="text-muted-text font-body leading-relaxed">Strategic financial modeling leadership during transitions, urgent situations, or capacity constraints requiring immediate expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
