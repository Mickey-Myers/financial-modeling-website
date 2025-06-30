import { FileText, Clock, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function EngagementModelsSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: model1Ref, isIntersecting: model1Visible } = useIntersectionObserver();
  const { ref: model2Ref, isIntersecting: model2Visible } = useIntersectionObserver();
  const { ref: model3Ref, isIntersecting: model3Visible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engagement Models</h2>
          <p className="text-xl text-gray-600">Flexible options to meet your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={model1Ref}
            className={`bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 fade-in ${model1Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project</h3>
            <p className="text-gray-600">Custom plan and deliverables on your timeline</p>
          </div>

          <div 
            ref={model2Ref}
            className={`bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 fade-in ${model2Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Part-Time</h3>
            <p className="text-gray-600">Flexible extension of your team on ongoing basis</p>
          </div>

          <div 
            ref={model3Ref}
            className={`bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 fade-in ${model3Visible ? "visible" : ""}`}
          >
            <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interim</h3>
            <p className="text-gray-600">Fill the gap during transitions or urgent needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
