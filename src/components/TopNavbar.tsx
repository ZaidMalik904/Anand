"use client";

import { useEffect, useState } from "react";
import { Mail, Calendar, Clock, Phone } from "lucide-react";

export default function TopNavbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full bg-accent dark:bg-slate-950 text-white py-2 px-6 border-b border-white/5 fixed top-0 left-0 right-0 z-[60] h-10 flex items-center justify-between text-[10px] md:text-xs font-medium">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <Mail size={12} className="text-secondary" />
            <a href="mailto:anandsindhuenterprises@gmail.com" className="hover:text-secondary transition-colors whitespace-nowrap">
              anandsindhuenterprises@gmail.com
            </a>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
          </div>
          
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-secondary" />
            <a href="tel:+919811229664" className="hover:text-secondary transition-colors whitespace-nowrap">
              +91 98112 29664
            </a>
          </div>
        </div>

        {/* Right: Live Date and Time */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Calendar size={12} className="text-secondary" />
            <span className="whitespace-nowrap">{dateTime.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-1.5 md:gap-2">
            <Clock size={12} className="text-secondary" />
            <span className="tabular-nums uppercase whitespace-nowrap">{dateTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
