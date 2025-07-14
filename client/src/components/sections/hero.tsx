import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import IsolatedButton from "@/components/ui/isolated-button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isButtonPresent, setIsButtonPresent] = useState(false);

  useEffect(() => {
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates using requestAnimationFrame
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        rafId = 0;
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* REFINED PROFESSIONAL BACKGROUND SYSTEM */}
        <div className="absolute inset-0">
        {/* Multi-layer dynamic gradients - balanced darkness */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
            <div
          className="absolute inset-0 opacity-20 animate-gradient-shift"
              style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163,134,88,0.15) 0%, transparent 50%), 
                         linear-gradient(45deg, rgba(21,37,69,0.1) 0%, transparent 60%), 
                         conic-gradient(from ${mousePosition.x * 2}deg, rgba(163,134,88,0.05), rgba(21,37,69,0.05), rgba(163,134,88,0.05))`
              }}
            ></div>

        {/* Gentle parallax layers */}
              <div
          className="absolute inset-0"
                style={{
            transform: `translate3d(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px, 0)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Simplified Financial Data Visualization */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-15" 
            viewBox="0 0 1400 900"
            style={{ animationPlayState: (isHoveringButton || isButtonPresent) ? 'paused' : 'running' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="chartFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(163, 134, 88)', stopOpacity: 0.6 }}>
                  <animate attributeName="stop-opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" style={{ stopColor: 'rgb(163, 134, 88)', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="chartFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(21, 37, 69)', stopOpacity: 0.5 }}>
                  <animate attributeName="stop-opacity" values="0.5;0.2;0.5" dur="8s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" style={{ stopColor: 'rgb(21, 37, 69)', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            
            {/* Fewer animated chart lines */}
            {Array.from({ length: 3 }).map((_, i) => (
              <g key={i}>
                <path 
                  d={`M${-100 + i * 70},${400 + i * 50} Q${400 + i * 150},${350 + i * 40} ${800 + i * 120},${380 + i * 30} T${1300 + i * 80},${360 + i * 20}`}
                  stroke={i % 2 === 0 ? "url(#chartFlow1)" : "url(#chartFlow2)"} 
                  strokeWidth={2 - i * 0.2} 
                  fill="none" 
                  filter="url(#glow)"
                  className="animate-chart-flow">
                  <animate attributeName="stroke-dasharray" 
                           values={`0,${2000 + i * 300};${800 + i * 100},${1200 + i * 200};0,${2000 + i * 300}`} 
                           dur={`${12 + i * 3}s`} 
                           repeatCount="indefinite"/>
                  <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values={`0,0;${5 + i * 2},${-2 - i};0,0`} 
                    dur={`${10 + i * 2}s`} 
                    repeatCount="indefinite"/>
                </path>
              </g>
            ))}
            
            {/* Optimized data visualization points */}
            {Array.from({ length: 5 }).map((_, i) => (
              <g key={`data-${i}`}>
                <circle 
                  r="2" 
                  fill={i % 2 === 0 ? "rgb(163, 134, 88)" : "rgb(21, 37, 69)"} 
                  opacity="0.4">
                  <animate attributeName="r" values="1;3;1" dur={`${6 + i * 0.5}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${8 + i * 0.6}s`} repeatCount="indefinite"/>
                  <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values={`${200 + i * 120},${400 + Math.sin(i) * 20};${200 + i * 120},${350 + Math.cos(i) * 30};${200 + i * 120},${400 + Math.sin(i) * 20}`}
                    dur={`${12 + i * 1}s`} 
                    repeatCount="indefinite"/>
                </circle>
              </g>
            ))}
            
            {/* Simplified financial data streams */}
            <g opacity="0.3">
              {Array.from({ length: 4 }).map((_, i) => (
                <line 
                  key={`stream-${i}`}
                  x1="0" 
                  y1={150 + i * 100} 
                  x2="1400" 
                  y2={170 + i * 100} 
                  stroke="rgb(163, 134, 88)" 
                  strokeWidth="0.5" 
                  opacity="0.4">
                  <animate attributeName="stroke-dasharray" 
                           values="0,40;20,20;0,40" 
                           dur={`${6 + i}s`} 
                           repeatCount="indefinite"/>
                  <animate attributeName="opacity" 
                           values="0.1;0.5;0.1" 
                           dur={`${4 + i * 0.5}s`} 
                           repeatCount="indefinite"/>
                </line>
              ))}
            </g>
          </svg>
        </div>

        {/* Optimized Particle System - PAUSED ON BUTTON HOVER */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 50 + 30; // Slower animations
            const delay = Math.random() * 15;
            const type = i % 2; // Only 2 types for better performance
            return (
              <div
                key={i}
                className={`absolute animate-gentle-float-${type}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: type === 0 
                    ? `rgba(163,134,88,0.4)`
                    : `rgba(21,37,69,0.4)`,
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  willChange: 'transform',
                  transform: `scale(${0.8 + Math.random() * 0.2})`,
                  animationPlayState: (isHoveringButton || isButtonPresent) ? 'paused' : 'running',
                }}
              ></div>
            );
          })}
        </div>

        {/* Subtle Liquid Blobs with professional colors */}
        <div className="absolute inset-0 opacity-4">
          <div 
            className="absolute w-[400px] h-[400px] animate-gentle-blob-1 filter blur-3xl"
            style={{ 
              background: `conic-gradient(from ${mousePosition.x}deg, rgba(163,134,88,0.2), rgba(21,37,69,0.15), rgba(163,134,88,0.2))`,
              top: '15%', 
              right: '15%',
              transform: `translate3d(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px, 0)`,
              animationPlayState: (isHoveringButton || isButtonPresent) ? 'paused' : 'running',
            }}
          ></div>
          <div 
            className="absolute w-[350px] h-[350px] animate-gentle-blob-2 filter blur-2xl"
            style={{ 
              background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(21,37,69,0.3) 0%, rgba(163,134,88,0.2) 50%, transparent 100%)`,
              bottom: '15%',
              left: '15%',
              transform: `translate3d(${(mousePosition.x - 50) * -0.08}px, ${(mousePosition.y - 50) * -0.08}px, 0)`,
              animationPlayState: (isHoveringButton || isButtonPresent) ? 'paused' : 'running',
            }}
          ></div>
          </div>
        
        {/* Simplified Interactive Grid */}
          <div 
          className="absolute inset-0 opacity-15"
            style={{ 
            backgroundImage: `
              linear-gradient(rgba(163, 134, 88, ${0.2 + mousePosition.x * 0.002}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 134, 88, ${0.2 + mousePosition.y * 0.002}) 1px, transparent 1px),
              linear-gradient(rgba(21, 37, 69, ${0.15 + mousePosition.y * 0.001}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(21, 37, 69, ${0.15 + mousePosition.x * 0.001}) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px, 120px 120px, 60px 60px, 60px 60px',
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`
          }}
        ></div>
        
        {/* Minimal geometric elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={`geo-${i}`}
              className={`absolute border animate-gentle-geometric-${i}`}
            style={{ 
                width: `${80 + i * 30}px`,
                height: `${80 + i * 30}px`,
                borderColor: i % 2 === 0 ? 'rgba(163, 134, 88, 0.2)' : 'rgba(21, 37, 69, 0.2)',
                borderRadius: i % 2 === 0 ? '50%' : '0%',
                top: `${20 + (i * 20)}%`,
                left: `${10 + (i * 15)}%`,
                transform: `rotateZ(${i * 45}deg)`,
                opacity: 0.05 + (mousePosition.x + mousePosition.y) * 0.001,
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163, 134, 88, 0.1) 0%, transparent 50%),
              linear-gradient(${mousePosition.y}deg, rgba(163, 134, 88, 0.05) 0%, transparent 50%, rgba(21, 37, 69, 0.05) 100%)
            `,
            backgroundSize: '600px 600px, 800px 800px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
      </div>
      
        <div 
          ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20 transition-all duration-500 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Headline Block - Centered */}
        <div className="text-center mb-8 md:mb-14">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
            Financial Models<br />
            <span className="text-bronze bg-gradient-to-r from-bronze via-yellow-400 to-bronze bg-clip-text text-transparent animate-gentle-shimmer">
              That Close Deals
              </span>
            </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up mb-6 md:mb-8" style={{animationDelay: '0.2s'}}>
            Investment-grade Excel models that get funding approved, impress management teams, and <span className="font-bold text-bronze">drive process execution</span>.
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-bronze max-w-5xl mx-auto leading-relaxed animate-fade-in-up italic font-medium" style={{animationDelay: '0.3s'}}>
            Handbuilt by former Investment Bankers, Private Equity Investors, and Startup Founders.
            </p>
          </div>

        {/* Credibility Tiles - Perfect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="text-center p-6 md:p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl animate-fade-in-up hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 md:mb-3">150+</div>
            <div className="text-base md:text-lg font-display font-semibold text-bronze mb-1 md:mb-2">Models Built</div>
            <div className="text-xs md:text-sm text-gray-400 leading-snug">For startups through $100M+ companies</div>
          </div>

          <div className="text-center p-6 md:p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl animate-fade-in-up hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg" style={{animationDelay: '0.6s'}}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 md:mb-3">$500M+</div>
            <div className="text-base md:text-lg font-display font-semibold text-bronze mb-1 md:mb-2">Capital Raised</div>
            <div className="text-xs md:text-sm text-gray-400 leading-snug">Raised using our financial models</div>
          </div>

          <div className="text-center p-6 md:p-10 rounded-xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl animate-fade-in-up hover:scale-105 transition-all duration-100 ease-out cursor-pointer shadow-lg" style={{animationDelay: '0.8s'}}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 md:mb-3">1-2</div>
            <div className="text-base md:text-lg font-display font-semibold text-bronze mb-1 md:mb-2">Week Delivery</div>
            <div className="text-xs md:text-sm text-gray-400 leading-snug">Professional models, fast turnaround</div>
                </div>
              </div>
              
        {/* Call to Action Button - REMOVED FROM HERO */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="text-center text-gray-400">
            {/* Button is now in bottom-right corner */}
          </div>
        </div>
      </div>
      
      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent opacity-60"></div>
      
      {/* COMPLETELY ISOLATED BUTTON */}
      <IsolatedButton 
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onButtonPresence={setIsButtonPresent}
      >
        Build Your Model Now
      </IsolatedButton>
      
      <style suppressHydrationWarning>{`
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
        @keyframes gentle-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33% { transform: translate3d(-4px, -6px, 0) rotate(30deg) scale(1.02); }
          66% { transform: translate3d(-8px, -12px, 0) rotate(60deg) scale(1.05); }
        }
        @keyframes gentle-blob-1 {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
            transform: rotate(0deg) scale(1); 
          }
          25% { 
            border-radius: 50% 50% 40% 60% / 55% 45% 65% 45%; 
            transform: rotate(45deg) scale(1.05); 
          }
          50% { 
            border-radius: 40% 60% 70% 30% / 50% 70% 30% 60%; 
            transform: rotate(90deg) scale(1.1); 
          }
          75% { 
            border-radius: 50% 50% 60% 40% / 65% 45% 55% 50%; 
            transform: rotate(135deg) scale(1.05); 
          }
        }
        @keyframes gentle-blob-2 {
          0%, 100% { 
            border-radius: 50% 60% 40% 80% / 70% 50% 60% 30%; 
            transform: rotate(0deg) scale(1); 
          }
          33% { 
            border-radius: 60% 50% 50% 70% / 60% 60% 50% 40%; 
            transform: rotate(-60deg) scale(1.1); 
          }
          66% { 
            border-radius: 70% 40% 60% 50% / 50% 70% 40% 60%; 
            transform: rotate(-120deg) scale(1.2); 
          }
        }
        @keyframes gentle-geometric-0 {
          0%, 100% { transform: rotateZ(0deg) scale(1); opacity: 0.05; }
          25% { transform: rotateZ(45deg) scale(1.05); opacity: 0.08; }
          50% { transform: rotateZ(90deg) scale(1.1); opacity: 0.1; }
          75% { transform: rotateZ(135deg) scale(1.05); opacity: 0.08; }
        }
        @keyframes gentle-geometric-1 {
          0%, 100% { transform: rotateZ(45deg) scale(1); opacity: 0.05; }
          50% { transform: rotateZ(135deg) scale(0.9); opacity: 0.1; }
        }
        @keyframes gentle-shimmer {
          0% { background-position: -200% 0; }
          50% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes chart-flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-shift { animation: gradient-shift 40s ease-in-out infinite; }
        .animate-gentle-float-0 { animation: gentle-float-0 30s ease-in-out infinite; }
        .animate-gentle-float-1 { animation: gentle-float-1 35s ease-in-out infinite; }
        .animate-gentle-float-2 { animation: gentle-float-2 28s ease-in-out infinite; }
        .animate-gentle-blob-1 { animation: gentle-blob-1 50s ease-in-out infinite; }
        .animate-gentle-blob-2 { animation: gentle-blob-2 55s ease-in-out infinite; }
        .animate-gentle-geometric-0 { animation: gentle-geometric-0 45s ease-in-out infinite; }
        .animate-gentle-geometric-1 { animation: gentle-geometric-1 48s ease-in-out infinite; }
        .animate-gentle-shimmer { animation: gentle-shimmer 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-chart-flow { animation: chart-flow 8s linear infinite; }
        
        .transform-gpu { transform: translate3d(0, 0, 0); }
      `}</style>
    </section>
  );
}
