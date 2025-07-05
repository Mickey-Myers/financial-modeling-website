import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Star, 
  Plus,
  Minus
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Mouse tracking for dynamic background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gettingStartedFaqs = [
    {
      question: "What types of models do you build?",
      answer: "We specialize in fully custom Excel models for fundraising, M&A, business planning, unit economics, strategic scenario planning, investor updates, and more. Every model is tailored to your business and use case — no templates or boilerplate."
    },
    {
      question: "Who builds the models?",
      answer: "All models are handbuilt by ex-investment bankers, VC analysts, or strategic finance professionals — not junior freelancers or overseas contractors. Every file is structured for clarity, auditability, and investor-readiness."
    },
    {
      question: "Do I need to schedule a call?",
      answer: "No call is required to get started. Simply fill out the intake form and we'll respond with a custom quote — usually within 24 hours. You'll always have the option to book a call later if you'd prefer to talk through details."
    },
    {
      question: "What if I'm not sure what I need?",
      answer: "That's okay — tell us what you're trying to accomplish (raise capital, impress the board, plan headcount, etc.), and we'll help define the scope. Many clients come to us with just a pitch deck or some back-of-the-napkin numbers."
    }
  ];

  const processFaqs = [
    {
      question: "How does pricing work?",
      answer: "Most projects begin with a one-time, fixed-scope engagement. After delivery, many clients choose to continue on a lightweight retainer for ongoing scenario updates, board prep, or KPI reporting. Pricing is transparent and will be provided after intake."
    },
    {
      question: "Can I see example models or references?",
      answer: "Due to confidentiality, we don't share past work. But we're happy to walk through our typical structure and approach. We've helped clients raise over $500M using these models — and can provide anonymized screenshots upon request."
    },
    {
      question: "What's your turnaround time?",
      answer: "Typical delivery is 5–10 business days depending on complexity. Rush delivery (48–72 hours) is available for time-sensitive needs."
    },
    {
      question: "What happens after I submit the form?",
      answer: "You'll receive a custom quote, along with a short email laying out the deliverables, timeline, and next steps. You can pay instantly and get started — or schedule a call if you'd prefer to discuss first."
    },
    {
      question: "Is this confidential?",
      answer: "Absolutely. All work is under NDA by default. We never share your materials or financials."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163, 134, 90, 0.15) 0%, transparent 50%)`,
            transition: 'background 0.3s ease',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#a3865a]/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#a3865a]/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-[#a3865a]/10 rotate-45 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Hero Section - Two Column Layout with Better Contrast */}
        <div className="py-12 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Navigation & Title */}
              <div>
                <div className="inline-flex items-center text-[#a3865a] text-sm font-medium mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <a href="/" className="hover:text-[#c1b398] transition-colors">Back to Home</a>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                  About <span className="text-[#a3865a]">Financial Modeling Partners</span>
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Wall Street-caliber financial models for companies that mean business
                </p>
              </div>

              {/* Right Column - Mission */}
              <div className="bg-slate-700/80 backdrop-blur-sm rounded-xl p-8 border border-slate-500/50">
                <h2 className="text-2xl font-bold text-[#a3865a] mb-6 font-serif">Why We Exist</h2>
                <p className="text-gray-100 leading-relaxed mb-4">
                  Too many promising companies struggle to raise capital or make strategic decisions because they lack the 
                  investment-grade financial models that investors and management teams expect.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  We bring institutional-quality modeling expertise to companies of all sizes — from pre-revenue startups 
                  to established enterprises planning their next phase of growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart - Four Column Grid with Fixed Contrast */}
        <div className="py-12 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-serif text-white">
              What Makes Us <span className="text-[#a3865a]">Different</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-xl bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 hover:border-[#a3865a]/50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-[#a3865a]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#a3865a]/30 transition-colors">
                  <TrendingUp className="w-5 h-5 text-[#a3865a]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Wall Street Pedigree</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Built by professionals who've modeled $100M+ transactions at Goldman Sachs, J.P. Morgan, and leading PE firms. We bring that rigor to every engagement.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 hover:border-[#a3865a]/50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-[#a3865a]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#a3865a]/30 transition-colors">
                  <Users className="w-5 h-5 text-[#a3865a]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">No AI, Ever</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Every model is handbuilt by experienced professionals. We never use AI, templates, or offshore contractors. Each model is custom-designed for your specific business.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 hover:border-[#a3865a]/50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-[#a3865a]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#a3865a]/30 transition-colors">
                  <Target className="w-5 h-5 text-[#a3865a]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Our models have helped companies raise over $500M in capital and complete successful M&A transactions. We build models that get deals done.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 hover:border-[#a3865a]/50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-[#a3865a]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#a3865a]/30 transition-colors">
                  <Star className="w-5 h-5 text-[#a3865a]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Boutique Approach</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  We work with a select number of clients to ensure each model receives the attention and expertise it deserves. Quality over quantity, always.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Reorganized Layout */}
        <div className="py-12 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 font-serif">
                Meet the <span className="text-[#a3865a]">Partners</span>
              </h2>
              <p className="text-gray-200 text-lg">Over Two Decades of Combined Wall Street Experience</p>
            </div>

            {/* Two Partner Boxes Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
              
              {/* Mickey James */}
              <div className="bg-slate-700/80 backdrop-blur-sm rounded-xl p-6 border border-slate-500/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Mickey James</h3>
                  <p className="text-[#a3865a] font-medium text-sm">Managing Partner</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Current Role</p>
                    <p className="text-gray-100">Leads all financial modeling engagements and client relationships</p>
                  </div>
                  
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Previous Experience</p>
                    <p className="text-gray-100">Investment Associate, NYC PE Fund</p>
                    <p className="text-gray-100">J.P. Morgan Investment Banking</p>
                  </div>
                  
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Education</p>
                    <p className="text-gray-100">Applied Economics, Cornell University</p>
                  </div>
                </div>
              </div>

              {/* Benjamin Steinberg */}
              <div className="bg-slate-700/80 backdrop-blur-sm rounded-xl p-6 border border-slate-500/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Jesse Stein</h3>
                  <p className="text-[#a3865a] font-medium text-sm">Managing Partner</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Current Role</p>
                    <p className="text-gray-100">Strategic analysis and complex financial modeling expertise</p>
                  </div>
                  
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Previous Experience</p>
                    <p className="text-gray-100">VP, Goldman Sachs Financial Institutions Group</p>
                    <p className="text-gray-100">McKinsey & Company</p>
                    <p className="text-gray-100">$2B+ Family Office FP&A Lead</p>
                  </div>
                  
                  <div className="p-3 rounded bg-slate-600/60 border border-slate-500/40">
                    <p className="text-[#a3865a] font-medium mb-1">Education</p>
                    <p className="text-gray-100">MBA, Wharton School</p>
                    <p className="text-gray-100">BA Economics, Harvard University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Experience Stats - Full Width Rectangle Below */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-[#a3865a]/25 via-slate-700/80 to-[#a3865a]/25 backdrop-blur-sm rounded-xl p-6 border border-[#a3865a]/40">
                <h4 className="text-xl font-bold text-white mb-4 text-center font-serif">Combined Track Record</h4>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#a3865a] mb-1">150+</p>
                    <p className="text-xs text-gray-200 uppercase tracking-wide">Models Built</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#a3865a] mb-1">$500M+</p>
                    <p className="text-xs text-gray-200 uppercase tracking-wide">Capital Raised</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#a3865a] mb-1">15+</p>
                    <p className="text-xs text-gray-200 uppercase tracking-wide">Industries</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#a3865a] mb-1">20+</p>
                    <p className="text-xs text-gray-200 uppercase tracking-wide">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Fixed Animations and Text Overlap */}
        <div className="py-12 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[#a3865a] text-sm font-medium mb-3">FAQs</p>
              <h2 className="text-3xl font-bold text-white font-serif">
                Frequently Asked <span className="text-[#a3865a]">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              
              {/* Left Column - Getting Started */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#a3865a] mb-4 font-serif">Getting Started</h4>
                {gettingStartedFaqs.map((faq, index) => (
                  <div key={index} className="bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 rounded-lg hover:border-[#a3865a]/50 transition-all duration-200">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-200 rounded-lg"
                    >
                      <span className="text-white font-medium text-sm pr-2">{faq.question}</span>
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 text-[#a3865a] flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#a3865a] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pt-2 pb-4 text-gray-100 text-sm leading-relaxed border-t border-slate-600/30 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Right Column - Our Process */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#a3865a] mb-4 font-serif">Our Process</h4>
                {processFaqs.map((faq, index) => (
                  <div key={index + 10} className="bg-slate-700/80 backdrop-blur-sm border border-slate-500/50 rounded-lg hover:border-[#a3865a]/50 transition-all duration-200">
                    <button 
                      onClick={() => toggleFaq(index + 10)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-200 rounded-lg"
                    >
                      <span className="text-white font-medium text-sm pr-2">{faq.question}</span>
                      {openFaq === (index + 10) ? (
                        <Minus className="w-4 h-4 text-[#a3865a] flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#a3865a] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === (index + 10) && (
                      <div className="px-4 pt-2 pb-4 text-gray-100 text-sm leading-relaxed border-t border-slate-600/30 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Fixed Response Time */}
        <div className="py-12 px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-500/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                Ready to build your <span className="text-[#a3865a]">winning model?</span>
              </h2>
              <p className="text-gray-100 mb-8 text-lg">
                Get a custom quote in under 24 hours. No sales calls required.
              </p>
              <a 
                href="/#contact"
                className="bg-[#a3865a] hover:bg-[#c1b398] text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-3 text-lg hover:scale-105"
              >
                Get Your Quote Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-gray-300 mt-4">Typical response time: 24 hours</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 