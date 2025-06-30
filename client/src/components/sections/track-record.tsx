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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="text-center px-8 border-r border-champagne/20 last:border-r-0">
            <div className="font-display serif-nums text-6xl lg:text-7xl font-semibold text-white mb-4">
              <Counter target={150} />
            </div>
            <div className="text-champagne text-sm font-medium tracking-wide uppercase">Models Built</div>
            <div className="text-champagne/60 text-xs mt-2">Institutional-grade deliverables</div>
          </div>

          <div className="text-center px-8 border-r border-champagne/20 last:border-r-0">
            <div className="font-display serif-nums text-6xl lg:text-7xl font-semibold text-white mb-4">
              <Counter target={2} suffix="B+" />
            </div>
            <div className="text-champagne text-sm font-medium tracking-wide uppercase">Capital Raised</div>
            <div className="text-champagne/60 text-xs mt-2">Transaction value supported</div>
          </div>

          <div className="text-center px-8">
            <div className="font-display serif-nums text-6xl lg:text-7xl font-semibold text-white mb-4">
              <Counter target={100} />
            </div>
            <div className="text-champagne text-sm font-medium tracking-wide uppercase">M&A Transactions</div>
            <div className="text-champagne/60 text-xs mt-2">Buy-side and sell-side advisory</div>
          </div>
        </div>
      </div>
    </section>
  );
}
