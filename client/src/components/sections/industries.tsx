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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div 
            ref={companiesRef}
            className={`text-left fade-in ${companiesVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-medium text-bronze mb-6 uppercase tracking-wide">Portfolio Companies</h3>
            <ul className="space-y-3 text-muted-text font-body">
              <li>VC-Backed Enterprises</li>
              <li>PE Portfolio Companies</li>
              <li>Public Companies</li>
              <li>Private Holdings</li>
            </ul>
          </div>

          <div 
            ref={investorsRef}
            className={`text-left fade-in ${investorsVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-medium text-bronze mb-6 uppercase tracking-wide">Capital Partners</h3>
            <ul className="space-y-3 text-muted-text font-body">
              <li>Private Equity Funds</li>
              <li>Family Offices</li>
              <li>Credit Funds</li>
            </ul>
          </div>

          <div 
            ref={developersRef}
            className={`text-left fade-in ${developersVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-medium text-bronze mb-6 uppercase tracking-wide">Development</h3>
            <ul className="space-y-3 text-muted-text font-body">
              <li>Real Estate</li>
              <li>Infrastructure</li>
              <li>Energy Projects</li>
            </ul>
          </div>

          <div 
            ref={industriesRef}
            className={`text-left fade-in ${industriesVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-medium text-bronze mb-6 uppercase tracking-wide">Sectors</h3>
            <ul className="space-y-3 text-muted-text font-body">
              <li>Healthcare & Life Sciences</li>
              <li>Technology</li>
              <li>Consumer & Retail</li>
              <li>Business Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
