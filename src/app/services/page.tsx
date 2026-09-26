"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Database,
  Zap,
  Users2,
  ShieldCheck,
  ClipboardCheck,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Settings,
  Lock,
  Search,
  Server
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';

const services = [
  {
    id: "01",
    title: "CBT Examination Support",
    description: "End-to-end support for computer-based test operations. We handle everything from manpower planning to center-level execution and on-ground assistance.",
    icon: <Database className="w-10 h-10" />,
    accent: "bg-blue-500",
    features: ["Biometric Verification", "CCTV Monitoring", "Server Support", "System Hardening"]
  },
  {
    id: "02",
    title: "Technical Manpower",
    description: "Deployment of experts for system setup, server management, and lab support. Our staff is trained in various examination platforms and security protocols.",
    icon: <Zap className="w-10 h-10" />,
    accent: "bg-amber-500",
    features: ["Lab Assistants", "Network Engineers", "System Admins", "L2/L3 Support"]
  },
  {
    id: "03",
    title: "Non-Technical Manpower",
    description: "Operational personnel for candidate movement, verification, and venue logistics. Disciplined staff for large-scale crowd management and gate control.",
    icon: <Users2 className="w-10 h-10" />,
    accent: "bg-emerald-500",
    features: ["Invigilators", "Security Staff", "Admin Support", "Queue Management"]
  },
  {
    id: "04",
    title: "Center Audits",
    description: "Technical and non-technical audits covering networking, security, and exam readiness. Detailed compliance reporting for regulatory agencies.",
    icon: <ShieldCheck className="w-10 h-10" />,
    accent: "bg-rose-500",
    features: ["Infrastructure Audit", "IT Readiness", "Post-exam Compliance", "Risk Assessment"]
  },
  {
    id: "05",
    title: "Field Coordination",
    description: "Structured coordination to maintain schedule discipline and resolve issues in real-time between center and agency headquarters.",
    icon: <ClipboardCheck className="w-10 h-10" />,
    accent: "bg-indigo-500",
    features: ["Real-time Reporting", "Logistics Control", "Field Support", "Incident Management"]
  },
  {
    id: "06",
    title: "Nationwide Execution",
    description: "Unmatched capability to support operations across varied geographies, from urban centers to the most remote locations in 28 states.",
    icon: <Globe2 className="w-10 h-10" />,
    accent: "bg-slate-900",
    features: ["Pan-India Presence", "Rapid Deployment", "Local Logistics", "Regional Support"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <TopNavbar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-14 md:pt-38 md:pb-22 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-white/20 h-full w-full" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto border border-white/20 mb-4"
          >
            <ShieldCheck className="w-10 h-10 text-secondary" />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-poppins font-black text-white uppercase tracking-tighter leading-[0.9] flex flex-col items-center"
          >
            <span>Our Professional</span>
            <span className="text-secondary italic">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-manrope font-medium"
          >
            Enterprise-grade technical services and operational infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-primary transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl ${service.accent} bg-opacity-10 flex items-center justify-center text-primary`}>
                  {service.icon}
                </div>
                <div className="text-4xl font-black text-slate-100 dark:text-white/5 group-hover:text-primary/10 transition-colors">
                  {service.id}
                </div>
              </div>

              <h4 className="text-2xl font-poppins font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors uppercase">
                {service.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm mb-8 flex-grow font-manrope">
                {service.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-50 dark:border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                    <CheckCircle2 size={14} className="text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold uppercase tracking-tight leading-none">
                Technical <br />
                <span className="text-secondary italic">Core Infrastructure</span>
              </h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed font-manrope">
              We provide a robust technical foundation for digital assessments, ensuring zero downtime and maximum security during the entire examination lifecycle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Server, title: "Server Management", desc: "Configuration and maintenance of localized exam servers." },
                { icon: Lock, title: "Security Protocols", desc: "Encryption and integrity checks for exam data." },
                { icon: Monitor, title: "Client Support", desc: "System hardening and client-side troubleshooting." },
                { icon: Settings, title: "Automation", desc: "Automated center readiness and technical checks." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm uppercase tracking-wider">{item.title}</h5>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 p-12 md:p-20 rounded-[4rem] backdrop-blur-xl border border-white/10 relative z-10">
              <Search className="w-12 h-12 text-secondary mb-8" />
              <h3 className="text-3xl md:text-4xl font-poppins font-black uppercase mb-6">Quality Audit</h3>
              <p className="text-white/60 text-lg mb-8 italic font-manrope">
                "Our audit protocols are designed to eliminate risks before they manifest. We cover over 150 checkpoints for every examination center."
              </p>
              <div className="flex items-center gap-6">
                <div className="h-px flex-grow bg-white/20" />
                <span className="font-bold text-secondary text-xs uppercase tracking-widest">Compliance Team</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/20 rounded-full blur-[120px] -z-0"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-secondary p-12 md:p-20 rounded-[4rem] text-primary relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-poppins font-black uppercase tracking-tighter leading-tight">Ready to support your next examination?</h2>
              <p className="text-primary/70 font-manrope font-semibold text-lg">Every project has unique requirements. Let us provide you with a tailored manpower strategy.</p>
            </div>
            <Link href="/contact">
              <button className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all flex items-center gap-3 group whitespace-nowrap shadow-xl">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
