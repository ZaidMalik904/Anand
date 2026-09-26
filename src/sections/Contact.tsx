"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 dark:bg-muted/5 relative overflow-x-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Connect With Us</h2>
            <h3 className="text-4xl font-bold font-poppins mb-6">Ready to Start Your <span className="text-gradient">Next Project?</span></h3>
            <p className="text-lg text-foreground/70 mb-12">
              Our team of experts is ready to help you scale your technical and operational infrastructure. Reach out for a consultation.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Phone />, title: "Call Us", content: "+91 98112 29664", sub: "Mon-Fri, 9am - 6pm", color: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" },
                { icon: <Mail />, title: "Email Us", content: "anandsindhuenterprises@gmail.com", sub: "Quick response guaranteed", color: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" },
                { icon: <MapPin />, title: "Visit Us", content: " LG Floor, E-238-239, Amar Colony, Lajpat Nagar IV, New Delhi-110024", sub: "Corporate Headquarters", color: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm mt-1`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">{item.title}</h4>
                    <div className="min-h-[1.5rem]">
                      {item.title === "Call Us" ? (
                        <a href={`tel:${item.content.replace(/\s+/g, '')}`} className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors block">
                          {item.content}
                        </a>
                      ) : item.title === "Email Us" ? (
                        <a href={`mailto:${item.content}`} className="text-[13px] sm:text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors break-all block leading-relaxed">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 leading-tight">
                          {item.content}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-4 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] border border-primary/10 shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full bg-white dark:bg-white/5 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60 ml-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="info@Example.com"
                    className="w-full bg-white dark:bg-white/5 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold opacity-60 ml-1">Service Required</label>
                <select className="w-full bg-white dark:bg-slate-800 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white">
                  <option value="" className="text-slate-900">Select a service</option>
                  <option value="cctv-surveillance" className="text-slate-900">CCTV & Live Surveillance</option>
                  <option value="biometric-frs" className="text-slate-900">Biometric & FRS Authentication</option>
                  <option value="frisking-security" className="text-slate-900">Frisking & Security Staff</option>
                  <option value="jammers" className="text-slate-900">RF Jammers & Signal Blockers</option>
                  <option value="manpower" className="text-slate-900">Trained Technical Manpower</option>
                  <option value="other" className="text-slate-900">Other Enterprise Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold opacity-60 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white dark:bg-white/5 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
