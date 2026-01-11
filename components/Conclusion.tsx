
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Milestone, Globe2, ChevronRight } from 'lucide-react';
import { SlideProps } from '../types';

const FutureCard = ({ title, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-4 p-5 glass rounded-2xl border-white/5 group"
  >
    <div className="p-3 rounded-xl bg-industrial-orange/10 border border-industrial-orange/20 text-industrial-orange group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <span className="font-outfit font-bold text-white">{title}</span>
    <ChevronRight className="w-4 h-4 text-slate-600 ml-auto" />
  </motion.div>
);

const Conclusion: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative overflow-hidden">
      {/* Moving Road Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 perspective-500">
        <div className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] bg-[linear-gradient(0deg,transparent_24%,rgba(13,148,136,.3)_25%,rgba(13,148,136,.3)_26%,transparent_27%,transparent_74%,rgba(13,148,136,.3)_75%,rgba(13,148,136,.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(13,148,136,.3)_25%,rgba(13,148,136,.3)_26%,transparent_27%,transparent_74%,rgba(13,148,136,.3)_75%,rgba(13,148,136,.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px] transform -translate-x-1/2 -translate-y-1/2 rotate-x-60 animate-[gridMove_20s_linear_infinite]" />
        <style>{`
          @keyframes gridMove {
            0% { transform: translate(-50%, -50%) rotateX(60deg) translateY(0); }
            100% { transform: translate(-50%, -50%) rotateX(60deg) translateY(50px); }
          }
        `}</style>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-orange/10 rounded-full border border-industrial-orange/20"
          >
            <Milestone className="w-4 h-4 text-industrial-orange" />
            <span className="text-xs uppercase tracking-widest font-bold text-industrial-orange">16 | Conclusiones</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-outfit font-bold">
            El Futuro <br />
            es <span className="text-turquoise-neon">Autónomo</span>.
          </h2>

          <p className="text-xl text-slate-400 font-jakarta leading-relaxed max-w-xl">
            AutoNet sienta las bases para una logística sin fricción. Hemos eliminado el papel, centralizado la información y empoderado a los conductores con tecnología.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Próximos Pasos (Roadmap 2026)</h3>
          <FutureCard title="IA de Rutas Predictivas (Machine Learning)" icon={BrainCircuit} delay={0.2} />
          <FutureCard title="App Móvil Nativa (React Native)" icon={Globe2} delay={0.4} />
          <FutureCard title="Integración ERP (SAP/Navision)" icon={Milestone} delay={0.6} />
          <FutureCard title="Comercialización SaaS Nacional" icon={Globe2} delay={0.8} />
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
