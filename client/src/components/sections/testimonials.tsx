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
    <section className="py-24 bg-light-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-20 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Client Perspectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="elegant-card p-8 text-left">
              <div className="text-4xl text-bronze mb-6 font-display italic">"</div>
              <p className="text-lg text-muted-text mb-8 italic leading-relaxed font-body">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-6">
                <div className="text-base font-medium text-near-black uppercase tracking-wide">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-text mt-1">
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
