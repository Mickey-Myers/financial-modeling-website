import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    
    setIsDark(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-slate-700" : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-display font-semibold text-oxford-blue dark:text-champagne tracking-tight">Financial Modeling Partners</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-slate-600 dark:text-muted-text hover:text-oxford-blue dark:hover:text-champagne px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("track-record")}
                className="text-slate-600 dark:text-muted-text hover:text-oxford-blue dark:hover:text-champagne px-3 py-2 text-sm font-medium transition-colors"
              >
                Proof
              </button>
              <button 
                onClick={toggleTheme}
                className="text-slate-600 dark:text-muted-text hover:text-oxford-blue dark:hover:text-champagne p-2 transition-colors mr-2"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-oxford-blue text-white px-6 py-2 text-sm font-medium hover:bg-bronze transition-all duration-300"
              >
                Book Call
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
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-text hover:text-oxford-blue"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("track-record")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-text hover:text-oxford-blue"
              >
                Proof
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-oxford-blue text-white mt-2"
              >
                Book Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
