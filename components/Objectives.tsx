
import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Smartphone, Zap } from 'lucide-react';
import { SlideProps } from '../types';

const ObjectiveCard = ({ icon: Icon, title, subtitle, desc, colorClass, iconColorClass, delay }: { icon: any, title: string, subtitle: string, desc: string, colorClass: string, iconColorClass: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="group relative h-full"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl`} />
    <div className="glass p-8 rounded-[2rem] border border-white/5 relative h-full flex flex-col hover:border-white/20 transition-colors bg-slate-900/40">

      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl ${colorClass.replace('from-', 'bg-').split(' ')[0]}/10 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${iconColorClass}`} />
        </div>
        <span className="text-5xl font-outfit font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
          0{Math.round((delay - 0.2) * 5 + 1)}
        </span>
      </div>

      <h3 className="text-3xl font-outfit font-bold text-white mb-2">{title}</h3>
      <p className="text-xs uppercase tracking-widest font-bold mb-4 opacity-70" style={{ color: 'var(--token-color)' }}>{subtitle}</p>

      <p className="text-slate-400 font-jakarta leading-relaxed text-lg font-light">
        {desc}
      </p>

      <div className={`mt-auto pt-6 w-full flex justify-end`}>
        <div className={`h-1 rounded-full ${colorClass.replace('from-', 'bg-').split(' ')[0]} w-12 group-hover:w-full transition-all duration-500`} />
      </div>
    </div>
  </motion.div>
);

const Objectives: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-4 lg:px-12">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-turquoise-neon opacity-20 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-turquoise-neon animate-pulse" />
          <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">03 | Objetivos</span>
        </div>

        <h2 className="text-5xl lg:text-7xl font-outfit font-bold text-white tracking-tight">
          Objetivos <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-neon to-blue-500">Estratégicos</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
          Redefiniendo estándares operativos a través de tres pilares de innovación.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
        <ObjectiveCard
          icon={Gauge}
          title="Control en Tiempo Real"
          subtitle="Claridad Operativa"
          desc="Eliminando el 'Caos de Excel'. Transicionamos de rastros de papel fragmentados a un centro de comando unificado y en tiempo real que vincula la central con cada conductor al instante."
          colorClass="from-turquoise-neon via-teal-500 to-transparent"
          iconColorClass="text-turquoise-neon"
          delay={0.2}
        />
        <ObjectiveCard
          icon={Smartphone}
          title="UX Moderna"
          subtitle="Experiencia Nativa"
          desc="Una interfaz Dark Mode diseñada para reducir la fatiga visual. Botones grandes para entornos difíciles, siguiendo estrictamente principios mobile-first."
          colorClass="from-industrial-orange via-orange-500 to-transparent"
          iconColorClass="text-industrial-orange"
          delay={0.4}
        />
        <ObjectiveCard
          icon={Zap}
          title="Rendimiento"
          subtitle="Core Performance"
          desc="Construido sobre arquitectura SPA de alta velocidad. Priorizamos la disponibilidad inmediata de datos (LCP/TBT) para asegurar que el sistema siga el ritmo de la flota."
          colorClass="from-purple-500 via-indigo-500 to-transparent"
          iconColorClass="text-purple-400"
          delay={0.6}
        />
      </div>
    </div>
  );
};

export default Objectives;
