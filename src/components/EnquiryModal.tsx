"use client";

import { X, Send, User, Mail, Phone, BookOpen, GraduationCap } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
        <div
          className="bg-white dark:bg-slate-900 w-full max-w-[440px] max-h-[90vh] rounded-[2rem] shadow-2xl border border-primary/10 overflow-hidden pointer-events-auto relative flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
            <div className="mb-8">
              <div className="w-16 h-16 relative overflow-hidden rounded-xl shadow-md mb-4 border border-primary/10">
                <img
                  src="/logo.png"
                  alt="ASE Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold font-poppins text-slate-900 dark:text-white">Enterprise Enquiry</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Interested in our support solutions? Let's discuss your operational requirements.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Contact Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                  <input
                    type="email"
                    required
                    placeholder="info@Example.com"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Service Required</label>
                <div className="relative">
                  <BookOpen size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                  <input type="text" required placeholder="Service Required" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-slate-900 dark:text-white" />
                </div>

              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group mt-6"
              >
                Submit Enquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
