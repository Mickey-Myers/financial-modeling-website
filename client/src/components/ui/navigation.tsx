import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold navy-800">FinModel Pro</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:navy-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("track-record")}
                className="text-gray-600 hover:navy-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Track Record
              </button>
              <button 
                onClick={() => scrollToSection("case-studies")}
                className="text-gray-600 hover:navy-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="text-gray-600 hover:navy-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-navy-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:navy-800 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:navy-800"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("track-record")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:navy-800"
              >
                Track Record
              </button>
              <button 
                onClick={() => scrollToSection("case-studies")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:navy-800"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:navy-800"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-navy-800 text-white rounded-lg mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
