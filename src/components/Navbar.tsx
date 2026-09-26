"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import EnquiryModal from "./EnquiryModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
      <nav
        className={cn(
          "fixed top-10 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled
            ? "bg-white dark:bg-slate-900 border-b border-primary/10 shadow-2xl py-3"
            : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 relative overflow-hidden rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="ASE Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg md:text-xl tracking-tight leading-none text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                ANAND SINDHU ENTERPRISES
              </span>
              <span className="text-[10px] md:text-[11px] font-medium text-primary uppercase tracking-[0.15em] mt-1 opacity-80">
                Examination Support Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-foreground/10 mx-2" />
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
            >
              Enquiry
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden glass border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEnquiryModalOpen(true);
                }}
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold mt-2"
              >
                Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
