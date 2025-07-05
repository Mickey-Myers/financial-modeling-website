import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle, Loader2, Mail, Phone, User, Building, ArrowRight, Lock } from "lucide-react";
import emailjs from '@emailjs/browser';
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersectionObserver();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      modelType: "",
      industry: "",
      revenueModel: "",
      businessStage: "",
      purpose: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Send email via EmailJS
      try {
        await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          {
            from_name: data.fullName,
            from_email: data.email,
            company: data.company || 'Not specified',
            phone: data.phone || 'Not provided',
            message: data.message || 'No message provided',
            to_email: 'info@financialmodelingpartners.com',
          },
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue to save to database even if email fails
      }

      // Save to database
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll respond within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
      
      // Track conversion event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or email us directly at info@financialmodelingpartners.com",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

    if (isSuccess) {
    return (
      <section id="contact" className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* DYNAMIC BACKGROUND SYSTEM */}
        <div className="absolute inset-0">
          {/* Multi-layer dynamic gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
          <div 
            className="absolute inset-0 opacity-20 animate-gradient-shift"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(163,134,88,0.15) 0%, transparent 50%), 
                           linear-gradient(45deg, rgba(21,37,69,0.1) 0%, transparent 60%), 
                           conic-gradient(from 0deg, rgba(163,134,88,0.05), rgba(21,37,69,0.05), rgba(163,134,88,0.05))`
            }}
          ></div>
          
          {/* Reduced Particle System */}
          <div className="absolute inset-0">
            {Array.from({ length: 25 }).map((_, i) => {
              const size = Math.random() * 4 + 1;
              const duration = Math.random() * 40 + 20;
              const delay = Math.random() * 10;
              const type = i % 2;
              return (
                <div
                  key={i}
                  className={`absolute animate-gentle-float-${type}`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: type === 0 
                      ? `radial-gradient(circle, rgba(163,134,88,0.6) 0%, rgba(163,134,88,0.05) 100%)`
                      : `radial-gradient(circle, rgba(21,37,69,0.6) 0%, rgba(21,37,69,0.05) 100%)`,
                    borderRadius: '50%',
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
          
          {/* Interactive Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(163, 134, 88, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(163, 134, 88, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px',
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-800/60 border border-slate-700/40 backdrop-blur-xl rounded-xl p-12 shadow-xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-display font-semibold text-white mb-4">Thank You!</h2>
              <p className="text-xl text-gray-300 mb-6">
                Your message has been received. We'll respond within 24 hours.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                For urgent inquiries, email us directly at{" "}
                <a href="mailto:info@financialmodelingpartners.com" className="text-[#a3865a] hover:underline">
                  info@financialmodelingpartners.com
                </a>
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
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
          
          .animate-gradient-shift { animation: gradient-shift 40s ease-in-out infinite; }
          .animate-gentle-float-0 { animation: gentle-float-0 30s ease-in-out infinite; }
          .animate-gentle-float-1 { animation: gentle-float-1 35s ease-in-out infinite; }
        `}</style>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-500 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's Build Your Model
          </h2>
          <p className="text-xl text-bronze font-body mb-4 italic">
            Get a custom quote for your financial modeling needs — no calls required
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Most of our financial modeling engagements start at $3,500+, with timelines between 5–10 days.<br />
            Each model is handbuilt by US-based, ex-bankers & professional investors. <strong className="text-bronze italic">No AI, ever.</strong>
          </p>
        </div>

        {/* Premium Form */}
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Basic Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  FULL NAME *
                </label>
                <input
                  type="text"
                  {...form.register("fullName")}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200"
                  placeholder="John Smith"
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  COMPANY
                </label>
                <input
                  type="text"
                  {...form.register("company")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  EMAIL *
                </label>
                <input
                  type="email"
                  {...form.register("email")}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200"
                  placeholder="john@acmecorp.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  PHONE
                </label>
                <input
                  type="tel"
                  {...form.register("phone")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Project Type Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                WHAT TYPE OF FINANCIAL MODEL DO YOU NEED? *
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="custom-model"
                    value="custom"
                    {...form.register("modelType")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="custom-model" className="ml-3 text-gray-300">
                    Custom financial model for my business
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="acquisition-model"
                    value="acquisition"
                    {...form.register("modelType")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="acquisition-model" className="ml-3 text-gray-300">
                    Acquisition or merger model
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="template-custom"
                    value="template"
                    {...form.register("modelType")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="template-custom" className="ml-3 text-gray-300">
                    Customize an existing model template
                  </label>
                </div>
              </div>
            </div>

            {/* Industry Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                WHAT INDUSTRY OR BUSINESS TYPE? *
              </label>
              <input
                type="text"
                {...form.register("industry")}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200"
                placeholder="e.g., SaaS, Real Estate, Healthcare, Manufacturing"
              />
            </div>

            {/* Revenue Model Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                DESCRIBE YOUR REVENUE MODEL *
              </label>
              <textarea
                {...form.register("revenueModel")}
                rows={3}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 resize-none"
                placeholder="How does your business generate revenue? Include key revenue streams, pricing model, customer segments, etc."
              />
            </div>

            {/* Business Stage Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                CURRENT BUSINESS STAGE *
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="pre-launch"
                    value="pre-launch"
                    {...form.register("businessStage")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="pre-launch" className="ml-3 text-gray-300">
                    Pre-launch (idea/planning stage)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="early-stage"
                    value="early-stage"
                    {...form.register("businessStage")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="early-stage" className="ml-3 text-gray-300">
                    Early stage (less than $1M revenue)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="growth-stage"
                    value="growth-stage"
                    {...form.register("businessStage")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="growth-stage" className="ml-3 text-gray-300">
                    Growth stage ($1M+ revenue)
                  </label>
                </div>
              </div>
            </div>

            {/* Purpose Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                PRIMARY PURPOSE FOR THIS MODEL *
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fundraising"
                    value="fundraising"
                    {...form.register("purpose")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="fundraising" className="ml-3 text-gray-300">
                    Fundraising (VC, angel, private equity)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="debt-financing"
                    value="debt-financing"
                    {...form.register("purpose")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="debt-financing" className="ml-3 text-gray-300">
                    Debt financing (bank loan, SBA, line of credit)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="strategic-planning"
                    value="strategic-planning"
                    {...form.register("purpose")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="strategic-planning" className="ml-3 text-gray-300">
                    Strategic planning & internal analysis
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="acquisition"
                    value="acquisition"
                    {...form.register("purpose")}
                    className="w-4 h-4 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30"
                  />
                  <label htmlFor="acquisition" className="ml-3 text-gray-300">
                    Acquisition or merger analysis
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ADDITIONAL DETAILS
              </label>
              <textarea
                {...form.register("message")}
                rows={3}
                disabled={isSubmitting}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 resize-none"
                placeholder="Timeline, budget range, specific requirements, or any other important details..."
              />
            </div>

            {/* Premium Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 group hover:shadow-lg hover:shadow-[#a3865a]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Custom Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
              
              {/* Privacy Notice */}
              <p className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Confidential consultation. No marketing communications.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
