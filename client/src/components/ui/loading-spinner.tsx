import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export function LoadingSpinner({ 
  size = 'md', 
  text, 
  className, 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const spinnerContent = (
    <div className={cn(
      "flex flex-col items-center justify-center gap-3",
      className
    )}>
      <Loader2 className={cn(
        "animate-spin text-bronze",
        sizeClasses[size]
      )} />
      {text && (
        <p className="text-sm text-champagne/80 font-medium">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 p-8 rounded-lg border border-champagne/30 shadow-2xl">
          {spinnerContent}
        </div>
      </div>
    );
  }

  return spinnerContent;
}

// Page-level loading component
export function PageLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" text="Loading Financial Modeling Partners..." />
        <div className="mt-8 space-y-2">
          <div className="h-2 bg-bronze/20 rounded-full w-64 mx-auto overflow-hidden">
            <div className="h-full bg-bronze rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-champagne/60">Preparing your experience...</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner; 