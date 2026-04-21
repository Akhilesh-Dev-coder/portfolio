import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Link as LinkIcon, FileText, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#070A12] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-blue-600/5 rounded-t-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold font-heading tracking-tight flex items-center gap-1">
              <span className="text-white">Akhilesh</span>
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-1"></span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Premium Web & Mobile Development.
            </p>
          </div>

          <div className="flex gap-4">
            {[Globe, LinkIcon, FileText, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all shadow-lg shadow-black/20"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Akhilesh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & <span className="text-blue-400">Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
