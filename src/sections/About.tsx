"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, ArrowRight, Globe, Award, Lock, Users, Map, Clock } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Side: Image with Overlapping Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:max-w-[500px] order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] h-[400px] md:h-[600px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border-[10px] md:border-[15px] border-slate-50 dark:border-slate-900 shadow-2xl mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Training Hall"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -top-2 -right-2 md:-top-8 md:-right-8 bg-secondary text-primary p-3 md:p-5 rounded-xl md:rounded-3xl shadow-2xl flex flex-col items-center justify-center border-2 md:border-4 border-white dark:border-slate-900 z-10"
            >
              <Award size={20} className="md:size-6 mb-1" />
              <div className="text-sm md:text-xl font-black tracking-tighter">10+</div>
              <div className="text-[6px] md:text-[8px] font-bold uppercase tracking-widest opacity-80 leading-tight text-center">
                Years of<br />Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-10 order-1 lg:order-2 text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 relative overflow-hidden rounded-lg shadow-sm border border-primary/10">
                <img 
                  src="/logo.png" 
                  alt="ASE Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Authorized Examination Partner</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-slate-900 dark:text-white leading-[1.1] mb-6 md:mb-10 tracking-tighter">
              Welcome to <br />
              <span className="italic font-light text-primary">
                ANAND SINDHU ENTERPRISES</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
              A pool of qualified technocrats and professionals hearten us to render the flawless Services.
              We provide specialized services in providing Education, Corporate Training,
              Manpower Solutions and Consultancy to students and agencies for nationwide conduct.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {[
                { title: "Secure Workflows", icon: Lock },
                { title: "Verified Manpower", icon: Users },
                { title: "Nationwide Scale", icon: Map },
                { icon: Clock, title: "24/7 Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 group justify-center lg:justify-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon size={16} />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-[10px] md:text-sm tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="block lg:inline-block">
              <button className="w-full lg:w-auto bg-slate-900 dark:bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary dark:hover:bg-white dark:hover:text-primary transition-all group shadow-xl">
                Learn More About Us
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </div>

        {/* Global Coverage Summary */}
        <div className="mt-32 p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-white/5 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <div className="text-primary font-black text-xs uppercase tracking-widest mb-4">Our Presence</div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Across 28 states and 150+ cities.</h3>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Team" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-white font-bold text-xs">
                +10k
              </div>
            </div>
          </div>
          {/* Background Map Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <Globe size={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
