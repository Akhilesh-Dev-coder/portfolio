import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Lead Developer & Founder",
      company: "Dravion",
      duration: "5 Months Ago — Present",
      description: "Founded a premium service-based agency delivering scalable digital solutions. Leading architecture and full-stack development for diverse client portfolios across Web and Mobile domains.",
      highlight: true
    },
    {
      role: "Freelance Developer",
      company: "Independent",
      duration: "2023 — Present",
      description: "Began my professional journey by delivering custom web applications, mobile platforms, and high-performance React architectures for independent clients.",
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="mb-16 md:text-center text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 tracking-tight"
          >
            Professional <span className="text-gradient-premium">Journey.</span>
          </motion.h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[23px] md:before:ml-auto md:before:-translate-x-px md:before:left-1/2 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-white/5 before:via-blue-500/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group"
            >
              {/* Timeline Node */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full glass-panel border-white/20 absolute left-0 md:left-1/2 md:-translate-x-1/2 shrink-0 group-hover:scale-110 transition-transform duration-500 z-10">
                <div className={`w-3 h-3 rounded-full ${exp.highlight ? 'bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]' : 'bg-gray-400'}`}></div>
              </div>

              {/* Experience Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 glass-card p-6 md:p-8">
                <span className="text-blue-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-2 block">
                  {exp.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 tracking-tight">
                  {exp.role}
                </h3>
                <h4 className="text-gray-400 font-medium mb-4 text-sm sm:text-base">
                  {exp.company}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-pretty">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
