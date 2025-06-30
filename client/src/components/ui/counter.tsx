import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ target, suffix = "+", duration = 2000, className = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isIntersecting) return;

    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isIntersecting, target, duration]);

  return (
    <div ref={ref} className={`counter ${className}`}>
      {count}{suffix}
    </div>
  );
}
