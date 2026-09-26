"use client";

import React from 'react';
import { Shield, Lock, Eye, FileText, ChevronRight, Scale, Info, Bell, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    { id: "intro", title: "Introduction", icon: Info },
    { id: "collection", title: "Data Collection", icon: Eye },
    { id: "usage", title: "Data Usage", icon: FileText },
    { id: "security", title: "Security Measures", icon: Lock },
    { id: "rights", title: "Your Rights", icon: Scale },
    { id: "updates", title: "Policy Updates", icon: Bell },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <TopNavbar />
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.3em] text-xs">
               <Shield size={16} />
               <span>Official Documentation</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-poppins font-black text-white uppercase tracking-tighter leading-none">
              Privacy <br /> <span className="text-secondary italic">Policy</span>
            </h1>
            <p className="text-white/60 max-w-2xl font-manrope font-medium text-lg">
              Transparency in how we handle and protect examination data across our nationwide operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-40 h-fit order-2 lg:order-1">
             <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5 shadow-2xl">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-50 dark:border-white/5 pb-4">Table of Contents</h3>
                <nav className="space-y-2">
                   {sections.map((section) => (
                     <a 
                       key={section.id}
                       href={`#${section.id}`}
                       className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-all font-bold text-sm group"
                     >
                        <section.icon size={18} className="group-hover:scale-110 transition-transform" />
                        {section.title}
                     </a>
                   ))}
                </nav>
                <div className="mt-8 pt-8 border-t border-slate-50 dark:border-white/5">
                   <div className="bg-primary/5 dark:bg-primary/20 p-6 rounded-3xl space-y-4">
                      <ShieldAlert className="text-primary dark:text-secondary" />
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight leading-relaxed">
                        Last Updated: <br /> <span className="text-primary dark:text-secondary">May 13, 2026</span>
                      </p>
                   </div>
                </div>
             </div>
          </aside>

          {/* Legal Content Blocks */}
          <main className="lg:col-span-8 space-y-12 order-1 lg:order-2">
            
            {/* Section: Intro */}
            <section id="intro" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                     <Info size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight">Introduction</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-manrope font-medium">
                  <p>
                    At <span className="text-primary dark:text-secondary font-bold">Examination Support Solutions</span>, privacy is not just a policy; it's the foundation of our examination integrity. We operate as a high-security technical service provider for mission-critical computer-based tests.
                  </p>
                  <p>
                    This policy describes our data protection practices regarding the collection, use, and disclosure of information when you interact with our nationwide exam center network and digital platforms.
                  </p>
               </div>
            </section>

            {/* Section: Collection */}
            <section id="collection" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center">
                     <Eye size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight">Data Collection</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-8">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-manrope font-medium">
                    We collect specialized data sets to ensure the security and smooth execution of exams:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     {[
                       { title: "Client Data", desc: "Institutional contact and logistical planning info." },
                       { title: "Candidate Data", desc: "Identification mandated by examining agencies." },
                       { title: "Technical Logs", desc: "Real-time CBT server performance metrics." },
                       { title: "Security Media", desc: "CCTV and biometric verification records." }
                     ].map((item, i) => (
                       <div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl space-y-2 border border-transparent hover:border-primary/20 transition-all">
                          <h4 className="text-primary dark:text-secondary font-black uppercase text-xs tracking-widest">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-manrope">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Section: Security */}
            <section id="security" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center">
                     <Lock size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight">Security Measures</h2>
               </div>
               <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Shield size={200} />
                  </div>
                  <p className="text-white/80 leading-relaxed font-manrope font-medium mb-8 relative z-10">
                    We employ defense-in-depth security strategies to protect examination integrity. This includes encrypted data transmission, air-gapped server networks for sensitive payloads, and 24/7 physical monitoring of center infrastructure.
                  </p>
                  <ul className="space-y-4 relative z-10">
                     {["AES-256 Bit Encryption", "Secure Socket Layer (SSL)", "Hardware Security Modules (HSM)"].map((tech, i) => (
                       <li key={i} className="flex items-center gap-3 text-secondary font-bold uppercase text-xs tracking-[0.1em]">
                          <CheckCircle2 size={16} />
                          {tech}
                       </li>
                     ))}
                  </ul>
               </div>
            </section>

          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CheckCircle2({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
