
import React from 'react';
import { motion } from 'framer-motion';
import { ListChecks } from 'lucide-react';
import { SlideProps } from '../types';

const sections = [
  "About Me",
  "Introduction",
  "Objectives",
  "Problem Analysis",
  "Proposed Solution",
  "Style Guide",
  "User Roles",
  "Google Sign-In",
  "Mobile Interface",
  "Web Dashboard",
  "Architecture",
  "Vercel Infrastructure",
  "Database",
  "Economic Viability",
  "Technologies",
  "Conclusion",
  "Acknowledgments"
];

const Index: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative overflow-hidden">
      {/* Animated Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          animate={{ x: [0, 40], y: [0, 40] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise-neon/10 rounded-full border border-turquoise-neon/20 mb-4">
          <ListChecks className="w-4 h-4 text-turquoise-neon" />
          <span className="text-xs uppercase tracking-widest font-bold text-turquoise-neon">Index</span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-outfit font-bold">Table of <span className="text-industrial-orange">Contents</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group flex items-center gap-6 p-4 glass rounded-2xl border-white/5 hover:border-turquoise-neon/30 transition-all cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-turquoise-neon/0 via-turquoise-neon/5 to-turquoise-neon/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="text-2xl font-outfit font-black text-white/10 group-hover:text-turquoise-neon transition-colors">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-xl font-outfit font-medium text-slate-300 group-hover:text-white transition-colors tracking-wide relative z-10">
              {section}
            </span>
            <div className="ml-auto w-8 h-px bg-white/5 group-hover:bg-turquoise-neon transition-all" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Index;
