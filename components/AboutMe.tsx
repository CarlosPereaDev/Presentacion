
import React from 'react';
import { motion } from 'framer-motion';
import { Code, User, Rocket, ExternalLink } from 'lucide-react';
import { SlideProps } from '../types';

const AboutMe: React.FC<SlideProps> = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative group"
      >
        {/* Glow behind the photo */}
        <div className="absolute inset-0 bg-turquoise-neon/20 rounded-full blur-[100px] group-hover:bg-turquoise-neon/30 transition-all duration-700" />

        <div className="relative glass rounded-[3rem] p-10 border-turquoise-neon/20 shadow-2xl flex flex-col items-center text-center">
          <div className="relative mb-10">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-8 border-turquoise-neon/30 p-2 bg-slate-900 shadow-[0_0_50px_rgba(13,148,136,0.2)]">
              {/* Circular cropped image */}
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Web Developer"
                  className="w-full h-full object-cover scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full"><User class="w-24 h-24 text-slate-700" /></div>';
                  }}
                />
              </div>
            </div>
            {/* Status badge */}
            <div className="absolute bottom-4 right-4 bg-turquoise-neon text-slate-950 text-xs font-black px-4 py-1.5 rounded-full shadow-lg border-4 border-slate-950">
              AVAILABLE
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-outfit font-bold mb-3 text-white">Web Developer</h2>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-10"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10">
          <User className="w-5 h-5 text-turquoise-neon" />
          <span className="text-xs uppercase tracking-[0.2em] font-black text-turquoise-neon">01 | About Me</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-outfit font-bold leading-tight text-white tracking-tight">
            Code with <br />
            <span className="text-industrial-orange">Purpose</span>.
          </h1>

          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed font-jakarta font-light">
            My passion lies in bridging the gap between <span className="text-white font-medium">heavy industry</span> and <span className="text-white font-medium">digital agility</span>. I build software that works as hard as the people who use it.
          </p>
        </div>

        <div className="space-y-4">
          <div className="group flex items-start gap-6 p-6 glass rounded-3xl border-white/5 hover:border-turquoise-neon/30 transition-all">
            <div className="p-4 rounded-2xl bg-turquoise-neon/10 text-turquoise-neon group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-xl text-white mb-2">My Philosophy</h3>
              <p className="text-slate-500 leading-relaxed">Modernizing legacy systems through scalable architectures and performance-centric development.</p>
            </div>
          </div>

          <div className="group flex items-start gap-6 p-6 glass rounded-3xl border-white/5 hover:border-industrial-orange/30 transition-all">
            <div className="p-4 rounded-2xl bg-industrial-orange/10 text-industrial-orange group-hover:scale-110 transition-transform">
              <Code className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-xl text-white mb-2">Technologies</h3>
              <p className="text-slate-500 leading-relaxed">Specialized in React, Laravel, and Cloud Infrastructure to deliver robust end-to-end solutions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
