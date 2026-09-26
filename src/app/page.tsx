"use client";

import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/sections/ImageCarousel";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Stats from "@/sections/Stats";
import NationalCoverage from "@/sections/NationalCoverage";
import Contact from "@/sections/Contact";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-32 overflow-x-hidden"
    >
      <TopNavbar />
      <Navbar />
      <ImageCarousel />
      <About />
      <Services />
      <Process />
      <Stats />
      <NationalCoverage />
      <Contact />
      <Footer />
    </motion.main>
  );
}
