import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useState } from "react";

export default function ProcessSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: timelineRef, isIntersecting: timelineVisible } = useIntersectionObserver();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start by understanding your business goals and gathering requirements for your financial model through our discovery process."
    },
    {
      number: "02", 
      title: "Detailed Planning Call",
      description: "We have a consultation call to ask additional questions and finalize the financial model design and scope."
    },
    {
      number: "03",
      title: "Model Development", 
      description: "We provide an initial draft of your integrated financial model with comprehensive projections and analysis."
    },
    {
      number: "04",
      title: "Review & Refinement",
      description: "We refine the model based on your feedback and ensure it meets all your specific requirements."
    },
    {
      number: "05",
      title: "Final Delivery",
      description: "The model is finalized and provided as an Excel file that you can easily update and edit as your business grows."
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* REFINED PROFESSIONAL BACKGROUND SYSTEM */}
      <div className="absolute inset-0">
        {/* Multi-layer dynamic gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
        <div 
          className="absolute inset-0 opacity-20 animate-gradient-shift"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163,134,90,0.15) 0%, transparent 50%), 
                         linear-gradient(45deg, rgba(21,37,69,0.1) 0%, transparent 60%), 
                         conic-gradient(from ${mousePosition.x * 2}deg, rgba(163,134,90,0.05), rgba(21,37,69,0.05), rgba(163,134,90,0.05))`
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
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1400 900">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="chartFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(163, 134, 90)', stopOpacity: 0.6 }}>
                  <animate attributeName="stop-opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" style={{ stopColor: 'rgb(163, 134, 90)', stopOpacity: 0.1 }} />
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
            
            {/* Reduced data visualization points */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`data-${i}`}>
                <circle 
                  r="2" 
                  fill={i % 2 === 0 ? "rgb(163, 134, 90)" : "rgb(21, 37, 69)"} 
                  opacity="0.5"
                  filter="url(#glow)">
                  <animate attributeName="r" values="1;4;1" dur={`${4 + i * 0.3}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${5 + i * 0.4}s`} repeatCount="indefinite"/>
                  <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values={`${150 + i * 80},${450 + Math.sin(i) * 30};${150 + i * 80},${300 + Math.cos(i) * 50};${150 + i * 80},${450 + Math.sin(i) * 30}`}
                    dur={`${8 + i * 0.5}s`} 
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
                  stroke="rgb(163, 134, 90)" 
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
        
        {/* Reduced Particle System */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 4 + 1;
            const duration = Math.random() * 40 + 20;
            const delay = Math.random() * 10;
            const type = i % 3;
            return (
              <div
                key={i}
                className={`absolute animate-gentle-float-${type}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: type === 0 
                    ? `radial-gradient(circle, rgba(163,134,90,0.6) 0%, rgba(163,134,90,0.05) 100%)`
                    : type === 1
                    ? `radial-gradient(circle, rgba(21,37,69,0.6) 0%, rgba(21,37,69,0.05) 100%)`
                    : `linear-gradient(45deg, rgba(163,134,90,0.4), rgba(21,37,69,0.4))`,
                  borderRadius: type === 2 ? '0%' : '50%',
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
        
        {/* Subtle Liquid Blobs */}
        <div className="absolute inset-0 opacity-4">
          <div 
            className="absolute w-[400px] h-[400px] animate-gentle-blob-1 filter blur-3xl"
            style={{
              background: `conic-gradient(from ${mousePosition.x}deg, rgba(163,134,90,0.2), rgba(21,37,69,0.15), rgba(163,134,90,0.2))`,
              top: '15%',
              right: '15%',
              transform: `translate3d(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px, 0)`
            }}
          ></div>
          <div 
            className="absolute w-[350px] h-[350px] animate-gentle-blob-2 filter blur-2xl"
            style={{
              background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(21,37,69,0.3) 0%, rgba(163,134,90,0.2) 50%, transparent 100%)`,
              bottom: '15%',
              left: '15%',
              transform: `translate3d(${(mousePosition.x - 50) * -0.08}px, ${(mousePosition.y - 50) * -0.08}px, 0)`
            }}
          ></div>
        </div>
        
        {/* Simplified Interactive Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(163, 134, 90, ${0.2 + mousePosition.x * 0.002}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 134, 90, ${0.2 + mousePosition.y * 0.002}) 1px, transparent 1px),
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
                borderColor: i % 2 === 0 ? 'rgba(163, 134, 90, 0.2)' : 'rgba(21, 37, 69, 0.2)',
                borderRadius: i % 2 === 0 ? '50%' : '0%',
                top: `${20 + (i * 20)}%`,
                left: `${10 + (i * 15)}%`,
                transform: `rotateZ(${i * 45}deg)`,
                opacity: 0.05 + (mousePosition.x + mousePosition.y) * 0.001,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-500 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Process</h2>
          <p className="text-lg text-champagne italic">Simple, fast, effective</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line between steps */}
          <div 
            className="absolute top-6 left-1/10 right-1/10 h-px hidden md:block"
            style={{
              background: 'linear-gradient(to right, rgba(163, 134, 90, 0.3), rgba(163, 134, 90, 0.6), rgba(163, 134, 90, 0.3))'
            }}
          ></div>
          
          {/* 5-column grid */}
          <div 
            ref={timelineRef}
            className={`grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10 transition-all duration-500 ${
              timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div 
                  className="w-24 h-3 rounded-sm mx-auto mb-6 shadow-lg bg-bronze"
                >
          </div>

                {/* Arrow connector - only show on desktop and not for last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1 left-full transform -translate-y-1/2 z-0" style={{width: '24px'}}>
                    <svg width="24" height="12" viewBox="0 0 24 12" className="text-bronze">
                      <path 
                        d="M0 6 L18 6 M15 3 L18 6 L15 9" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                
                <h3 className="text-lg font-display font-semibold mb-4 whitespace-nowrap text-bronze">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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
        @keyframes chart-flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
        
        .animate-gradient-shift { animation: gradient-shift 40s ease-in-out infinite; }
        .animate-gentle-float-0 { animation: gentle-float-0 30s ease-in-out infinite; }
        .animate-gentle-float-1 { animation: gentle-float-1 35s ease-in-out infinite; }
        .animate-gentle-float-2 { animation: gentle-float-2 28s ease-in-out infinite; }
        .animate-gentle-blob-1 { animation: gentle-blob-1 50s ease-in-out infinite; }
        .animate-gentle-blob-2 { animation: gentle-blob-2 55s ease-in-out infinite; }
        .animate-gentle-geometric-0 { animation: gentle-geometric-0 45s ease-in-out infinite; }
        .animate-gentle-geometric-1 { animation: gentle-geometric-1 48s ease-in-out infinite; }
        .animate-chart-flow { animation: chart-flow 8s linear infinite; }
      `}</style>
    </section>
  );
}
