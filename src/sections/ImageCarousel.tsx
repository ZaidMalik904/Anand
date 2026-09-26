"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  {
    url: "/hero1.png",
    title: "Precision in Every Operation.",
    description: "Specialized in secure, large-scale Computer Based Test (CBT) management across 28 states."
  },
  {
    url: "/hero2.png",
    title: "Integrity Driven by Tech.",
    description: "Advanced technical infrastructure that ensures every examination is conducted with absolute transparency."
  },
  {
    url: "/hero3.png",
    title: "Logistics Without Limits.",
    description: "From urban centers to remote locations, we bridge the gap in examination accessibility."
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

          {/* Text Overlays */}
          <div className="absolute inset-0 flex items-center px-6 md:px-24">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-secondary" />
                </div>
                <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Certified Examination Partner</span>
              </motion.div>

              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white text-5xl md:text-8xl font-serif mb-8 tracking-tighter leading-[0.9]"
              >
                {images[currentIndex].title}
              </motion.h2>

              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-white/70 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed mb-10"
              >
                {images[currentIndex].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <Link href="/about">
                  <button className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center gap-3 group">
                    Learn Our Process
                    <div className="w-8 h-[1px] bg-white group-hover:bg-primary transition-colors" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-4 flex items-center justify-center text-white/30 hover:text-white transition-all pointer-events-auto"
        >
          <ChevronLeft size={60} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 flex items-center justify-center text-white/30 hover:text-white transition-all pointer-events-auto"
        >
          <ChevronRight size={60} strokeWidth={1} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-6 md:left-24 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? "w-16 bg-secondary" : "w-6 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
