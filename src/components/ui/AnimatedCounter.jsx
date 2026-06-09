import { useEffect, useState } from "react";

export default function AnimatedCounter({ value, suffix = "", inView, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
