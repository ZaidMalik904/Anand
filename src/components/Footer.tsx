"use client";

import Link from "next/link";
import { Globe, ArrowRight, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 pr-4">
            <Link href="/" className="flex items-start gap-5 mb-8 group">
              <div className="w-16 h-16 shrink-0 relative overflow-hidden rounded-2xl shadow-xl transition-transform group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="ASE Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-poppins font-bold text-xl md:text-2xl tracking-tight leading-none text-white mb-2 group-hover:text-primary transition-colors">
                  ANAND SINDHU ENTERPRISES
                </span>
                <span className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] opacity-80">
                  Examination Support Solutions
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Redefining enterprise excellence through advanced technical services, high-security digital assessment logistics, and nationwide operational infrastructure. We empower examination agencies and government bodies with reliable manpower and technical expertise for secure conduct across 28 states in India.
            </p>
            <div className="flex gap-4 pt-6">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook group-hover:text-white text-white/60"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram group-hover:text-white text-white/60"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10 group">
                <Globe size={18} className="group-hover:text-white text-white/60" />
              </Link>
              <Link href="https://wa.me/919555067817" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle group-hover:text-white text-white/60"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact us", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div className="text-white/60 text-sm leading-relaxed">
                  <span className="text-white font-semibold block mb-1">Headquarters</span>
                  LG Floor, E-238-239, Amar Colony, Lajpat Nagar IV, New Delhi, South East Delhi, Delhi - 110024
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-primary shrink-0 mt-1" size={20} />
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold block mb-1">Phone</span>
                  <a href="tel:+919811229664" className="hover:text-secondary transition-colors">+91 98112 29664</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-primary shrink-0 mt-1" size={20} />
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold block mb-1">Email</span>
                  <a href="mailto:anandsindhuenterprises@gmail.com" className="hover:text-secondary transition-colors">
                    anandsindhuenterprises@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p className="text-center md:text-left order-2 md:order-1">
            © 2026 Examination Support Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 order-1 md:order-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
