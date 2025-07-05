import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  startOnView?: boolean;
}

export default function Counter({ 
  target, 
  suffix = "", 
  prefix = "",
  duration = 2000, 
  className = "",
  startOnView = true 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.3, 
    rootMargin: "0px 0px -20px 0px" 
  });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Fallback: start animation after 3 seconds if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      if (!hasStarted && startOnView) {
        console.log("Counter fallback triggered for target:", target);
        setHasStarted(true);
        startAnimation();
      }
    }, 3000);

    if (!startOnView || (startOnView && isIntersecting && !hasStarted)) {
      setHasStarted(true);
      console.log("Counter starting animation for target:", target);
      startAnimation();
      clearTimeout(fallbackTimer);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isIntersecting, target, duration, hasStarted, startOnView]);

  const startAnimation = () => {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <span ref={ref as any} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
