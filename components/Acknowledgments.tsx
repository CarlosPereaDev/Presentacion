
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Heart } from 'lucide-react';
import { SlideProps } from '../types';

const Acknowledgments: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-12 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              opacity: Math.random() * 0.3,
              x: Math.random() * 1000,
              y: Math.random() * 800,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4 relative z-10"
      >
        <div className="w-24 h-24 glass rounded-3xl mx-auto flex items-center justify-center border-turquoise-neon/30 animate-bounce mb-8">
          <Heart className="w-10 h-10 text-turquoise-neon fill-turquoise-neon/20" />
        </div>
        <span className="text-slate-500 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">19 | Agradecimientos</span>
        <h1 className="text-6xl lg:text-8xl font-outfit font-bold tracking-tighter">
          Muchas <span className="text-turquoise-neon">Gracias</span>
        </h1>
        <p className="text-xl text-slate-400 font-jakarta tracking-wide">
          Por su atención y confianza en el proyecto AutoNet.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-[10px] uppercase tracking-widest text-slate-600 font-mono"
      >
        © 2026 AUTONET - TODOS LOS DERECHOS RESERVADOS | HECHO CON PASIÓN
      </motion.div>
    </div>
  );
};

export default Acknowledgments;
