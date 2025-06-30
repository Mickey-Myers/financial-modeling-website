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
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">Real results from real clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const { ref, isIntersecting } = useIntersectionObserver();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 fade-in ${isIntersecting ? "visible" : ""}`}
              >
                <img 
                  src={study.image} 
                  alt={study.alt} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="text-sm navy-800 font-semibold mb-2">{study.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
