
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe, Zap, GitBranch } from 'lucide-react';
import { SlideProps } from '../types';

const VercelInfo: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-4 relative">
            {/* Triangle BG */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M50 0 L100 100 L0 100 Z" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 relative z-10"
            >
                <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-4 block">12 | Infraestructura Vercel</span>
                <h2 className="text-6xl font-black font-outfit text-white tracking-tight mb-4">VERCEL</h2>
                <p className="text-xl text-slate-400 font-light">Infraestructura de Frontend sin servidor (Serverless)</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl relative z-10">
                {[
                    {
                        icon: Globe,
                        title: "Red Edge Global",
                        desc: "Contenido servido desde la ubicación más cercana al usuario para una velocidad instantánea."
                    },
                    {
                        icon: GitBranch,
                        title: "Deploy Automático",
                        desc: "Integración continua (CI/CD) con GitHub. Cada 'push' es una nueva versión en producción."
                    },
                    {
                        icon: Zap,
                        title: "Rendimiento",
                        desc: "Optimización automática de imágenes y assets estáticos. Core Web Vitals en verde."
                    },
                    {
                        icon: Cloud,
                        title: "Escalabilidad",
                        desc: "Cero configuración. Escala automáticamente desde 1 hasta millones de visitas."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="glass p-6 rounded-3xl border-white/10 bg-black/40 hover:border-white/30 transition-all text-center group"
                    >
                        <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default VercelInfo;
