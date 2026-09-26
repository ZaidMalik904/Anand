"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Zap, Users2, ShieldCheck, ClipboardCheck, Globe2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "CBT examination support",
    description: "End-to-end support for computer-based test operations, including manpower planning, center-level execution, coordination, and on-ground examination assistance.",
    icon: <Database className="w-10 h-10" />,
    accent: "bg-blue-500",
    features: ["Manpower Planning", "Center Execution", "On-ground Support"]
  },
  {
    id: "02",
    title: "Technical manpower",
    description: "Deployment of technical staff for system setup, server and lab support, networking assistance, troubleshooting, and exam-time technical continuity.",
    icon: <Zap className="w-10 h-10" />,
    accent: "bg-amber-500",
    features: ["System Setup", "Server Support", "Troubleshooting"]
  },
  {
    id: "03",
    title: "Non-technical manpower",
    description: "Operational personnel for candidate movement, verification support, administrative coordination, invigililation assistance, and venue logistics.",
    icon: <Users2 className="w-10 h-10" />,
    accent: "bg-emerald-500",
    features: ["Candidate Movement", "Invigilation", "Venue Logistics"]
  },
  {
    id: "04",
    title: "Center audits",
    description: "Technical and non-technical audits covering infrastructure, hardware, networking, security compliance, and examination readiness.",
    icon: <ShieldCheck className="w-10 h-10" />,
    accent: "bg-rose-500",
    features: ["Infrastructure Audit", "Security Compliance", "Readiness Check"]
  },
  {
    id: "05",
    title: "Field coordination",
    description: "Coordination with center teams, local staff, and operational personnel to maintain schedule discipline and issue resolution during exam cycles.",
    icon: <ClipboardCheck className="w-10 h-10" />,
    accent: "bg-indigo-500",
    features: ["Team Coordination", "Issue Resolution", "Schedule Discipline"]
  },
  {
    id: "06",
    title: "Nationwide execution",
    description: "Capability to support examination operations across varied geographies, from major cities to semi-urban and remote locations.",
    icon: <Globe2 className="w-10 h-10" />,
    accent: "bg-slate-900",
    features: ["Major Cities", "Semi-urban Support", "Remote Locations"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#f8f9fa] dark:bg-slate-950 relative overflow-hidden transition-colors duration-500 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 md:mb-6 bg-secondary/10 border border-secondary/20 rounded-full"
            >
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Core Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-slate-900 dark:text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter">
              Professional Logistics <br />Services for <span className="italic font-light text-primary">Assessments.</span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-8 text-center lg:text-left mx-auto lg:mx-0">
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              We provide end-to-end operational support for examination agencies, ensuring secure, reliable, and nationwide conduct of digital and offline assessments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-primary transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${service.accent} bg-opacity-10 flex items-center justify-center text-primary`}>
                  {service.icon}
                </div>
                <div className="text-xl md:text-2xl font-black text-slate-100 dark:text-white/5 group-hover:text-primary/10 transition-colors">
                  {service.id}
                </div>
              </div>

              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs md:text-sm mb-6 md:mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-2.5 md:space-y-3 pt-6 border-t border-slate-50 dark:border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <CheckCircle2 size={12} className="text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 bg-slate-900 dark:bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight">Ready to support your next examination?</h3>
              <p className="text-white/60 text-base md:text-lg">Every project has unique requirements. Let us provide you with a tailored manpower strategy.</p>
            </div>
            <Link href="/services" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-primary dark:bg-white dark:text-primary hover:scale-105 px-8 md:px-12 py-3.5 md:py-5 rounded-full font-bold transition-all text-sm md:text-lg shadow-2xl flex items-center justify-center gap-3">
                Get Expert Consultation
                <ArrowRight size={18} className="md:size-5" />
              </button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] border border-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
