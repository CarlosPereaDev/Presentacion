
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { SlideProps } from '../types';

const data = [
  { name: 'Excel/Papel', value: 65, color: '#F97316' },
  { name: 'Software Legacy', value: 25, color: '#64748b' },
  { name: 'Apps Modernas', value: 10, color: '#0D9488' },
];

const satisfactionData = [
  { name: 'Muy Insatisfecho', value: 45 },
  { name: 'Insatisfecho', value: 30 },
  { name: 'Neutral', value: 20 },
  { name: 'Satisfecho', value: 5 },
];

const ProblemAnalysis: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
      {/* Background Pulse */}
      <motion.div
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <div className="space-y-8 relative z-10">
        <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-4 block">04 | Análisis del Problema</span>
        <h2 className="text-5xl font-outfit font-bold">Análisis del <span className="text-industrial-orange">Mercado</span></h2>
        <p className="text-xl text-slate-400 leading-relaxed font-jakarta">
          El sector logístico en la zona de Alicante opera aún con un <span className="text-white font-bold">65% de procesos manuales</span>. Software legacy como "Movildata" se percibe como costoso y difícil de operar.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 glass rounded-2xl border-white/5"
          >
            <span className="text-4xl font-black text-industrial-orange">75%</span>
            <p className="text-xs text-slate-500 uppercase font-bold mt-2">Empresas con "Excel-Dependencia"</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 glass rounded-2xl border-white/5"
          >
            <span className="text-4xl font-black text-turquoise-neon">2.5h</span>
            <p className="text-xs text-slate-500 uppercase font-bold mt-2">Tiempo/Semana perdido en llamadas</p>
          </motion.div>
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        <div className="h-[300px] w-full glass p-6 rounded-3xl border-white/5">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-500">Adopción Tecnológica (Alicante)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={100} />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
              />
              <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20} animationDuration={2000}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 glass rounded-3xl border-white/5 flex items-center gap-8">
          <div className="h-24 w-24 shrink-0 relative">
            {/* Animated Pie Chart Placeholder (Recharts animates by default) */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                >
                  <Cell fill="#f43f5e" />
                  <Cell fill="#F97316" />
                  <Cell fill="#64748b" />
                  <Cell fill="#0D9488" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-outfit font-bold text-white mb-1">Feedback de Usuarios</h4>
            <p className="text-xs text-slate-400">"El software antiguo requiere demasiados clics. AutoNet es instantáneo."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemAnalysis;
