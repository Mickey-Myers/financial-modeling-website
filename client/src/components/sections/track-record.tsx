import Counter from "@/components/ui/counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TrackRecordSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="track-record" className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-12 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Track Record</h2>
          <p className="text-xl text-blue-100">Our models don't just look professional - they deliver results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter target={150} />
            </div>
            <div className="text-blue-100 text-lg">Models Built</div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 mt-4">
              <Counter target={2} suffix="B+" />
            </div>
            <div className="text-blue-100 text-lg">Capital Raised</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter target={100} />
            </div>
            <div className="text-blue-100 text-lg">M&A Transactions Supported</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter target={13} />
            </div>
            <div className="text-blue-100 text-lg">Industries Served Nationwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
