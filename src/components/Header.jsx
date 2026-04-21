import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Skills", "Experience"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-heading tracking-tight flex items-center gap-1">
          <span className="text-white">Akhilesh</span>
          <span className="w-2 h-2 rounded-full bg-blue-500 mt-1"></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/919074311597?text=Hi%20Akhilesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Fullscreen Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-0 left-0 w-full h-[100dvh] bg-gray-950 px-6 z-[60] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center items-center w-full px-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold font-heading text-white hover:text-blue-400 transition-colors tracking-tight"
                >
                  {item}
                </a>
              ))}
              <div className="pt-8 w-full max-w-xs">
                <a 
                  href="https://wa.me/919074311597?text=Hi%20Akhilesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center w-full py-4 rounded-full bg-blue-600 text-white font-medium text-lg transition-colors hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
