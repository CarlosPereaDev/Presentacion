
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Smartphone, Monitor, Globe, Database } from 'lucide-react';
import { SlideProps } from '../types';

const TechIcon = ({ name, logo, delay, imgClass = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring' }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-4 p-6 glass rounded-3xl border-white/10 group cursor-default hover:bg-white/5 bg-slate-900/40"
  >
    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all shadow-lg border border-white/5 h-24 w-24 flex items-center justify-center">
      <img src={logo} alt={name} className={`w-16 h-16 object-contain drop-shadow-lg filter group-hover:brightness-110 transition-all ${imgClass}`} />
    </div>
    <span className="font-outfit font-bold text-sm text-slate-300 tracking-wider uppercase text-center">{name}</span>
  </motion.div>
);

const Technologies: React.FC<SlideProps> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full relative">
      {/* Animated Rings Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
        <motion.div
          className="w-[600px] h-[600px] border border-turquoise-neon rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] border border-dashed border-industrial-orange rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-4 block">15 | Tecnologías</span>
        <h2 className="text-5xl font-outfit font-bold">Stack <span className="text-turquoise-neon">Tecnológico</span></h2>
        <p className="text-slate-400 mt-4 text-xl">Impulsado por las mejores herramientas del mercado.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
        <TechIcon name="React" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" delay={0.1} />
        <TechIcon name="Laravel" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" delay={0.2} />
        <TechIcon name="MySQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" delay={0.3} />
        <TechIcon name="Tailwind CSS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" delay={0.4} />
        <TechIcon name="Leaflet" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1200px-Leaflet_logo.svg.png" delay={0.5} />
        <TechIcon name="GitHub" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" delay={0.6} imgClass="invert" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex gap-3 text-xs font-mono text-slate-500 bg-white/5 px-6 py-3 rounded-full border border-white/5 relative z-10"
      >
        <span>DESARROLLADO CON: NODE.JS v20</span>
        <span className="opacity-20">|</span>
        <span>CI/CD: GITHUB ACTIONS</span>
        <span className="opacity-20">|</span>
        <span>EDITOR: VS CODE</span>
      </motion.div>
    </div>
  );
};

export default Technologies;
