
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Wallet, Activity, ArrowUpRight, ArrowDownRight, LineChart as LineChartIcon, BarChart3, Rocket, AlertTriangle } from 'lucide-react';
import { SlideProps } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area } from 'recharts';

const yearlyData = [
    { year: 'Año 1', ingresos: 23154, gastos: 23930, profit: -776 },
    { year: 'Año 2', ingresos: 27784, gastos: 25198, profit: 2586 },
    { year: 'Año 3', ingresos: 33341, gastos: 26738, profit: 6603 },
];

const treasuryData = [
    { month: 'M1', cash: 5940 },
    { month: 'M2', cash: 3914 },
    { month: 'M3', cash: 1953 },
    { month: 'M4', cash: -73 },
    { month: 'M5', cash: -226 },
    { month: 'M6', cash: -313 },
    { month: 'M7', cash: 383 },
    { month: 'M8', cash: 1080 },
    { month: 'M9', cash: 1841 },
    { month: 'M10', cash: 3562 },
    { month: 'M11', cash: 5283 },
    { month: 'M12', cash: 7068 },
];

const Economics: React.FC<SlideProps> = () => {
    const [chartTab, setChartTab] = useState<'profit' | 'treasury'>('profit');

    return (
        <div className="w-full h-full flex flex-col p-4 lg:p-8 relative overflow-hidden">
            <div className="mb-6 relative z-10 flex justify-between items-end">
                <div>
                    <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">14 | Viabilidad Económica</span>
                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold mb-2">Proyección <span className="text-emerald-400">Financiera</span></h2>
                    <p className="text-slate-400 max-w-2xl font-light">Análisis integral: Cuenta de Resultados, Tesorería y Balance.</p>
                </div>

                <div className="flex bg-white/5 rounded-lg p-1 gap-1">
                    <button
                        onClick={() => setChartTab('profit')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${chartTab === 'profit' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        <BarChart3 className="w-3 h-3" /> Resultados
                    </button>
                    <button
                        onClick={() => setChartTab('treasury')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${chartTab === 'treasury' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        <LineChartIcon className="w-3 h-3" /> Tesorería (Año 1)
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 h-full pb-0 flex-1">

                {/* KPI Cards Row */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[140px]">
                    {/* PRICING */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass p-4 rounded-2xl border-white/5 bg-slate-900/40 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Pricing (SaaS)</span>
                            <DollarSign className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-outfit text-white">19,99€<span className="text-xs font-normal text-slate-400">/Mes</span></div>
                            <div className="text-[10px] text-emerald-400 mt-1 flex justify-between">
                                <span>Plan Medium</span>
                                <span className="text-slate-500">Plus: 34,95€</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* BALANCE SHEET KPI */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass p-4 rounded-2xl border-white/5 bg-slate-900/40 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Patrimonio Neto</span>
                            <Wallet className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-outfit text-white">12.413€<span className="text-xs font-normal text-slate-400"> (Año 3)</span></div>
                            <div className="text-[10px] text-purple-400 mt-1 flex items-center gap-1">
                                <ArrowUpRight className="w-3 h-3" /> Crecimiento x3
                            </div>
                        </div>
                    </motion.div>

                    {/* NET PROFIT YEAR 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass p-4 rounded-2xl border-white/5 bg-slate-900/40 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Beneficio Neto (Año 3)</span>
                            <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-outfit text-white">+6.603€</div>
                            <div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
                                <ArrowUpRight className="w-3 h-3" /> Margen creciente
                            </div>
                        </div>
                    </motion.div>

                    {/* CASH FLOW CRUNCH */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass p-4 rounded-2xl border-white/5 bg-slate-900/40 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-10 bg-red-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Valle de la Muerte</span>
                            <Activity className="w-4 h-4 text-red-400" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-2xl font-bold font-outfit text-white">-313€<span className="text-xs font-normal text-slate-400"> (Mes 6)</span></div>
                            <div className="text-[10px] text-red-400 mt-1">
                                Punto crítico de caja
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Chart Area */}
                <div className="lg:col-span-2 glass p-6 rounded-3xl border-white/5 bg-slate-900/40 flex flex-col shadow-xl">
                    <div className="flex-1 w-full min-h-[180px]">
                        <ResponsiveContainer width="100%" height="100%">
                            {chartTab === 'profit' ? (
                                <BarChart data={yearlyData} barGap={4} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                    <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                        itemStyle={{ fontSize: '12px' }}
                                        formatter={(value: number) => [`${value.toLocaleString()}€`, '']}
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    />
                                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                    <Bar name="Ventas Netas" dataKey="ingresos" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={50} />
                                    <Bar name="Costes Totales" dataKey="gastos" fill="#f43f5e" radius={[4, 4, 0, 0]} maxBarSize={50} />
                                </BarChart>
                            ) : (
                                <AreaChart data={treasuryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                    <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                        itemStyle={{ fontSize: '12px', color: '#fff' }}
                                        formatter={(value: number) => [`${value.toLocaleString()}€`, 'Saldo Caja']}
                                    />
                                    <Area type="monotone" dataKey="cash" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCash)" strokeWidth={3} />
                                    {/* Critical Line at 0 */}
                                    <foreignObject x="0" y="72%" width="100%" height="1">
                                        <div className="w-full h-px bg-red-500/50 border-t border-dashed border-red-500" />
                                    </foreignObject>
                                </AreaChart>
                            )}
                        </ResponsiveContainer>
                    </div>

                    {/* Dynamic Footer based on Tab */}
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 flex justify-between items-center">
                        {chartTab === 'profit' ? (
                            <span>🚀 <strong className="text-white">Año 2:</strong> Punto de inflexión donde los beneficios superan los costes.</span>
                        ) : (
                            <span>⚠️ <strong className="text-white">Mes 4-6:</strong> Tensión de tesorería controlada mediante financiación inicial.</span>
                        )}
                    </div>
                </div>

                {/* Break-even Analysis Column */}
                <div className="glass p-6 rounded-3xl border-white/5 bg-slate-900/40 flex flex-col justify-between shadow-xl relative overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute top-0 right-0 p-16 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Umbral de Rentabilidad</h3>

                        <div className="space-y-6">
                            {/* Equation Items */}
                            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-slate-500 font-bold">Costes Fijos</span>
                                    <span className="text-xl font-mono text-white font-bold">1.770€</span>
                                </div>
                                <div className="text-slate-500 font-light text-2xl">/</div>
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] uppercase text-slate-500 font-bold">Precio (PV)</span>
                                    <span className="text-xl font-mono text-white font-bold">19,99€</span>
                                </div>
                            </div>

                            {/* Result */}
                            <div className="text-center py-2 relative">
                                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2">Punto de Equilibrio</span>
                                <div className="text-5xl font-outfit font-black text-white leading-none tracking-tight">
                                    89 <span className="text-xm font-medium text-slate-500">Servicios</span>
                                </div>
                                <span className="text-[10px] text-slate-500 block mt-2 opacity-60">(88,54 exactos)</span>
                            </div>

                            {/* Insight box */}
                            <div className="text-xs text-slate-300 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl leading-relaxed">
                                <strong className="text-emerald-400 block mb-1">Conclusión:</strong>
                                La cuenta de resultados entra en beneficios a partir del servicio Nº 89.
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Viabilidad</span>
                            <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                                <ArrowUpRight className="w-3 h-3" /> Alta
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Economics;
