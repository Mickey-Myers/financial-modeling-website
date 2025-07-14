import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface IsolatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  onButtonPresence?: (isPresent: boolean) => void;
}

export default function IsolatedButton({ onClick, children, onButtonPresence }: IsolatedButtonProps) {
  useEffect(() => {
    // Tell parent component that button is present
    onButtonPresence?.(true);
    
    return () => {
      // Tell parent component that button is no longer present
      onButtonPresence?.(false);
    };
  }, [onButtonPresence]);

  return (
    <div 
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]"
      style={{
        isolation: 'isolate',
        contain: 'layout style paint',
        willChange: 'auto'
      }}
    >
      <button 
        onClick={onClick}
        className="bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 px-6 py-3 text-base font-semibold rounded-lg inline-flex items-center gap-2 shadow-xl touch-manipulation"
      >
        {children}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
} 