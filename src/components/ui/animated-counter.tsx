
import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ target, suffix = "", duration = 2000, className }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount(Math.floor(target * progress));

      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
