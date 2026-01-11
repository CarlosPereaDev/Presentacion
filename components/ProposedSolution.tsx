
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, FileText, LayoutDashboard, ArrowRight } from 'lucide-react';
import { SlideProps } from '../types';

const ProposedSolution: React.FC<SlideProps> = () => {
  return (
    <div className="w-full flex flex-col h-full justify-center relative overflow-hidden">
      {/* Animated Arrows Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <motion.div
          className="w-full h-full text-white"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          animate={{ y: [0, -30] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-4 block">05 | Solución Propuesta</span>
        <h2 className="text-5xl font-outfit font-bold">Evolución <span className="text-industrial-orange">Tecnológica</span></h2>
        <p className="text-slate-400 mt-4 text-xl">De la gestión arcaica a la automatización inteligente</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-4 relative z-10">
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 glass p-10 rounded-[2.5rem] border-red-500/10 bg-red-500/[0.02]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-red-500/10">
              <FileText className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-bold text-red-500">El Pasado (Legacy)</h3>
              <p className="text-xs text-red-500/60 uppercase font-bold tracking-widest">Movildata / Excel</p>
            </div>
          </div>

          <ul className="space-y-6">
            {[
              "Interfaces saturadas y difíciles de leer",
              "Silos de información (WhatsApp + Papel)",
              "Retrasos en facturación por pérdida de albaranes",
              "Soporte técnico lento y reactivo",
              "Nula adaptabilidad móvil"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400">
                <XCircle className="w-5 h-5 text-red-500/50 mt-1 shrink-0" />
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connector */}
        <div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-4 glass rounded-full"
          >
            <ArrowRight className="w-8 h-8 text-industrial-orange" />
          </motion.div>
        </div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5 glass p-10 rounded-[2.5rem] border-turquoise-neon/30 bg-turquoise-neon/[0.02] shadow-2xl shadow-turquoise-neon/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-turquoise-neon/10">
              <LayoutDashboard className="w-8 h-8 text-turquoise-neon" />
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-bold text-turquoise-neon">Solución AutoNet</h3>
              <p className="text-xs text-turquoise-neon/60 uppercase font-bold tracking-widest">Plataforma Integral</p>
            </div>
          </div>

          <ul className="space-y-6">
            {[
              "Fuente Única de Verdad (SSOT) para toda la flota",
              "Digitalización 100% (Adiós al Papel)",
              "Acceso basado en Roles (SuperAdmin/Jefe/Worker)",
              "Escalabilidad horizontal con infraestructura Cloud",
              "Diseño centrado en el usuario (UX)"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-turquoise-neon mt-1 shrink-0" />
                <span className="text-lg font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProposedSolution;
