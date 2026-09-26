"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Globe } from "lucide-react";

export default function NationalCoverage() {
  const points = [
    "Metropolitan, semi-urban, and remote center support models.",
    "Adaptable staffing for different infrastructure environments.",
    "Audit and readiness services aligned with center-specific conditions."
  ];

  const locations = [
    {
      name: "Ladakh",
      pos: { top: "15%", left: "45%" },
      color: "bg-blue-500",
      shadow: "shadow-blue-500/50",
      description: "Remote High-Altitude Support"
    },
    {
      name: "Rajasthan",
      pos: { top: "42%", left: "15%" },
      color: "bg-slate-400",
      shadow: "shadow-slate-400/50",
      description: "Western Region Operations"
    },
    {
      name: "North East",
      pos: { top: "35%", right: "12%" },
      color: "bg-amber-500",
      shadow: "shadow-amber-500/50",
      description: "Eastern Frontier Centers"
    },
    {
      name: "Sri Vijaya Puram",
      pos: { bottom: "15%", right: "25%" },
      color: "bg-emerald-500",
      shadow: "shadow-emerald-500/50",
      description: "Southern Island Coverage"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden border-t border-slate-100 dark:border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy & Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                National Coverage
              </span>
              <h2 className="text-3xl md:text-5xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                From East to West <br />
                <span className="text-primary">and North to South</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 font-manrope font-semibold text-base leading-relaxed">
              The company profile highlights reach across India, extending from East to West and North to South. This broad footprint supports operational consistency in diverse geographies and exam-center conditions.
            </p>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-manrope text-sm leading-relaxed font-semibold">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: High-End Location Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl min-h-[450px] md:min-h-[500px] flex items-center justify-center">
              
              {/* Dynamic SVG Animated Connection Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-30" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background path line */}
                <path d="M 225 95 C 135 150 120 220 125 240 C 135 280 280 340 335 410 C 370 340 375 220 370 195" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Active animated signal path */}
                <motion.path 
                  d="M 225 95 C 135 150 120 220 125 240 C 135 280 280 340 335 410 C 370 340 375 220 370 195" 
                  stroke="url(#grad)" 
                  strokeWidth="3" 
                  strokeDasharray="40 180"
                  animate={{ strokeDashoffset: [-220, 220] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />

                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Minimal Dot Grid Pattern for Depth */}
              <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Globe Icon in Center as Visual Base */}
              <div className="absolute opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
                <Globe size={320} />
              </div>

              {/* Interactive Location Hotspots */}
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  style={loc.pos}
                  className="absolute z-10 flex flex-col items-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glowing hotspot dot */}
                  <div className="relative mb-2">
                    <span className={`absolute inline-flex h-4 w-4 rounded-full ${loc.color} opacity-75 animate-ping`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${loc.color} ${loc.shadow} shadow-lg`}></span>
                  </div>

                  {/* Glassmorphic location pill */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 flex items-center gap-2 group-hover:border-primary/30 transition-all text-center select-none"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-900 dark:text-white tracking-tight leading-none">
                        {loc.name}
                      </p>
                      <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 leading-none">
                        {loc.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
