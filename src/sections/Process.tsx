"use client";

import { motion } from "framer-motion";
import { Search, Users, Play, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Requirement mapping",
    description: "Understand exam schedules, center count, manpower needs, technical setup, and reporting expectations before deployment.",
    icon: <Search className="w-8 h-8" />,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    id: "02",
    title: "Team deployment",
    description: "Assign technical and non-technical personnel based on geography, center size, and operational complexity.",
    icon: <Users className="w-8 h-8" />,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    id: "03",
    title: "Exam-day execution",
    description: "Support candidate flow, lab readiness, troubleshooting, documentation, and center-level coordination during test operations.",
    icon: <Play className="w-8 h-8" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  {
    id: "04",
    title: "Audit and reporting",
    description: "Review infrastructure, compliance, observations, and corrective points to support center validation and future readiness.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-slate-800 dark:text-white",
    bgColor: "bg-slate-100 dark:bg-slate-800"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Operational Cycle</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white leading-[1.1] max-w-4xl">
            A structured <span className="italic font-light text-primary">exam support</span> <br />
            workflow, step by step.
          </h2>
        </div>

        {/* Horizontal Flow */}
        <div className="relative mt-20">
          <div className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden lg:block opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
              <path d="M0,50 Q300,0 600,50 T1200,50" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-primary" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className={`relative group ${i % 2 !== 0 ? 'lg:mt-16' : ''}`}
              >
                {/* Large Background Number */}
                <div className="absolute -top-12 -left-4 text-9xl font-bold text-slate-50 dark:text-white/5 pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                  {step.id.replace('.', '')}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-500 relative z-10 h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-3xl ${step.bgColor} ${step.color} flex items-center justify-center mb-8 shadow-xl shadow-current/10 group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>

                  <h4 className="text-2xl font-bold mb-4 font-serif text-slate-900 dark:text-white tracking-tight">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base mb-8">
                    {step.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-primary dark:text-primary-light font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Phase Details <ArrowRight size={14} />
                  </div>
                </div>

                {/* Connector Arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 hidden xl:block text-slate-200 dark:text-white/10 group-hover:text-primary transition-colors">
                    <ArrowRight size={32} strokeWidth={1} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
