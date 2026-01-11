
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Calendar } from 'lucide-react';
import { SlideProps } from '../types';

export const AutoNetLogo = ({ className = "w-64 lg:w-[500px]" }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img src="/Logo.svg" alt="AutoNet Logo" className="w-full h-auto drop-shadow-[0_0_15px_rgba(13,148,136,0.3)]" />
  </div>
);

const Cover: React.FC<SlideProps> = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-turquoise-neon/10 rounded-full blur-[150px] -z-10"
      />

      <div className="text-center space-y-16 z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-12"
        >
          <AutoNetLogo />

          <div className="space-y-6 relative">
            <div className="relative">
              <h1 className="font-outfit font-bold text-7xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 relative z-10 pb-4">
                AutoNet
              </h1>
              {/* Decorative Scan Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-turquoise-neon/50 to-transparent"
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0.5, 1.2, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Minimal Author Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center pt-6"
            >
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default group">
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange animate-pulse" />
                <span className="text-slate-400 font-mono text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  Carlos Perea <span className="text-white/20 mx-2">|</span> 2026
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
