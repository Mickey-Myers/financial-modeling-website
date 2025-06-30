import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function IndustriesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: companiesRef, isIntersecting: companiesVisible } = useIntersectionObserver();
  const { ref: investorsRef, isIntersecting: investorsVisible } = useIntersectionObserver();
  const { ref: developersRef, isIntersecting: developersVisible } = useIntersectionObserver();
  const { ref: industriesRef, isIntersecting: industriesVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries & Clients</h2>
          <p className="text-xl text-gray-600">We serve diverse clients across multiple industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div 
            ref={companiesRef}
            className={`text-center fade-in ${companiesVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-semibold navy-800 mb-4">Companies</h3>
            <ul className="space-y-2 text-gray-600">
              <li>VC-backed</li>
              <li>PE-backed</li>
              <li>Public</li>
              <li>Private</li>
            </ul>
          </div>

          <div 
            ref={investorsRef}
            className={`text-center fade-in ${investorsVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-semibold navy-800 mb-4">Investors</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Private Equity</li>
              <li>Family Office</li>
              <li>Private Credit</li>
            </ul>
          </div>

          <div 
            ref={developersRef}
            className={`text-center fade-in ${developersVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-semibold navy-800 mb-4">Developers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Real Estate</li>
              <li>Infrastructure</li>
              <li>Energy</li>
            </ul>
          </div>

          <div 
            ref={industriesRef}
            className={`text-center fade-in ${industriesVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-semibold navy-800 mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Healthcare</li>
              <li>Technology</li>
              <li>Consumer</li>
              <li>Business Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
