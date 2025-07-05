import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'track-record', 'process', 'testimonials', 'about'];
      let currentSection = 'hero'; // default
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 120; // Account for navigation height
          
          // Check if section is in viewport
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Clear active state temporarily to prevent stuck states
    setActiveSection('');
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navigation
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Track navigation with analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'navigation_click', {
          event_category: 'navigation',
          event_label: sectionId
        });
      }
      
      // Set active state after a brief delay to allow scroll
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-white hover:text-[#a3865a] transition-colors duration-200 focus:outline-none"
              aria-label="Financial Modeling Partners - Go to homepage"
            >
              Financial Modeling <span className="text-[#a3865a]">Partners</span>
            </button>
          </div>

          {/* Main Navigation - Streamlined to 5 core items */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              onClick={() => scrollToSection("services")}
              active={activeSection === "services"}
              label="Services"
            />
            <NavLink 
              onClick={() => scrollToSection("track-record")}
              active={activeSection === "track-record"}
              label="Results"
            />
            <NavLink 
              onClick={() => scrollToSection("process")}
              active={activeSection === "process"}
              label="How It Works"
            />
            <NavLink 
              onClick={() => scrollToSection("testimonials")}
              active={activeSection === "testimonials"}
              label="Reviews"
            />
            <a 
              href="/about"
              className="text-gray-300 hover:text-[#a3865a] font-medium transition-colors duration-200 focus:outline-none"
            >
              About
            </a>
          </div>

          {/* Prominent CTA Button */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-150 focus:outline-none"
              aria-label="Get a quote for your financial model"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#a3865a] transition-colors duration-200 p-2 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Simplified */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50 shadow-lg animate-in slide-in-from-top-5 duration-200"
            role="menu"
          >
            <div className="px-6 py-4 space-y-4">
              <MobileNavLink 
                onClick={() => scrollToSection("services")}
                label="Services"
                onClose={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                onClick={() => scrollToSection("track-record")}
                label="Results"
                onClose={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                onClick={() => scrollToSection("process")}
                label="How It Works"
                onClose={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                onClick={() => scrollToSection("testimonials")}
                label="Reviews"
                onClose={() => setIsMenuOpen(false)}
              />
              <a 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-[#a3865a] font-medium p-3 rounded-md hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none"
                role="menuitem"
              >
                About
              </a>
              
              {/* FAQ Link - Moved to secondary position */}
              <div className="border-t border-slate-700/50 pt-4 mt-4">
                <a 
                  href="/faq"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-400 hover:text-[#a3865a] p-3 rounded-md hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none"
                  role="menuitem"
                >
                  FAQ
                </a>
              </div>
              
              {/* Primary CTA Mobile */}
              <button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-150 mt-4 focus:outline-none"
                role="menuitem"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ onClick, active, label }: { onClick: () => void; active: boolean; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`font-medium transition-colors duration-200 focus:outline-none ${
        active 
          ? "text-[#a3865a]" 
          : "text-gray-300 hover:text-[#a3865a]"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </button>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ onClick, label, onClose }: { onClick: () => void; label: string; onClose: () => void }) {
  return (
    <button 
      onClick={() => {
        onClick();
        onClose();
      }}
      className="block w-full text-left text-gray-300 hover:text-[#a3865a] font-medium p-3 rounded-md hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none"
      role="menuitem"
    >
      {label}
    </button>
  );
}
