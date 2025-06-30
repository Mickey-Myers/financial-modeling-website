import Counter from "@/components/ui/counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TrackRecordSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="track-record" className="py-24 bg-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">Our Record</h2>
          <p className="text-xl text-champagne font-body">Institutional results speak for themselves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center border-r border-champagne/20 last:border-r-0">
            <div className="serif-nums text-5xl md:text-6xl font-semibold text-white mb-3">
              <Counter target={150} />
            </div>
            <div className="text-champagne text-lg font-medium tracking-wide uppercase">Models Built</div>
            <div className="serif-nums text-4xl md:text-5xl font-medium text-white mb-3 mt-6">
              <Counter target={2} suffix="B+" />
            </div>
            <div className="text-champagne text-lg font-medium tracking-wide uppercase">Capital Raised</div>
          </div>

          <div className="text-center border-r border-champagne/20 last:border-r-0">
            <div className="serif-nums text-5xl md:text-6xl font-semibold text-white mb-3">
              <Counter target={100} />
            </div>
            <div className="text-champagne text-lg font-medium tracking-wide uppercase">M&A Transactions</div>
          </div>

          <div className="text-center">
            <div className="serif-nums text-5xl md:text-6xl font-semibold text-white mb-3">
              <Counter target={13} />
            </div>
            <div className="text-champagne text-lg font-medium tracking-wide uppercase">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
