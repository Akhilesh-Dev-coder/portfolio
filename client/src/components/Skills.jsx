import React from "react";
import { motion } from "framer-motion";
import { Layers, Server, Layout, Database, Code2, Cpu } from "lucide-react";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const skills = [
    {
      title: "MERN Stack Dev",
      description:
        "Full-stack capabilities using MongoDB, Express.js, React, and Node.js to build scalable applications.",
      icon: <Server className="text-purple-400" size={32} />,
      color: "from-purple-500/20 to-fuchsia-500/5",
      highlight: true,
    },
    {
      title: "Frontend Engineering",
      description:
        "Crafting beautiful, responsive UIs with React, Tailwind CSS, and Framer Motion.",
      icon: <Layout className="text-blue-400" size={32} />,
      color: "from-blue-500/20 to-cyan-500/5",
    },
    {
      title: "Database Design",
      description:
        "Architecting efficient data models with NoSQL (MongoDB) and SQL databases.",
      icon: <Database className="text-emerald-400" size={32} />,
      color: "from-emerald-500/20 to-teal-500/5",
    },
    {
      title: "3D Web Experiences",
      description:
        "Building immersive interactive 3D web graphics using Three.js and React Three Fiber.",
      icon: <Layers className="text-rose-400" size={32} />,
      color: "from-rose-500/20 to-orange-500/5",
    },
    {
      title: "API Development",
      description:
        "Designing robust RESTful and GraphQL APIs for seamless client-server communication.",
      icon: <Code2 className="text-amber-400" size={32} />,
      color: "from-amber-500/20 to-yellow-500/5",
    },
    {
      title: "Architecture & DevOps",
      description:
        "Deploying and maintaining cloud infrastructure, CI/CD pipelines, and app optimization.",
      icon: <Cpu className="text-indigo-400" size={32} />,
      color: "from-indigo-500/20 to-blue-500/5",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit designed to bring complex ideas to life
            through code.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`glass-card p-8 relative overflow-hidden group ${
                skill.highlight
                  ? "ring-1 ring-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10">
                <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
