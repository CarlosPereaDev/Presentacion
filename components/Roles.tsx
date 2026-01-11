
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Briefcase, HardHat, Check } from 'lucide-react';
import { SlideProps } from '../types';

const RoleCard = ({ icon: Icon, title, color, permissions, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="group relative overflow-hidden glass p-6 lg:p-8 rounded-3xl border-white/10 hover:border-white/20 transition-all bg-slate-900/40 flex-1 flex flex-col"
    >
        <div className={`absolute top-0 right-0 p-32 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity ${color.replace('text-', 'bg-')}`} />

        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color.replace('text-', 'bg-').replace('400', '500/10')} border border-white/5`}>
            <Icon className={`w-7 h-7 ${color}`} />
        </div>

        <h3 className="text-2xl font-outfit font-bold text-white mb-2">{title}</h3>
        <div className={`h-1 w-12 rounded-full ${color.replace('text-', 'bg-')} mb-6`} />

        <ul className="space-y-3">
            {permissions.map((perm: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
                    {perm}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Roles: React.FC<SlideProps> = () => {
    return (
        <div className="w-full h-full flex flex-col p-4 lg:p-8">
            <div className="mb-8 text-center">
                <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">07 | Roles de Usuario</span>
                <h2 className="text-4xl lg:text-5xl font-outfit font-bold mb-4">Roles del <span className="text-purple-400">Sistema</span></h2>
                <p className="text-slate-400 font-light">Estructura jerárquica con permisos granulares para garantizar la seguridad y operatividad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full flex-1">

                <RoleCard
                    icon={ShieldAlert}
                    title="Super Admin"
                    color="text-red-400"
                    permissions={[
                        "Control total del SaaS",
                        "Gestión de Organizaciones (Altas/Bajas)",
                        "Acceso a métricas globales del sistema",
                        "Gestión de Facturación y Suscripciones",
                        "Mantenimiento de la base de datos"
                    ]}
                    delay={0.1}
                />

                <RoleCard
                    icon={Briefcase}
                    title="Jefe (Admin Org)"
                    color="text-purple-400"
                    permissions={[
                        "Gestión completa de su Organización",
                        "Alta y Baja de sus Trabajadores",
                        "Asignación y Supervisión de Tareas",
                        "Gestión de Flota (Vehículos/Maquinaria)",
                        "Visualización de Mapa en Tiempo Real"
                    ]}
                    delay={0.2}
                />

                <RoleCard
                    icon={HardHat}
                    title="Trabajador"
                    color="text-emerald-400"
                    permissions={[
                        "Acceso exclusivo a App Móvil",
                        "Recepción de Tareas asignadas",
                        "Reporte de estado (Inicio/Fin)",
                        "Registro de Ubicación GPS",
                        "Sin acceso a datos sensibles de otros"
                    ]}
                    delay={0.3}
                />

            </div>
        </div>
    );
};

export default Roles;
