"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration: number; // thời gian animation tính bằng milliseconds
}

export function AnimatedCounter({ end, duration }: CounterProps): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const startTimestamp = performance.now();

    const animateCount = (timestamp: number) => {
      const progress = timestamp - startTimestamp;
      const updatedCount = Math.min(
        Math.floor((progress / duration) * end),
        end
      );
      setCount(updatedCount);

      if (updatedCount < end) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return (
    <div className="animated-counter text-6xl tracking-wide	">
      {count.toLocaleString()}
    </div>
  );
}
