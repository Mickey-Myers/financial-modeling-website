import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function IndustriesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: companiesRef, isIntersecting: companiesVisible } = useIntersectionObserver();
  const { ref: investorsRef, isIntersecting: investorsVisible } = useIntersectionObserver();
  const { ref: developersRef, isIntersecting: developersVisible } = useIntersectionObserver();
  const { ref: industriesRef, isIntersecting: industriesVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Client Ecosystem</h2>
          <p className="text-xl text-muted-text font-body">Trusted by institutional investors and sophisticated enterprises</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          <div 
            ref={companiesRef}
            className={`text-left border-l-2 border-bronze/20 pl-6 fade-in ${companiesVisible ? "visible" : ""}`}
          >
            <h3 className="text-xs font-medium text-bronze mb-6 uppercase tracking-wider">Portfolio Companies</h3>
            <ul className="space-y-4 text-muted-text font-body leading-relaxed">
              <li>• VC-Backed Enterprises</li>
              <li>• PE Portfolio Companies</li>
              <li>• Public Companies</li>
              <li>• Private Holdings</li>
            </ul>
          </div>

          <div 
            ref={investorsRef}
            className={`text-left border-l-2 border-bronze/20 pl-6 fade-in ${investorsVisible ? "visible" : ""}`}
          >
            <h3 className="text-xs font-medium text-bronze mb-6 uppercase tracking-wider">Capital Partners</h3>
            <ul className="space-y-4 text-muted-text font-body leading-relaxed">
              <li>• Private Equity Funds</li>
              <li>• Family Offices</li>
              <li>• Credit Funds</li>
            </ul>
          </div>

          <div 
            ref={developersRef}
            className={`text-left border-l-2 border-bronze/20 pl-6 fade-in ${developersVisible ? "visible" : ""}`}
          >
            <h3 className="text-xs font-medium text-bronze mb-6 uppercase tracking-wider">Development</h3>
            <ul className="space-y-4 text-muted-text font-body leading-relaxed">
              <li>• Real Estate</li>
              <li>• Infrastructure</li>
              <li>• Energy Projects</li>
            </ul>
          </div>

          <div 
            ref={industriesRef}
            className={`text-left border-l-2 border-bronze/20 pl-6 fade-in ${industriesVisible ? "visible" : ""}`}
          >
            <h3 className="text-xs font-medium text-bronze mb-6 uppercase tracking-wider">Sectors</h3>
            <ul className="space-y-4 text-muted-text font-body leading-relaxed">
              <li>• Healthcare & Life Sciences</li>
              <li>• Technology</li>
              <li>• Consumer & Retail</li>
              <li>• Business Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
