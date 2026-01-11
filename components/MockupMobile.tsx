
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Zap, WifiOff, MapPin, CheckCircle2, Menu, Bell, Navigation, Calendar, User, Package, ChevronRight, Maximize2, X } from 'lucide-react';
import { SlideProps } from '../types';

const MockupMobile: React.FC<SlideProps> = () => {
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
                            src="/mockup_mobile.png"
                            alt="AutoNet Mobile Full"
                            className="h-full w-auto max-w-full object-contain drop-shadow-2xl"
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

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center items-center w-full z-50 group cursor-zoom-in"
                        onClick={() => setIsExpanded(true)}
                    >
                        <img
                            src="/mockup_mobile.png"
                            alt="AutoNet Mobile App Interface"
                            className="w-full h-auto max-w-[500px] drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        />

                        {/* Hover Hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black/60 backdrop-blur-sm p-4 rounded-full border border-white/20">
                                <Maximize2 className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-industrial-orange/20 blur-[100px] -z-10 group-hover:opacity-50 transition-opacity" />
                    </motion.div>
                </div>

                {/* Right Side: Features List */}
                <div className="space-y-8">
                    {/* Standard Header Style */}
                    <div className="flex items-center gap-3 mb-4">
                        <Smartphone className="w-5 h-5 text-industrial-orange" />
                        <span className="text-industrial-orange font-bold tracking-[0.3em] uppercase text-xs">
                            09 | Interfaz Móvil
                        </span>
                    </div>

                    <h2 className="text-5xl font-outfit font-bold text-white leading-tight">
                        Logística en <br />
                        <span className="text-industrial-orange">Tiempo Real.</span>
                    </h2>

                    <p className="text-lg text-slate-400 font-jakarta font-light leading-relaxed max-w-lg">
                        Una experiencia nativa diseñada para conductores. Sin fricción, sin papel y con sincronización instantánea con la central.
                    </p>


                </div>

            </div>
        </div>
    );
};

export default MockupMobile;
