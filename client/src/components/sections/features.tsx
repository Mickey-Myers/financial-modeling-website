import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const features = [
  {
    title: "Fully Custom Excel Files",
    description: "Built from scratch for your specific needs"
  },
  {
    title: "Clean Structure, Logical Formulas",
    description: "Easy to understand and modify"
  },
  {
    title: "Investor-Ready Formatting",
    description: "Professional presentation that impresses"
  },
  {
    title: "Scenario Modeling + Dynamic Assumptions",
    description: "Test different outcomes with confidence"
  },
  {
    title: "Documentation + Handoff Support",
    description: "You'll know exactly how to use your model"
  },
  {
    title: "Fast Turnaround Available",
    description: "Rush delivery when you need it most"
  }
];

export default function FeaturesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: gridRef, isIntersecting: gridVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Why Us</h2>
          <p className="text-xl text-muted-text font-body max-w-3xl mx-auto">
            What makes our financial models different
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in ${gridVisible ? "visible" : ""}`}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-bronze rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-near-black mb-2 font-display">{feature.title}</h3>
                <p className="text-muted-text font-body leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}