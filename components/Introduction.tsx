
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Zap } from 'lucide-react';
import { SlideProps } from '../types';
import { AutoNetLogo } from './Cover';

const Introduction: React.FC<SlideProps> = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-4">
      {/* Background Map Animation */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-turquoise-neon stroke-current stroke-2 fill-none">
          <path d="M50,250 L950,250 M50,500 L950,500 M50,750 L950,750 M250,50 L250,950 M500,50 L500,950 M750,50 L750,950" />
          <motion.circle
            animate={{ r: [8, 15, 8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            cx="250" cy="500" r="10" className="fill-industrial-orange"
          />
          <motion.circle
            animate={{ r: [6, 12, 6], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            cx="750" cy="250" r="10" className="fill-turquoise-neon"
          />
          <path d="M250,500 Q 500,500 750,250" className="stroke-turquoise-neon stroke-dasharray-[15,15] stroke-[3]" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block glass px-12 py-8 rounded-[3rem] border-turquoise-neon/20 bg-slate-950/60 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AutoNetLogo className="w-48 lg:w-72" />
            <div className="text-left border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
              <span className="text-xs font-bold tracking-widest text-turquoise-neon uppercase mb-2 block">02 | Introducción</span>
              <h1 className="text-6xl font-outfit font-black tracking-tighter text-white">AUTONET</h1>
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-industrial-orange fill-industrial-orange" />
                <p className="text-sm uppercase tracking-[0.5em] text-industrial-orange font-black">Hub Logístico Evolutivo</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-5xl lg:text-8xl font-outfit font-bold text-white leading-tight tracking-tight">
            Logística, <span className="text-turquoise-neon">Refinada</span>.
          </h2>
          <p className="text-xl lg:text-3xl text-slate-400 font-jakarta max-w-4xl mx-auto leading-relaxed font-light">
            Diseñado para modernizar la columna vertebral del transporte en el Levante español. AutoNet evoluciona la logística tradicional hacia un ecosistema digital integral. Unifica el seguimiento de flotas en tiempo real, gestión de personal y analítica operativa, transformando datos brutos en <span className="text-white font-medium">capacidad estratégica</span> para la era moderna.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-4 glass px-8 py-5 rounded-[2rem] border-white/5 bg-slate-900/40 hover:border-turquoise-neon/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-turquoise-neon/10 border border-turquoise-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-turquoise-neon" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Territorio</p>
              <span className="text-xl font-bold text-slate-200">Hub Logístico Levante</span>
            </div>
          </div>

          <div className="flex items-center gap-4 glass px-8 py-5 rounded-[2rem] border-white/5 bg-slate-900/40 hover:border-industrial-orange/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-industrial-orange/10 border border-industrial-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-industrial-orange" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Filosofía</p>
              <span className="text-xl font-bold text-slate-200">Operaciones sin Fricción</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
