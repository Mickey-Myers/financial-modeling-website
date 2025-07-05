import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const testimonials = [
  {
    quote: "Instrumental partner in helping us successfully raise $22M. The sophistication and rigor of their models impressed every stakeholder.",
    author: "Chief Executive Officer",
    firm: "High-Growth Technology Business"
  },
  {
    quote: "Their analytical depth rivals the best investment banks. Exceptional modeling skills with genuine strategic insight.",
    author: "Chief Financial Officer", 
    firm: "Large Renewable Energy Projects"
  },
  {
    quote: "Institutional-quality work product. Clean, clear, and sophisticated—exactly what our investment committee expects.",
    author: "Investment Principal",
    firm: "Family Office ($1.3B AUM)"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-champagne/8 via-transparent to-bronze/12"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(193,179,152,0.15),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-20 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">Client Perspectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="elegant-card p-10 text-left">
              <div className="mb-6">
                <svg className="w-8 h-8 text-bronze opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-champagne mb-8 italic leading-relaxed font-body max-w-xl">
                {testimonial.quote}
              </p>
              <div className="border-t border-white/20 pt-6">
                <div className="text-sm font-medium text-white uppercase tracking-wide mb-1">
                  {testimonial.author}
                </div>
                <div className="text-xs text-bronze">
                  {testimonial.firm}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
