import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";

export default function TrackRecordSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="track-record" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* DYNAMIC BACKGROUND SYSTEM (like hero) */}
      <div className="absolute inset-0">
        {/* Multi-layer dynamic gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
        <div 
          className="absolute inset-0 opacity-20 animate-gradient-shift"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163,134,88,0.15) 0%, transparent 50%), 
                         linear-gradient(45deg, rgba(21,37,69,0.1) 0%, transparent 60%), 
                         conic-gradient(from ${mousePosition.x * 2}deg, rgba(163,134,88,0.05), rgba(21,37,69,0.05), rgba(163,134,88,0.05))`
          }}
        ></div>
        
        {/* Reduced Particle System */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 40 + 20;
            const delay = Math.random() * 10;
            const type = i % 2;
            return (
              <div
                key={i}
                className={`absolute animate-gentle-float-${type}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: type === 0 
                    ? `radial-gradient(circle, rgba(163,134,88,0.6) 0%, rgba(163,134,88,0.05) 100%)`
                    : `radial-gradient(circle, rgba(21,37,69,0.6) 0%, rgba(21,37,69,0.05) 100%)`,
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  filter: `blur(${Math.random() * 0.5}px)`,
                  transform: `scale(${0.7 + Math.random() * 0.3})`,
                }}
              ></div>
            );
          })}
        </div>
        
        {/* Interactive Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(163, 134, 88, ${0.2 + mousePosition.x * 0.002}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 134, 88, ${0.2 + mousePosition.y * 0.002}) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">Credibility & Proof</h2>
          <p className="text-xl text-champagne font-body">Results that speak for themselves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">150+</div>
            <div className="text-lg font-display font-semibold text-bronze mb-2">Custom Models Built</div>
            <div className="text-sm text-gray-400 leading-snug">Built for companies from startup to $100M+ revenue</div>
          </div>

          <div className="text-center p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">$500M+</div>
            <div className="text-lg font-display font-semibold text-bronze mb-2">Capital Raised</div>
            <div className="text-sm text-gray-400 leading-snug">Raised by companies using our financial models</div>
          </div>

          <div className="text-center p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">15+</div>
            <div className="text-lg font-display font-semibold text-bronze mb-2">Industries Served</div>
            <div className="text-sm text-gray-400 leading-snug">From technology to real estate to manufacturing</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.2; transform: rotate(0deg) scale(1); }
          50% { opacity: 0.4; transform: rotate(90deg) scale(1.05); }
        }
        @keyframes gentle-float-0 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(-5px, -8px, 0) rotate(45deg) scale(1.05); }
          50% { transform: translate3d(-10px, -15px, 0) rotate(90deg) scale(1.1); }
          75% { transform: translate3d(-5px, -8px, 0) rotate(135deg) scale(1.05); }
        }
        @keyframes gentle-float-1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(6px, -9px, 0) rotate(-45deg) scale(0.95); }
          50% { transform: translate3d(12px, -18px, 0) rotate(-90deg) scale(0.9); }
          75% { transform: translate3d(6px, -9px, 0) rotate(-135deg) scale(0.95); }
        }
        
        .animate-gradient-shift { animation: gradient-shift 40s ease-in-out infinite; }
        .animate-gentle-float-0 { animation: gentle-float-0 30s ease-in-out infinite; }
        .animate-gentle-float-1 { animation: gentle-float-1 35s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
