
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layers } from 'lucide-react';
import { SlideProps } from '../types';

const Mockups: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Standard Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <motion.div
          className="w-full h-full text-white"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          animate={{ y: [0, -30] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Layers className="w-5 h-5 text-turquoise-neon" />
          <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs">
            09-10 | Experiencia Total
          </span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white leading-tight">
          Ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-neon to-blue-500">AutoNet</span>
        </h2>
        <p className="text-slate-400 mt-4 text-xl font-light max-w-2xl mx-auto">
          Control absoluto desde la oficina y agilidad total en el terreno. Una plataforma, dos experiencias optimizadas.
        </p>
      </div>

      {/* Composition Container */}
      <div className="relative z-10 w-full max-w-[1400px] flex items-center justify-center h-[500px] lg:h-[600px]">

        {/* Desktop Mockup (Back/Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 lg:left-[5%] top-10 w-[85%] lg:w-[75%] z-10"
        >
          <div className="relative group">
            <img
              src="/mockup_desktop.png"
              alt="AutoNet Desktop"
              className="w-full h-auto drop-shadow-2xl rounded-lg group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Desktop Glow */}
            <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full -z-10 opacity-60" />
          </div>
        </motion.div>

        {/* Mobile Mockup (Front/Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[5%] lg:right-[15%] bottom-0 lg:bottom-[-5%] w-[25%] lg:w-[20%] z-20"
        >
          <div className="relative group">
            <img
              src="/mockup_mobile.png"
              alt="AutoNet Mobile"
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:scale-[1.05] transition-transform duration-500 hover:-translate-y-2"
            />
            {/* Mobile Glow */}
            <div className="absolute -inset-10 bg-industrial-orange/20 blur-3xl rounded-full -z-10 opacity-60" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Mockups;
