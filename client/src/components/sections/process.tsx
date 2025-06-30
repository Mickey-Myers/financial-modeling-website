import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProcessSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: step1Ref, isIntersecting: step1Visible } = useIntersectionObserver();
  const { ref: step2Ref, isIntersecting: step2Visible } = useIntersectionObserver();
  const { ref: step3Ref, isIntersecting: step3Visible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={step1Ref}
            className={`text-center fade-in ${step1Visible ? "visible" : ""}`}
          >
            <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Understand Your Challenge</h3>
            <p className="text-gray-600 mb-2">30 minutes</p>
            <p className="text-gray-500">We dive deep into your specific needs and requirements to ensure we build exactly what you need.</p>
          </div>

          <div 
            ref={step2Ref}
            className={`text-center fade-in ${step2Visible ? "visible" : ""}`}
          >
            <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Model Delivered</h3>
            <p className="text-gray-600 mb-2">5-7 days</p>
            <p className="text-gray-500">Receive a professional, investor-ready financial model built to your exact specifications.</p>
          </div>

          <div 
            ref={step3Ref}
            className={`text-center fade-in ${step3Visible ? "visible" : ""}`}
          >
            <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Revisions & Training Included</h3>
            <p className="text-gray-600 mb-2">Ongoing</p>
            <p className="text-gray-500">We ensure you're completely satisfied with revisions and training on how to use your model effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
