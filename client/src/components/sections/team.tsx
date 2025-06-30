import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TeamSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: member1Ref, isIntersecting: member1Visible } = useIntersectionObserver();
  const { ref: member2Ref, isIntersecting: member2Visible } = useIntersectionObserver();

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">Former investment bankers and private equity professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div 
            ref={member1Ref}
            className={`text-center fade-in ${member1Visible ? "visible" : ""}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
              alt="Managing Partner headshot" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Managing Partner</h3>
            <p className="text-gray-600 mb-4">Former Investment Banking & Private Equity</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Former investment banker and PE professional with 100+ client models. Specializes in complex merger models and LBO analysis.
            </p>
          </div>

          <div 
            ref={member2Ref}
            className={`text-center fade-in ${member2Visible ? "visible" : ""}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
              alt="Managing Partner headshot" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Managing Partner</h3>
            <p className="text-gray-600 mb-4">Former Strategic Financial Consultant & CFO Advisor</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Former strategic financial consultant and CFO advisor. Expert in growth modeling and capital raising for emerging companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
