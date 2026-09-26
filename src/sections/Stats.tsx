"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { num: 5, suffix: "M+", label: "Candidates Supported", sub: "Nationwide impact" },
  { num: 500, suffix: "+", label: "Examination Centers", sub: "Verified infrastructure" },
  { num: 28, suffix: "+", label: "States Covered", sub: "Pan-India presence" },
  { num: 10, suffix: "+", label: "Years Experience", sub: "Legacy of excellence" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-poppins mb-2 text-secondary">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-primary dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="text-center group"
            >
              <Counter end={stat.num} suffix={stat.suffix} />
              <div className="text-xl font-bold mb-1 text-white">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Static abstract shape */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 border border-white/10 rounded-full"
      />
    </section>
  );
}
