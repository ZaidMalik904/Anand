"use client";

import React, { useState } from 'react';
import { Target, Eye, Award, ShieldCheck, Globe, Zap, Cpu, Briefcase, ArrowRight, CheckCircle2, Lock, Users, Map, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const director = {
    name: "Shree Lokesh Choudhary",
    role: "Director",
    image: "/director.jpeg",
    bio: [
      "Shree Lokesh Choudhary is a visionary leader and accomplished professional serving as the Director of Anand Sindhu Enterprise, an organization recognized for delivering reliable and technology-driven solutions in the field of CBT (Computer Based Test) examination services. Under his dynamic leadership, the organization has established a strong reputation for excellence, professionalism, and innovation in examination management and technical support services.",
      "With extensive experience in software solutions, CBT exam execution, technical manpower management, and resource coordination, Shree Lokesh Choudhary has played a key role in building a robust operational framework capable of handling large-scale examination projects efficiently and securely. His expertise lies in managing end-to-end CBT examination processes, including software deployment, system setup, technical infrastructure management, candidate support, and seamless exam execution.",
      "Anand Sindhu Enterprise, under his guidance, has successfully provided skilled technical manpower and resource support for various educational institutions, government organizations, and recruitment agencies. The organization is committed to maintaining high standards of transparency, accuracy, and technological advancement in every project undertaken.",
      "Known for his strong leadership qualities, strategic planning abilities, and problem-solving approach, Shree Lokesh Choudhary believes in delivering quality services with dedication and integrity. His commitment towards innovation and operational excellence has helped the organization grow steadily and earn the trust of clients across multiple sectors.",
      "Apart from his professional achievements, he is also appreciated for his team-oriented mindset and his ability to motivate professionals to work with discipline, efficiency, and responsibility. His vision continues to drive Anand Sindhu Enterprise towards greater success in the field of digital examination systems, software services, and technical resource management."
    ]
  };

  const teamMembers = [
    {
      name: "Anuj Singh",
      role: "Project Head",
      image: "/projecthead.jpeg",
      shortDesc: "Experienced professional specializing in CBT examination operations and project management with expertise in managing large-scale examination processes.",
      fullProfile: {
        bio: "Experienced professional specializing in CBT examination operations and project management with expertise in managing large-scale examination processes from planning to execution. Proven ability to coordinate with examination conducting authorities, manage operational teams, and ensure seamless conduct of examinations in compliance with organizational and regulatory standards. Possesses strong leadership and communication skills.",
        keyCompetenciesTitle: "Hands-on experience in:",
        keyCompetencies: [
          "Managing end-to-end CBT examination operations",
          "Coordinating with examination conducting bodies and stakeholders",
          "Conducting and supervising SSA training programs",
          "Handling operational planning and execution across examination centers",
          "Monitoring examination processes and compliance standards",
          "Managing managerial and operational activities efficiently",
          "Team coordination and resource management",
          "Troubleshooting operational challenges during examinations",
          "Ensuring smooth candidate management and examination workflow",
          "Maintaining operational reports and documentation"
        ],
        footer: "Known for strong organizational capabilities, quick decision-making, and the ability to manage high-pressure examination environments while ensuring quality and operational excellence."
      }
    },
    {
      name: "Jay Prakash Kumar",
      role: "Technical Head",
      image: "/technicalhead.jpeg",
      shortDesc: "Spearheads the company's technology vertical, ensuring the seamless integration of software, hardware, and technical workforce.",
      fullProfile: {
        bio: "As the Technical Head of Anand Sindhu Enterprise, Jay Prakash Kumar spearheads the company’s technology vertical, ensuring the seamless integration of software, hardware, and human resources for high-stakes computer-based examinations. With a deep command over scalable IT infrastructure and exam delivery systems, he plays a pivotal role in positioning Anand Sindhu Enterprise as a trusted partner for recruitment boards, educational institutions, and government bodies.",
        keyCompetenciesTitle: "Core Responsibilities:",
        keyCompetencies: [
          "CBT Software Solutions: Leads the design, deployment, and security auditing of proprietary CBT platforms that support multi-location, multi-session exams with features like real-time proctoring, question randomization, and instant result generation.",
          "Technical Manpower Management: Recruits, trains, and oversees teams of system administrators, lab technicians, and on-site IT support staff to ensure zero downtime during exam delivery.",
          "Resource Orchestration: Manages end-to-end technical resources – from server provisioning and bandwidth optimization to power backup and hardware compatibility testing.",
          "Quality Assurance & Security: Implements robust data encryption, biometric authentication, and anti-malpractice measures aligned with global CBT standards.",
          "Scalability: Successfully scaled infrastructure to support concurrent exams across 50+ centers with 10,000+ candidates per shift.",
          "Manpower Efficiency: Developed a 'Technical Resource Bank' – a ready pool of certified CBT engineers and troubleshooters deployable within 48 hours.",
          "Innovation: Introduced a lightweight, browser-based CBT launcher that reduced installation issues by 70% on legacy systems."
        ],
        footer: "Jay Prakash Kumar believes in a proactive maintenance culture, where technical teams are trained to anticipate failures rather than just respond to them. Under his guidance, Anand Sindhu Enterprise has earned a reputation for delivering secure, high-volume CBT exams with consistent reliability."
      }
    },
    {
      name: "H. N. Harsh",
      role: "Technical Staff",
      image: "/technicalstaff.jpeg",
      shortDesc: "Result-oriented and highly capable Technical Specialist with extensive experience in executing end-to-end CBT lifecycles.",
      fullProfile: {
        bio: "Result-oriented and highly capable Technical Specialist with extensive experience in executing end-to-end Computer-Based Testing (CBT) lifecycles, enterprise software deployment, and infrastructure management. Proven track record of managing high-stakes examinations securely, maintaining robust server-client architectures, and leading specialized technical manpower teams. Exceptional troubleshooting skills in high-pressure environments, ensuring zero-downtime operations and strict adherence to organizational compliance and data security standards.",
        keyCompetenciesTitle: "Key Competencies:",
        keyCompetencies: [
          "End-to-End CBT Lifecycle Execution",
          "Enterprise Software Deployment & Infrastructure Management",
          "Robust Server-Client Architectures Maintenance",
          "Specialized Technical Manpower Leadership",
          "High-Pressure Troubleshooting & Adherence to Compliance/Security Standards"
        ],
        footer: "Dedicated to implementing robust cybersecurity protocols, LAN/WAN configurations, and database administration to support reliable exam workflows."
      }
    }
  ];

  const stats = [
    { label: "Operational Reliability", value: "100%", icon: ShieldCheck },
    { label: "Trained Teams", value: "Expert", icon: Award },
    { label: "Secure Conduct", value: "Verified", icon: Zap },
    { label: "Nationwide Execution", value: "Active", icon: Globe },
  ];

  const highlights = [
    {
      title: "Reliable Manpower",
      desc: "Backed by structured field coordination and rigorous training."
    },
    {
      title: "Fast Response",
      desc: "Rapid deployment capability for mission-critical exam-day operations."
    },
    {
      title: "Client-Focused",
      desc: "Service with practical execution standards tailored to agency needs."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <TopNavbar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-14 md:pt-38 md:pb-22 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1454165833767-027508496b4c?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary"></div>

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
            <span>About The</span>
            <span className="text-secondary italic">Company</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-manrope font-medium"
          >
            A professional partner for CBT operations across India.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none">
              Examination <br />
              <span className="text-primary italic">Support Solutions</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p className="font-medium text-slate-900 dark:text-slate-200">
              Examination Support Solutions is positioned as an examination support company focused on operational reliability, secure conduct, and structured manpower deployment for computer-based tests across India.
            </p>
            <p>
              With experience in examination logistics and center management, the organization supports agencies through trained teams, process coordination, and field execution built for high-volume and location-diverse exam environments.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Operational support for examination agencies and center networks.",
                "Deployment readiness for both urban and remote examination locations.",
                "Focus on secure workflows, timely execution, and exam integrity."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-slate-900 shadow-2xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="CBT Operations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 p-4 md:p-8 bg-primary text-white rounded-[1.5rem] md:rounded-[2.5rem] z-20 shadow-2xl">
            <Cpu className="w-5 h-5 md:w-8 md:h-8 text-secondary mb-2" />
            <p className="text-base md:text-2xl font-poppins font-black tracking-tighter leading-tight uppercase">Operational <br /> Excellence</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-white/5 border border-white/10 rounded-[3rem] space-y-6"
          >
            <Eye className="w-12 h-12 text-secondary" />
            <h3 className="text-3xl font-poppins font-black text-white uppercase tracking-tight">Our Vision</h3>
            <p className="text-white/60 text-lg leading-relaxed font-manrope">
              To become one of India’s most trusted examination support service providers, setting new benchmarks in operational reliability and security.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 bg-primary rounded-[3rem] space-y-6 text-white shadow-2xl shadow-primary/20"
          >
            <Target className="w-12 h-12 text-secondary" />
            <h3 className="text-3xl font-poppins font-black uppercase tracking-tight">Our Mission</h3>
            <p className="text-white/80 text-lg leading-relaxed font-manrope">
              To provide dependable manpower, technical expertise, and operational support for secure and smooth examination conduct nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white dark:bg-slate-950 py-24 border-y border-primary/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4 group"
              >
                <div className="w-16 h-16 bg-primary/5 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <stat.icon className="w-8 h-8 text-primary dark:text-secondary group-hover:text-white" />
                </div>
                <p className="text-5xl font-poppins font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team Work" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=800&auto=format&fit=crop"
                    alt="Practical Standards"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                    <Briefcase className="w-10 h-10 text-secondary mb-4" />
                    <p className="font-bold text-lg leading-tight uppercase tracking-tighter">Practical <br /> Standards</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Nationwide Support"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                    <Globe className="w-10 h-10 text-primary mb-4" />
                    <p className="font-bold text-lg leading-tight uppercase tracking-tighter">Nationwide <br /> Support</p>
                  </div>
                </div>
                <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                Why Choose <br />
                <span className="text-primary italic">Our Services</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Lock, title: "Secure Workflows", desc: "Enterprise-grade encryption and protocol management." },
                { icon: Users, title: "Verified Manpower", desc: "Rigorous background checks and technical training." },
                { icon: Map, title: "Nationwide Scale", desc: "Operational readiness in 28+ states across India." },
                { icon: Clock, title: "24/7 Support", desc: "Dedicated helpdesk for real-time exam troubleshooting." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center font-bold text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white shadow-lg transition-all shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-manrope font-semibold leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director Spotlight Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-slate-900 shadow-2xl relative z-10">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0"></div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black text-primary dark:text-secondary uppercase tracking-[0.3em]">{director.role}</span>
              <h2 className="text-3xl md:text-5xl font-poppins font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                {director.name}
              </h2>
              <div className="w-24 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed font-manrope font-semibold">
              {director.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="bg-slate-100 dark:bg-slate-900/40 py-24 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
              Meet Our <span className="text-primary italic">Leadership</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              The driving force behind secure and reliable examination conduct.
            </p>
            <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl shadow-primary/5 hover:translate-y-[-8px] transition-all duration-300 group flex flex-col justify-between p-8"
              >
                <div className="space-y-6">
                  {/* Image wrapper */}
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-slate-800 w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-primary dark:text-secondary uppercase tracking-[0.2em]">{member.role}</span>
                    <h3 className="text-2xl font-poppins font-black text-slate-900 dark:text-white tracking-tight leading-tight pb-1 line-clamp-1">{member.name}</h3>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 font-manrope font-semibold text-sm leading-relaxed line-clamp-3">{member.shortDesc}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-10 w-full py-4 bg-slate-50 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-slate-700 dark:text-slate-200 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all border border-slate-100 dark:border-white/5"
                >
                  View Full Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Profile Viewer */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-4xl max-h-[85vh] relative shadow-2xl border border-slate-100 dark:border-white/5 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors z-50 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto w-full h-full p-8 md:p-12 scroll-smooth">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Profile Image & Basic Info */}
                  <div className="space-y-6">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 w-full">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-primary dark:text-secondary uppercase tracking-[0.2em]">
                        {selectedMember.role}
                      </span>
                      <h3 className="text-3xl font-poppins font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                        {selectedMember.name}
                      </h3>
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="md:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Biography</h4>
                      <p className="text-slate-600 dark:text-slate-300 font-manrope leading-relaxed text-sm font-semibold">
                        {selectedMember.fullProfile.bio}
                      </p>
                    </div>

                    {selectedMember.fullProfile.keyCompetencies.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {selectedMember.fullProfile.keyCompetenciesTitle}
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {selectedMember.fullProfile.keyCompetencies.map((comp: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-slate-600 dark:text-slate-300 font-manrope text-sm leading-relaxed font-semibold">
                                {comp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedMember.fullProfile.footer && (
                      <p className="text-slate-500 dark:text-slate-400 font-manrope italic text-sm border-l-4 border-primary/20 pl-4 py-1 leading-relaxed font-semibold">
                        {selectedMember.fullProfile.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-secondary p-12 md:p-20 rounded-[4rem] text-primary relative overflow-hidden shadow-2xl shadow-secondary/20">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-poppins font-black uppercase tracking-tighter leading-tight">Ready to support your next examination?</h2>
              <p className="text-primary/70 font-manrope font-semibold text-lg">Let's discuss how our technical expertise can support your enterprise goals.</p>
            </div>
            <Link href="/contact">
              <button className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all flex items-center gap-3 group whitespace-nowrap shadow-xl">
                Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
