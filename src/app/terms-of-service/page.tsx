"use client";

import React from 'react';
import { Gavel, Scale, AlertCircle, Info, Bell, ShieldAlert, ChevronRight, CheckCircle2, FileCheck, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';

export default function TermsOfService() {
  const sections = [
    { id: "agreement", title: "Agreement", icon: FileCheck },
    { id: "conduct", title: "Conduct", icon: Terminal },
    { id: "liability", title: "Liability", icon: ShieldAlert },
    { id: "termination", title: "Termination", icon: AlertCircle },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <TopNavbar />
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
           <Gavel className="w-[600px] h-[600px] absolute -right-20 -bottom-20 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-secondary font-bold uppercase tracking-[0.3em] text-xs">
               <Scale size={16} />
               <span>Legal Framework</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-poppins font-black text-white uppercase tracking-tighter leading-none">
              Terms of <br /> <span className="text-secondary italic">Service</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto font-manrope font-medium text-lg">
              Operating standards and professional agreements for our nationwide examination support ecosystem.
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
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-50 dark:border-white/5 pb-4">Service Sections</h3>
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
                   <div className="bg-primary/5 dark:bg-primary/20 p-6 rounded-3xl">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Version 1.0.4</p>
                      <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all">Download PDF</button>
                   </div>
                </div>
             </div>
          </aside>

          {/* Legal Content Blocks */}
          <main className="lg:col-span-8 space-y-12 order-1 lg:order-2">
            
            {/* Section: Agreement */}
            <section id="agreement" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                     <FileCheck size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Agreement to <br /> Professional Terms</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-manrope font-medium">
                  <p>
                    By engaging <span className="text-primary dark:text-secondary font-bold">Examination Support Solutions</span> for any CBT, audit, or manpower services, the Client and its agents agree to comply with the operational protocols defined herein.
                  </p>
                  <p>
                    These terms govern all technical deployments, site coordinate efforts, and personnel usage across our nationwide network of examination centers.
                  </p>
               </div>
            </section>

            {/* Section: Conduct */}
            <section id="conduct" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg">
                     <Terminal size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight">Operational Conduct</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl space-y-8">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-manrope font-medium">
                    To maintain examination integrity, all service users must adhere to strict behavioral standards:
                  </p>
                  <div className="space-y-4">
                     {[
                       "Absolute prohibition of unauthorized data access or packet sniffing.",
                       "Mandatory compliance with local center administrative coordination.",
                       "Respect for the technical continuity protocols during active exam hours.",
                       "Zero tolerance for collusion or manipulation of center infrastructure."
                     ].map((item, i) => (
                       <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border-l-4 border-primary dark:border-secondary">
                          <AlertCircle size={20} className="text-primary dark:text-secondary shrink-0" />
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight leading-snug">{item}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Section: Liability */}
            <section id="liability" className="scroll-mt-40 space-y-6">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                     <ShieldAlert size={24} />
                  </div>
                  <h2 className="text-3xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tight">Service Liability</h2>
               </div>
               <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Scale size={300} />
                  </div>
                  <p className="text-white/80 leading-relaxed font-manrope font-medium mb-8 relative z-10">
                    We maintain a 99.9% uptime goal for all CBT operations. However, liability is limited to the direct scope of services provided. We are not responsible for candidate-side technical errors or agency-level software bugs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 relative z-10">
                     {["Hardware Integrity", "Network Continuity", "Manpower Discipline", "Field Readiness"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                          <CheckCircle2 size={16} className="text-secondary" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{item} Guaranteed</span>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}
