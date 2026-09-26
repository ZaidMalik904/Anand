"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  Globe,
  Send,
  ShieldCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98112 29664",
      sub: "Available 10:00 AM - 6:00 PM (Mon-Fri)",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "anandsindhuenterprises@gmail.com",
      sub: "Response time: Within 24-48 Hours",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: MapPin,
      title: "Head Office",
      detail: "LG Floor, E-238-239, Amar Colony, Lajpat Nagar IV, New Delhi, South East Delhi, Delhi - 110024",
      sub: "India - 110001",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <TopNavbar />
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-40 pb-14 md:pt-38 md:pb-22 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Globe className="w-[800px] h-[800px] absolute -right-40 -top-40 text-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto border border-white/20 mb-4"
          >
            <Headphones className="w-10 h-10 text-secondary" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none"
          >
            Get In <span className="text-secondary italic">Touch.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg md:text-2xl font-manrope font-medium"
          >
            Have questions or facing technical issues? Our support team is here to help you navigate your enterprise needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 pt-5 -mt-16 mb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl shadow-primary/5 border border-slate-100 dark:border-white/5 space-y-8 hover:translate-y-[-10px] transition-all group"
            >
              <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <method.icon className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{method.title}</h3>
                {method.title === "Call Us" ? (
                  <div className="space-y-2">
                    <a href={`tel:${method.detail.replace(/\s+/g, '')}`} className="text-2xl font-poppins font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary transition-colors block">
                      {method.detail}
                    </a>
                    <a
                      href="https://wa.me/919555067817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors mt-1"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                ) : method.title === "Email Support" ? (
                  <a href={`mailto:${method.detail}`} className="text-2xl font-poppins font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary transition-colors break-all">
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-2xl font-poppins font-bold text-slate-900 dark:text-white tracking-tight">{method.detail}</p>
                )}
                <p className="mt-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase leading-relaxed tracking-wider">{method.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split Form Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-slate-100 dark:border-white/5 space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
              Drop Us <br />
              <span className="text-primary italic">A Line</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Submit your query directly and track status.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700 dark:text-white"
                  placeholder="Technical Inquiry"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700 dark:text-white"
                placeholder="info@essindia.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
              <textarea
                name="message"
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border-none px-6 py-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold text-slate-700 dark:text-white min-h-[150px]"
                placeholder="How can we help you today?"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                Submit Ticket <Send className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919555067817"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3"
              >
                Chat on WhatsApp <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              </a>
            </div>
          </form>
        </motion.div>

        {/* Info Side */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-10">
            {[
              {
                icon: Clock,
                title: "Operating Hours",
                desc: "Our core support team operates from Monday to Friday, 10:00 AM to 6:00 PM (IST). However, technical tickets can be submitted 24/7.",
                color: "bg-blue-100/10 text-blue-600"
              },
              {
                icon: ShieldCheck,
                title: "Secure Communication",
                desc: "We use end-to-end encryption for all support communications. Your data integrity is our top priority.",
                color: "bg-emerald-100/10 text-emerald-600"
              },
              {
                icon: MessageSquare,
                title: "Support Desk",
                desc: "Existing clients can access real-time status through their dedicated dashboard for immediate assistance.",
                color: "bg-amber-100/10 text-amber-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tight text-xl">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-manrope">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary p-12 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <p className="text-secondary font-black uppercase tracking-widest text-[10px] mb-4">Enterprise Support</p>
            <h3 className="text-3xl font-poppins font-black uppercase tracking-tight mb-6 leading-tight">Request a Venue <br /> Audit Report</h3>
            <p className="text-white/60 font-manrope mb-8 leading-relaxed">
              Are you a government body or examination agency? Request a detailed venue capability and audit report for your next project.
            </p>
            <button className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-secondary pb-1 hover:text-secondary transition-colors flex items-center gap-2 group">
              Audit Portal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
