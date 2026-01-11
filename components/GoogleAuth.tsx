
import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, Lock, Zap, Smartphone } from 'lucide-react';
import { SlideProps } from '../types';

const GoogleAuth: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-8 relative">
            {/* BG Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl w-full glass rounded-[3rem] p-12 border-white/10 bg-slate-900/60 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-8">
                    <div>
                        <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">08 | Acceso Google</span>
                        <h2 className="text-4xl font-outfit font-bold text-white mb-4">Google <span className="text-blue-400">Identity</span></h2>
                        <p className="text-slate-400 leading-relaxed">
                            Hemos eliminado las barreras de entrada. Con la integración nativa de Google, el acceso es instantáneo, seguro y sin contraseñas que olvidar.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-colors">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Lock className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold text-white">Seguridad OAuth 2.0</h4>
                                <p className="text-xs text-slate-400 mt-1">Delegamos la seguridad de credenciales en la infraestructura de clase mundial de Google.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-colors">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400"><Zap className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold text-white">Onboarding Instantáneo</h4>
                                <p className="text-xs text-slate-400 mt-1">Un toque para registrarse. Reduce la fricción de alta de usuarios en un 90%.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {/* Mock Google Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center bg-white text-slate-700 px-8 py-4 rounded-full font-roboto font-medium text-lg shadow-xl hover:shadow-2xl transition-all mb-8 overflow-hidden"
                    >
                        <div className="mr-4">
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <span>Continuar con Google</span>

                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 text-slate-500 text-sm"
                    >
                        <Smartphone className="w-4 h-4" />
                        <span>Optimizado para Móviles Android & iOS</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default GoogleAuth;
