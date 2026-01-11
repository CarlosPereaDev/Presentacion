
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

import Cover from './components/Cover';
import Index from './components/Index';
import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Objectives from './components/Objectives';
import MockupMobile from './components/MockupMobile';
import MockupDesktop from './components/MockupDesktop';
import ProposedSolution from './components/ProposedSolution';
import SystemDesign from './components/SystemDesign';
import DatabaseSchema from './components/DatabaseSchema';
import ProblemAnalysis from './components/ProblemAnalysis';
import Technologies from './components/Technologies';
import VideoDemo from './components/VideoDemo';
import Conclusion from './components/Conclusion';
import Acknowledgments from './components/Acknowledgments';

import StyleGuide from './components/StyleGuide';
import Roles from './components/Roles';
import GoogleAuth from './components/GoogleAuth';
import VercelInfo from './components/VercelInfo';
import Economics from './components/Economics';

const slides = [
  Cover,
  Index,
  AboutMe,
  Introduction,
  Objectives,
  ProblemAnalysis,
  ProposedSolution,
  StyleGuide,
  Roles,
  GoogleAuth,
  MockupMobile,
  MockupDesktop,
  SystemDesign,
  VercelInfo,
  DatabaseSchema,
  Economics,
  Technologies,
  Conclusion,
  Acknowledgments
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
    zIndex: 1
  }),
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 1,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  })
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    if (currentSlide + newDirection < 0 || currentSlide + newDirection >= slides.length) return;
    setDirection(newDirection);
    setCurrentSlide(prev => prev + newDirection);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  return (
    <div className="relative h-screen w-screen bg-slate-950 font-jakarta text-slate-200 overflow-hidden flex flex-col selection:bg-turquoise-neon/30">
      {/* --- GLOBAL DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Deep Gradient Globs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-turquoise-neon/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-industrial-orange/5 rounded-full blur-[150px]"
        />

        {/* 3D Moving Perspective Grid */}
        <div className="absolute inset-0 opacity-[0.07] perspective-1000">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] transform rotate-x-60 scale-150 animate-[gridFlow_20s_linear_infinite]" />
          <style>{`
             @keyframes gridFlow {
               0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
               100% { transform: perspective(500px) rotateX(60deg) translateY(100px); }
             }
           `}</style>
        </div>

        {/* Floating "Dust" Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{ width: '2px', height: '2px' }}
          />
        ))}
      </div>

      {/* --- HEADER --- */}
      <header className="relative z-50 px-8 py-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md bg-slate-950/20">
        <div className="flex items-center gap-4">
          <img src="/Logo.svg" alt="AutoNet Logo" className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(13,148,136,0.4)]" />
          <span className="font-outfit font-bold text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 leading-none">AutoNet</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Mini Progress Dots */}
          <div className="hidden md:flex gap-1.5">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-8 bg-turquoise-neon' : 'w-1.5 bg-white/20'}`}
              />
            ))}
          </div>

          <div className="flex gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="opacity-30">/</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </header>

      {/* --- MAIN SLIDE AREA --- */}
      <main className="flex-1 relative z-10 overflow-hidden flex items-center justify-center p-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center absolute inset-0 p-4 lg:p-12"
          >
            <div className="w-full max-w-7xl h-full flex flex-col justify-center">
              {React.createElement(slides[currentSlide], { isActive: true })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- FOOTER CONTROLS --- */}
      <footer className="relative z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-t from-slate-950/80 to-transparent">
        <div className="flex gap-4">
          <button
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className={`group p-4 rounded-full glass border border-white/10 transition-all hover:bg-white/10 hover:border-turquoise-neon/30 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed`}
          >
            <ChevronLeft className="w-5 h-5 text-slate-300 group-hover:text-turquoise-neon transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1}
            className={`group p-4 rounded-full glass border border-white/10 transition-all hover:bg-white/10 hover:border-turquoise-neon/30 active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed`}
          >
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-turquoise-neon transition-colors" />
          </button>
        </div>

        {/* Global Progress Line defined at bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-industrial-orange to-turquoise-neon shadow-[0_0_20px_rgba(13,148,136,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>


      </footer>
    </div>
  );
};

export default App;
