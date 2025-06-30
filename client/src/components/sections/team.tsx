import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TeamSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: member1Ref, isIntersecting: member1Visible } = useIntersectionObserver();
  const { ref: member2Ref, isIntersecting: member2Visible } = useIntersectionObserver();

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Leadership</h2>
          <p className="text-xl text-muted-text font-body">Former investment banking and private equity professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div 
            ref={member1Ref}
            className={`elegant-card p-10 text-center fade-in ${member1Visible ? "visible" : ""}`}
          >
            <div className="w-24 h-24 bg-oxford-blue/10 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-2xl font-display font-medium text-oxford-blue">MP</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-3 tracking-tight">Managing Partner</h3>
            <p className="text-bronze mb-6 font-medium uppercase tracking-wide text-sm">Investment Banking & Private Equity</p>
            <p className="text-muted-text leading-relaxed font-body">
              Former investment banker and PE professional with extensive experience in complex merger models, LBO analysis, and institutional-grade financial modeling across 100+ client engagements.
            </p>
          </div>

          <div 
            ref={member2Ref}
            className={`elegant-card p-10 text-center fade-in ${member2Visible ? "visible" : ""}`}
          >
            <div className="w-24 h-24 bg-oxford-blue/10 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-2xl font-display font-medium text-oxford-blue">MP</span>
            </div>
            <h3 className="text-2xl font-display font-medium text-near-black mb-3 tracking-tight">Managing Partner</h3>
            <p className="text-bronze mb-6 font-medium uppercase tracking-wide text-sm">Strategic Finance & CFO Advisory</p>
            <p className="text-muted-text leading-relaxed font-body">
              Former strategic financial consultant and CFO advisor specializing in growth modeling, capital raising strategies, and sophisticated financial analysis for emerging and established enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
