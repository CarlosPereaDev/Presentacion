
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize, Volume2, Film } from 'lucide-react';
import { SlideProps } from '../types';

const VideoDemo: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-turquoise-neon/20 rounded-full blur-[150px]"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-4 block">15 | Demo en Vivo</span>
                    <h2 className="text-5xl font-outfit font-bold mb-2">Demo en <span className="text-industrial-orange">Vivo</span></h2>
                    <p className="text-slate-400 font-jakarta text-lg">Sistema AutoNet en Acción</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-video glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden group"
                >
                    {/* Placeholder for Video - In a real app, <video> tag would go here */}
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                        {/* Grid Lines Overlay */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                        />

                        {/* Central Play Button */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer relative z-20 group-hover:bg-turquoise-neon group-hover:border-turquoise-neon transition-all duration-300"
                        >
                            <Play className="w-10 h-10 text-white fill-white ml-2" />
                            {/* Pulse Effect */}
                            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-50" />
                        </motion.div>

                        <span className="absolute bottom-1/2 translate-y-20 font-mono text-slate-500 text-sm tracking-widest mt-8">CLICK PARA INICIAR DEMO</span>
                    </div>

                    {/* Video Controls Decoration */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-8 py-4 gap-6">
                        <Play className="w-5 h-5 text-white fill-white" />
                        <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[35%] bg-turquoise-neon" />
                        </div>
                        <span className="font-mono text-xs text-white">02:14 / 04:30</span>
                        <Volume2 className="w-5 h-5 text-white" />
                        <Maximize className="w-5 h-5 text-white" />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-md">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-red-500 uppercase">GRABANDO</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default VideoDemo;
