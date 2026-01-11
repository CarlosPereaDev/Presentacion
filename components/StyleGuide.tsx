
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Type } from 'lucide-react';
import { SlideProps } from '../types';

const StyleGuide: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col p-4 lg:p-8">
            <div className="mb-10 text-center">
                <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-2 block">06 | Guía de Estilo</span>
                <h2 className="text-5xl lg:text-6xl font-outfit font-bold mb-4">Guía de <span className="text-industrial-orange">Estilo</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto font-light">
                    Un lenguaje visual diseñado para evocar modernidad tecnológica, limpieza y precisión industrial.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">

                {/* TYPOGRAPHY */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                        <Type className="w-6 h-6 text-turquoise-neon" />
                        <h3 className="text-2xl font-outfit font-bold">Tipografía</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border-white/5 bg-slate-900/50">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-4xl font-outfit font-bold text-white">Outfit</span>
                                <span className="text-xs font-mono text-slate-500">Google Font</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4">Utilizada para Títulos y Encabezados.</p>
                            <div className="text-xs text-slate-500 bg-black/30 p-3 rounded font-mono border border-white/5 leading-relaxed">
                                <strong className="text-white block mb-1">Motivo:</strong>
                                Geométrica, moderna y de alto impacto visual. Sus formas limpias se asocian con empresas tecnológicas y startups.
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border-white/5 bg-slate-900/50">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-4xl font-jakarta font-medium text-white">Plus Jakarta</span>
                                <span className="text-xs font-mono text-slate-500">Google Font</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4">Utilizada para Cuerpo de texto y UI.</p>
                            <div className="text-xs text-slate-500 bg-black/30 p-3 rounded font-mono border border-white/5 leading-relaxed">
                                <strong className="text-white block mb-1">Motivo:</strong>
                                Excelente legibilidad en pantallas pequeñas (dashboard/móvil). Alta altura de la 'x' y aperturas modernas.
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* COLORS */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                        <Palette className="w-6 h-6 text-industrial-orange" />
                        <h3 className="text-2xl font-outfit font-bold">Paleta de Color</h3>
                    </div>

                    <div className="space-y-4">
                        {/* DARK */}
                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                            <div className="w-16 h-16 rounded-lg bg-slate-950 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Slate 950 (Fondo)</h4>
                                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                                    Base oscura para reducir la fatiga visual (Dark Mode) y ahorrar batería en dispositivos móviles OLED.
                                </p>
                            </div>
                        </div>

                        {/* NEON TURQUOISE */}
                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="w-16 h-16 rounded-lg bg-[#00f2ea] shadow-[0_0_20px_rgba(0,242,234,0.4)] shrink-0" />
                            <div>
                                <h4 className="text-[#00f2ea] font-bold text-lg">Turquoise Neon</h4>
                                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                                    Color primario derivado del <strong>Logo</strong>. Evoca energía limpia, datos y tecnología futurista. Transmite confianza y fiabilidad técnica.
                                </p>
                            </div>
                        </div>

                        {/* INDUSTRIAL ORANGE */}
                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="w-16 h-16 rounded-lg bg-[#ff4d00] shadow-[0_0_20px_rgba(255,77,0,0.4)] shrink-0" />
                            <div>
                                <h4 className="text-[#ff4d00] font-bold text-lg">Industrial Orange</h4>
                                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                                    Color de acento del <strong>Logo</strong>. Representa la maquinaria y acción. Usado para destacar elementos críticos sobre el fondo oscuro.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default StyleGuide;
