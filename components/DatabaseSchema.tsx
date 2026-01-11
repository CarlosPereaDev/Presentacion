
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, CheckSquare, Truck, Bell, Building2, Link } from 'lucide-react';
import { SlideProps } from '../types';

const SchemaCard = ({ icon: Icon, title, table, fields, relations, color, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors w-full group"
    >
        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
            <div className={`p-2.5 rounded-xl ${color.replace('text-', 'bg-').replace('500', '500/20')} ${color} ring-1 ring-white/5 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-outfit font-bold text-lg text-white leading-none">{title}</h3>
                <code className="text-[10px] text-slate-500 font-mono mt-1 block">table: {table}</code>
            </div>
        </div>

        <div className="space-y-4">
            <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">Key Columns</p>
                <div className="flex flex-wrap gap-2">
                    {fields.map((field: string, i: number) => (
                        <span key={i} className="px-2 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5">
                            {field}
                        </span>
                    ))}
                </div>
            </div>

            {relations && (
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1">
                        <Link className="w-3 h-3" /> Relations
                    </p>
                    <ul className="space-y-1">
                        {relations.map((rel: string, i: number) => (
                            <li key={i} className="text-[11px] text-slate-400 pl-2 border-l-2 border-slate-700">
                                {rel}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </motion.div>
);

const DatabaseSchema: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col p-4 lg:p-8">
            <div className="mb-8">
                <span className="text-turquoise-neon font-bold tracking-[0.3em] uppercase text-xs mb-2 block">13 | Base de Datos</span>
                <h2 className="text-4xl lg:text-5xl font-outfit font-bold mb-3">Esquema de <span className="text-industrial-orange">Datos</span></h2>
                <p className="text-slate-400 font-jakarta max-w-2xl leading-relaxed">
                    Una arquitectura robusta <strong>Multi-tenant</strong> que aísla los datos por organización, garantizando seguridad y escalabilidad.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                <SchemaCard
                    icon={Building2}
                    title="Organizaciones"
                    table="organizations"
                    fields={["id", "name", "code", "created_at"]}
                    relations={["1:N Usuarios (Cascada)", "1:N Tareas", "1:N Vehículos"]}
                    color="text-emerald-500"
                    delay={0.1}
                />

                <SchemaCard
                    icon={Users}
                    title="Usuarios y Roles"
                    table="users"
                    fields={["id", "organization_id", "name", "email", "role", "provider_id"]}
                    relations={["N:1 Organización", "1:N Tareas (Creador/Trabajador)", "1:N Notificaciones"]}
                    color="text-blue-500"
                    delay={0.2}
                />

                <SchemaCard
                    icon={CheckSquare}
                    title="Tareas"
                    table="tasks"
                    fields={["id", "organization_id", "title", "status", "priority", "assigned_to", "deadline"]}
                    relations={["N:1 Organización", "N:1 Usuario (Creador/Trabajador)", "N:1 Vehículo/Maq."]}
                    color="text-industrial-orange"
                    delay={0.3}
                />

                <SchemaCard
                    icon={Truck}
                    title="Vehículos y Maquinaria"
                    table="vehicles / machineries"
                    fields={["id", "organization_id", "name", "plate / serial_number", "current_mileage / hours", "status"]}
                    relations={["N:1 Organización", "1:N Historial Tareas"]}
                    color="text-indigo-500"
                    delay={0.4}
                />

                <SchemaCard
                    icon={Bell}
                    title="Notificaciones"
                    table="notifications"
                    fields={["id", "user_id", "type", "title", "read_at", "data"]}
                    relations={["N:1 Usuario", "Entrega Asíncrona"]}
                    color="text-pink-500"
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-dashed border-slate-700"
                >
                    <div className="text-center space-y-2">
                        <Database className="w-10 h-10 text-slate-600 mx-auto" />
                        <p className="text-slate-500 font-mono text-xs">
                            Impulsado por<br />
                            <strong className="text-slate-300 text-sm">MySQL 8.0 / TiDB</strong>
                        </p>
                        <div className="flex justify-center gap-2 mt-2">
                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-400">Soporte JSON</span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-400">Índice Espacial</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DatabaseSchema;
