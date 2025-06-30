import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CaseStudiesSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Financial analytics dashboard",
      category: "Financial Modeling",
      title: "Multi-Family Developer Gets New Acquisition Model to Grow Portfolio",
      description: "Enhanced acquisition analysis framework enabling strategic portfolio expansion decisions."
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Excel financial modeling",
      category: "Financial Modeling",
      title: "Renewable Energy Developer Upgrades Portfolio Model",
      description: "Comprehensive portfolio valuation and performance tracking system implementation."
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Strategic advisory meeting",
      category: "Strategic Advisory",
      title: "Healthcare Technology Business Raises $22M Series B",
      description: "Investment-ready financial model and strategic guidance for successful funding round."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Business analytics charts",
      category: "Strategic Advisory",
      title: "E-Commerce Company Secures $6M Line of Credit",
      description: "Financial restructuring and credit facility modeling for growth capital access."
    },
    {
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Excel financial spreadsheet",
      category: "Financial Modeling",
      title: "Affordable Housing Developer Gets New Acquisition Model",
      description: "Specialized acquisition and development financial model for social impact projects."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Professional business meeting",
      category: "Financial Modeling",
      title: "Mineral Acquisition Company Successfully Raises New Fund",
      description: "Fund formation modeling and investor presentation materials for capital raising."
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-light-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-20 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-near-black mb-6 tracking-tight">Selected Engagements</h2>
          <p className="text-xl text-muted-text font-body">Institutional outcomes across diverse transactions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`elegant-card overflow-hidden fade-in ${isIntersecting ? "visible" : ""}`}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-oxford-blue/5 to-bronze/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-oxford-blue/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-bronze" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-bronze font-medium mb-3 uppercase tracking-wide">{study.category}</div>
                  <h3 className="text-xl font-display font-medium text-near-black mb-4 leading-tight">{study.title}</h3>
                  <p className="text-muted-text text-sm font-body leading-relaxed">{study.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
