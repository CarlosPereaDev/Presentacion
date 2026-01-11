
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Maximize2, X } from 'lucide-react';
import { SlideProps } from '../types';

const MockupDesktop: React.FC<SlideProps> = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden">
      {/* Full Screen Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-10 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src="/mockup_desktop.png"
              alt="AutoNet Desktop Full"
              className="w-full h-auto max-h-full object-contain drop-shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <motion.div
          className="w-full h-full text-white"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          animate={{ y: [0, -30] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Visual Description (Left) */}
        <div className="space-y-8 order-2 lg:order-1">

          {/* Standard Header Style */}
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-5 h-5 text-sky-400" />
            <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs">
              10 | Panel de Control Web
            </span>
          </div>

          <h2 className="text-5xl font-outfit font-bold text-white leading-tight">
            Control Total <br />
            <span className="text-sky-400">Centralizado.</span>
          </h2>

          <p className="text-slate-400 mt-4 text-xl font-light leading-relaxed max-w-lg">
            Un dashboard potente diseñado para la toma de decisiones. Gestiona flotas, asigna tareas y monitoriza métricas clave desde una sola pantalla.
          </p>


        </div>

        {/* Dashboard Mockup (Right) */}
        <div className="order-1 lg:order-2 perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full z-50 group cursor-zoom-in"
            onClick={() => setIsExpanded(true)}
          >
            <img
              src="/mockup_desktop.png"
              alt="AutoNet Desktop Dashboard"
              className="w-full h-auto drop-shadow-2xl rounded-xl"
            />
            {/* Hover Hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Maximize2 className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-6 bg-sky-500/10 blur-3xl rounded-full -z-10 opacity-60 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MockupDesktop;
