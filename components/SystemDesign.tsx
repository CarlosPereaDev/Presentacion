
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, ArrowRight } from 'lucide-react';
import { SlideProps } from '../types';

const SystemDesign: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 lg:p-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-2 block">11 | Arquitectura</span>
        <h2 className="text-5xl font-outfit font-bold text-white mb-2">Diseño del <span className="text-industrial-orange">Sistema</span></h2>
        <p className="text-slate-400 font-light max-w-2xl">
          Arquitectura moderna y desacoplada para máxima escalabilidad y rendimiento.
        </p>
      </div>

      {/* 3-Column Simple Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 items-center">

        {/* FRONTEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="h-full max-h-[500px] glass rounded-[2rem] p-6 border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 relative overflow-hidden flex flex-col group hover:border-turquoise-neon/30 transition-all"
        >
          <div className="absolute top-0 right-0 p-24 bg-turquoise-neon/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-turquoise-neon/10 rounded-xl text-turquoise-neon border border-turquoise-neon/20">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Frontend</span>
              <h3 className="text-2xl font-bold font-outfit text-white">Cliente Web</h3>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Tecnologías</h4>
              <ul className="space-y-2 text-slate-400 font-mono text-xs">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-turquoise-neon rounded-full" />React</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-turquoise-neon rounded-full" />Vite</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-turquoise-neon rounded-full" />Tailwind CSS</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-turquoise-neon rounded-full" />Zustand</li>
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Despliegue</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-label="Vercel"><path d="M12 1L24 22H0L12 1Z" /></svg>
                <div>
                  <span className="block font-bold text-white text-sm">Vercel</span>
                  <span className="text-[10px] text-slate-500">Edge Network Global</span>
                </div>
              </div>
            </div>
          </div>
          {/* Arrow to Next */}
          <div className="hidden lg:block absolute top-1/2 -right-6 z-20 text-slate-600">
            <ArrowRight className="w-8 h-8" />
          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-full max-h-[500px] glass rounded-[2rem] p-6 border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 relative overflow-hidden flex flex-col group hover:border-industrial-orange/30 transition-all"
        >
          <div className="absolute top-0 right-0 p-24 bg-industrial-orange/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-industrial-orange/10 rounded-xl text-industrial-orange border border-industrial-orange/20">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Backend</span>
              <h3 className="text-2xl font-bold font-outfit text-white">API REST</h3>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Tecnologías</h4>
              <ul className="space-y-2 text-slate-400 font-mono text-xs">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-industrial-orange rounded-full" />Laravel</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-industrial-orange rounded-full" />Sanctum</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-industrial-orange rounded-full" />Eloquent</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-industrial-orange rounded-full" />Socialite</li>
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Despliegue</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M19 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zm-3 17h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V9h8v2z" /></svg>
                <div>
                  <span className="block font-bold text-white text-sm">Render</span>
                  <span className="text-[10px] text-slate-500">Web Service (Docker)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Arrow to Next */}
          <div className="hidden lg:block absolute top-1/2 -right-6 z-20 text-slate-600">
            <ArrowRight className="w-8 h-8" />
          </div>
        </motion.div>

        {/* DATABASE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="h-full max-h-[500px] glass rounded-[2rem] p-6 border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 relative overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all"
        >
          <div className="absolute top-0 right-0 p-24 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Persistencia</span>
              <h3 className="text-2xl font-bold font-outfit text-white">Base de Datos</h3>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Tecnologías</h4>
              <ul className="space-y-2 text-slate-400 font-mono text-xs">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />MySQL</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Transacciones ACID</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Soporte JSON</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Índice Espacial</li>
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/5">Despliegue</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-white font-black text-lg">TiDB</div>
                <div>
                  <span className="block font-bold text-white text-sm">TiDB Cloud</span>
                  <span className="text-[10px] text-slate-500">Serverless (AWS)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SystemDesign;
