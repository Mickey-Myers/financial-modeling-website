import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const testimonials = [
  {
    quote: "Instrumental partner in helping us successfully raise $22M. Highly recommend.",
    author: "CEO, High-Growth Technology Business"
  },
  {
    quote: "Blown away at their financial modeling skills and ability to add value.",
    author: "CFO, Large Renewable Energy Projects"
  },
  {
    quote: "Clean, clear, accurate, digestible models - easy to share internally and externally.",
    author: "Principal, Family Office ($1.3B AUM)"
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>

        <div className="testimonial-carousel relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-5xl navy-800 mb-4">"</div>
            <p className="text-xl text-gray-600 mb-6 italic leading-relaxed">
              {testimonials[currentSlide].quote}
            </p>
            <div className="text-lg font-semibold text-gray-900">
              {testimonials[currentSlide].author}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-navy-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
