import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-3xl flex flex-col items-center pt-12 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 text-blue-300 font-medium text-xs sm:text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Founder @ Dravion
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight text-center">
            Hi, I'm <span className="text-gradient-premium">Akhilesh.</span><br />
            <span className="text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block">I build digital experiences.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed mix-blend-plus-lighter text-center">
            Freelance Web & Mobile App Developer. I architect scalable, beautiful, and highly performant applications across all devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a 
              href="https://wa.me/919074311597?text=Hi%20Akhilesh!%20Could%20you%20share%20some%20of%20your%20project%20demos%3F"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-full glass-card text-gray-300 font-medium">
                <Monitor size={18} className="text-indigo-400" />
                <span>Web</span>
              </div>
              <div className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-full glass-card text-gray-300 font-medium">
                <Smartphone size={18} className="text-violet-400" />
                <span>Mobile</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
