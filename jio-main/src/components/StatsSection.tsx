import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { STATISTICS_DATA } from '../data';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 border-y border-[rgba(255,255,255,0.08)] relative overflow-hidden" id="stats-section">
      <div className="absolute inset-0 bg-[#D6B16B]/[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="stats-container">
        
        {/* Animated Subtitle Header */}
        <div className="text-center md:text-left mb-12 sm:mb-16 md:max-w-xl" id="stats-heading">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3">
            Institutional Pedigree
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-[#F7F8FA] tracking-tight leading-snug">
            Validated by measurable commercial outcomes across regional & global ecosystems.
          </h2>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-neutral-900/60 pt-10" id="stats-counter-grid">
          {STATISTICS_DATA.map((item, index) => (
            <CounterCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface CounterCardProps {
  item: typeof STATISTICS_DATA[0];
  index: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = item.value;
    const duration = 1200; // ms
    const increment = end / (duration / 16); // ~60fps refresh rate

    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [isInView, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col space-y-3 p-4 rounded-2xl bg-[#101722]/30 dark:bg-[#101722]/10 border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.04)] hover:border-[#D6B16B]/40 hover:shadow-[0_0_15px_rgba(214,177,107,0.1)] transition-all duration-300"
      id={`counter-${item.id}`}
    >
      {/* Big Number */}
      <div className="flex items-baseline gap-1" id={`counter-number-block-${item.id}`}>
        <span 
          className="font-sans text-4xl md:text-5xl font-black text-[#111827] dark:text-[#F7F8FA] tracking-tighter" 
          id={`counter-value-${item.id}`}
        >
          {count}
        </span>
        <span className="font-sans text-2xl font-bold text-[#D6B16B]" id={`counter-suffix-${item.id}`}>
          {item.suffix}
        </span>
      </div>

      {/* Label & Details */}
      <div id={`counter-meta-${item.id}`}>
        <h3 className="font-sans text-xs font-bold text-[#4B5563] dark:text-[#A7B0BD] tracking-tight" id={`counter-label-${item.id}`}>
          {item.label}
        </h3>
        <p className="font-sans text-[10px] text-[#6B7280] dark:text-[#6D7682] mt-1 lines-clamp-2 leading-relaxed" id={`counter-desc-${item.id}`}>
          {item.subtext}
        </p>
      </div>
    </motion.div>
  );
};
