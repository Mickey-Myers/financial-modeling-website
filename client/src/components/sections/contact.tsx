import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle, Loader2, Mail, Phone, User, Building, ArrowRight, Lock } from "lucide-react";
import emailjs from '@emailjs/browser';
import type { z } from "zod";

// Expose EmailJS globally for testing
if (typeof window !== 'undefined') {
  (window as any).emailjs = emailjs;
  (window as any).testEnvVars = () => {
    console.log('🔍 Environment Variables Test:');
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('Admin Template:', import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID);
    console.log('Client Template:', import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID);
    console.log('Admin Email:', import.meta.env.VITE_ADMIN_EMAIL);
    console.log('All env vars:', import.meta.env);
  };
}

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
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');

      // Prepare timestamp
      const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Format display values for better readability
      const formatModelType = (type: string) => {
        const types = {
          'custom': 'Custom Financial Model',
          'acquisition': 'Acquisition/Merger Model',
          'template': 'Template Customization'
        };
        return types[type as keyof typeof types] || type;
      };

      const formatBusinessStage = (stage: string) => {
        const stages = {
          'pre-launch': 'Pre-Launch (Idea/Planning)',
          'early-stage': 'Early Stage (<$1M Revenue)',
          'growth-stage': 'Growth Stage ($1M+ Revenue)'
        };
        return stages[stage as keyof typeof stages] || stage;
      };

      const formatPurpose = (purpose: string) => {
        const purposes = {
          'fundraising': 'Fundraising (VC/Angel/PE)',
          'debt-financing': 'Debt Financing (Bank/SBA)',
          'strategic-planning': 'Strategic Planning & Analysis',
          'acquisition': 'Acquisition/Merger Analysis'
        };
        return purposes[purpose as keyof typeof purposes] || purpose;
      };

      // Email parameters for admin notification
      const adminEmailParams = {
        from_name: data.fullName,
        company: data.company || 'Not specified',
        company_name: data.company || data.fullName,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        model_type: formatModelType(data.modelType || ''),
        industry: data.industry || 'Not specified',
        business_stage: formatBusinessStage(data.businessStage || ''),
        purpose: formatPurpose(data.purpose || ''),
        revenue_model: data.revenueModel || 'Not provided',
        message: data.message || 'No additional details provided',
        timestamp: timestamp,
                 to_email: import.meta.env.VITE_ADMIN_EMAIL || 'info@financialmodelingpartners.com'
      };

      // Email parameters for client auto-responder
      const clientEmailParams = {
        to_name: data.fullName,
        to_email: data.email,
        company: data.company || 'your business',
        model_type_display: formatModelType(data.modelType || ''),
        industry_display: data.industry || 'Not specified',
        business_stage_display: formatBusinessStage(data.businessStage || ''),
        timestamp: timestamp
      };

      // Debug: Check environment variables
      console.log('🔍 EmailJS Environment Variables:');
      console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log('Admin Template:', import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID);
      console.log('Client Template:', import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID);
      console.log('Admin Email:', import.meta.env.VITE_ADMIN_EMAIL);
      console.log('All env vars:', import.meta.env);

      let adminEmailSuccess = false;
      let clientEmailSuccess = false;
      
      // Send admin notification email
      try {
        console.log('📧 Attempting to send admin notification email...');
        const adminResult = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
          import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || 'YOUR_ADMIN_TEMPLATE_ID',
          adminEmailParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        );
        console.log('✅ Admin email sent successfully:', adminResult);
        adminEmailSuccess = true;
      } catch (adminError: any) {
        console.error('❌ Admin email failed:', adminError);
        console.error('❌ Admin error details:', {
          message: adminError?.message,
          status: adminError?.status,
          text: adminError?.text
        });
      }
      
      // Send client confirmation email (independent of admin email)
      try {
        console.log('📧 Attempting to send client confirmation email...');
        console.log('🔍 Client email parameters:', clientEmailParams);
        console.log('🔍 Client template ID:', import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID);
        
        const clientResult = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
          import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID || 'YOUR_CLIENT_TEMPLATE_ID',
          clientEmailParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        );
        console.log('✅ Client email sent successfully:', clientResult);
        clientEmailSuccess = true;
      } catch (clientError: any) {
        console.error('❌ Client email failed:', clientError);
        console.error('❌ Client error details:', {
          message: clientError?.message,
          status: clientError?.status,
          text: clientError?.text
        });
        
        // Check if it's a template configuration issue
        if (clientError?.message && clientError.message.includes('template')) {
          console.error('🔍 This looks like a CLIENT template configuration issue');
          console.error('🔍 Check your client template:', import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID);
        }
      }
      
      // Log overall email status
      console.log('📧 Email summary:', {
        adminEmailSuccess,
        clientEmailSuccess,
        adminTemplate: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        clientTemplate: import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID
      });

      // Try to save to database, but dont fail the entire submission if it fails
      let databaseSuccess = false;
      try {
        console.log('🗄️ Attempting to save to database...');
        const response = await apiRequest("POST", "/api/contact", data);
        const result = await response.json();
        console.log('✅ Database save successful:', result);
        databaseSuccess = true;
        return result;
      } catch (dbError: any) {
        console.error('❌ Database save failed:', dbError);
        console.log('⚠️ Continuing with email success only');
        
        // Return a success response even if database fails, as long as emails worked
        if (adminEmailSuccess || clientEmailSuccess) {
          console.log('✅ Returning success (emails worked, database failed)');
          return {
            success: true,
            message: "Contact form submitted successfully (emails sent, database backup failed)",
            emailSuccess: true,
            databaseSuccess: false
          };
        } else {
          // If no emails worked, then its a real failure
          console.error('❌ Both emails and database failed - this is a real error');
          throw new Error("Both email and database operations failed");
        }
      }
    },
    onSuccess: (result: any) => {
      setIsSuccess(true);
      setIsSubmitting(false);
      
      // More detailed success message
      toast({
        title: "🎉 Message Sent Successfully!",
        description: "Thank you for your inquiry. We've received your request and will respond within 24 hours. Check your email for confirmation.",
      });
      
      form.reset();
      
      // Track conversion event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
      
      console.log('✅ Form submission successful:', result);
    },
    onError: (error: any) => {
      setIsSubmitting(false);
      
      // More detailed error handling
      console.error('❌ Form submission error:', error);
      
      let errorMessage = "Please try again or email us directly at info@financialmodelingpartners.com";
      let errorTitle = "Submission Failed";
      
      if (error.message) {
        if (error.message.includes('EmailJS')) {
          errorTitle = "Email Notification Error";
                     errorMessage = "Your form was saved but email notifications may be delayed. We'll still respond within 24 hours.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorTitle = "Connection Error";
          errorMessage = "Please check your internet connection and try again.";
        }
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
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

        <style suppressHydrationWarning>{`
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-8 md:mb-12 transition-all duration-500 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
            Let's Build Your Model
          </h2>
          <p className="text-lg md:text-xl text-bronze font-body mb-3 md:mb-4 italic">
            Get a custom quote for your financial modeling needs — no calls required
          </p>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Most of our financial modeling engagements start at $3,500+, with timelines between 5–10 days.<br />
            Each model is handbuilt by US-based, ex-bankers & professional investors. <strong className="text-bronze italic">No AI, ever.</strong>
          </p>
        </div>

        {/* Premium Form */}
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
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
                    className="w-full h-12 px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 touch-manipulation md:h-10 md:py-2"
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
                    className="w-full h-12 px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 touch-manipulation md:h-10 md:py-2"
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
                    className="w-full h-12 px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 touch-manipulation md:h-10 md:py-2"
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
                    className="w-full h-12 px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 touch-manipulation md:h-10 md:py-2"
                    placeholder="+1 (555) 123-4567"
                  />
              </div>
            </div>

            {/* Project Type Section */}
            <div className="bg-slate-800/30 p-3 md:p-4 rounded-lg border border-slate-700/30">
              <label className="block text-base md:text-lg font-display font-semibold text-[#a3865a] mb-2 md:mb-3">
                What type of financial model do you need? *
              </label>
              <div className="space-y-1 md:space-y-2 pl-2">
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="custom-model"
                    value="custom"
                    {...form.register("modelType")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="custom-model" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Custom financial model for my business
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="acquisition-model"
                    value="acquisition"
                    {...form.register("modelType")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="acquisition-model" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Acquisition or merger model
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="template-custom"
                    value="template"
                    {...form.register("modelType")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="template-custom" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Customize existing model template
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
                  className="w-full h-12 px-4 py-4 bg-slate-800/50 border border-slate-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a3865a]/50 focus:ring-1 focus:ring-[#a3865a]/30 transition-all duration-200 touch-manipulation md:h-10 md:py-2"
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
            <div className="bg-slate-800/30 p-3 md:p-4 rounded-lg border border-slate-700/30">
              <label className="block text-base md:text-lg font-display font-semibold text-[#a3865a] mb-2 md:mb-3">
                Current business stage *
              </label>
              <div className="space-y-1 md:space-y-2 pl-2">
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="pre-launch"
                    value="pre-launch"
                    {...form.register("businessStage")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="pre-launch" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Pre-launch (idea/planning stage)
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="early-stage"
                    value="early-stage"
                    {...form.register("businessStage")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="early-stage" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Early stage (under $1M revenue)
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="growth-stage"
                    value="growth-stage"
                    {...form.register("businessStage")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="growth-stage" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Growth stage ($1M+ revenue)
                  </label>
                </div>
              </div>
            </div>

            {/* Purpose Section */}
            <div className="bg-slate-800/30 p-3 md:p-4 rounded-lg border border-slate-700/30">
              <label className="block text-base md:text-lg font-display font-semibold text-[#a3865a] mb-2 md:mb-3">
                Primary purpose for this model *
              </label>
              <div className="space-y-1 md:space-y-2 pl-2">
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="fundraising"
                    value="fundraising"
                    {...form.register("purpose")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="fundraising" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Fundraising (VC, angel, PE)
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="debt-financing"
                    value="debt-financing"
                    {...form.register("purpose")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="debt-financing" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Debt financing (bank loan, SBA)
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="strategic-planning"
                    value="strategic-planning"
                    {...form.register("purpose")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="strategic-planning" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
                    Strategic planning & analysis
                  </label>
                </div>
                
                <div className="flex items-start py-1">
                  <input
                    type="radio"
                    id="acquisition"
                    value="acquisition"
                    {...form.register("purpose")}
                    className="w-4 h-4 mt-1 text-[#a3865a] bg-slate-800 border-slate-600 focus:ring-[#a3865a]/30 touch-manipulation"
                  />
                  <label htmlFor="acquisition" className="ml-3 text-gray-200 cursor-pointer flex-1 leading-relaxed text-sm">
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
              <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                <Lock className="w-3 h-3" />
                Confidential consultation. No marketing communications.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
