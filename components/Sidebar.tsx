import React from 'react';
import { CategoryFilter } from '../types';

interface SidebarProps {
    filter: CategoryFilter;
    setFilter: (filter: CategoryFilter) => void;
    onAdminClick: () => void;
    visitCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ filter, setFilter, onAdminClick, visitCount }) => {
    const navItems: { label: string; icon: string; value: CategoryFilter }[] = [
        { label: 'Visão Geral', icon: 'dashboard', value: 'TUDO' },
        { label: 'Motos', icon: 'two_wheeler', value: 'MOTOS' },
        { label: 'Carros', icon: 'directions_car', value: 'CARROS' },
        { label: 'Promoções', icon: 'local_offer', value: 'PROMOÇÕES' },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-[#050505] border-r border-white/10 z-50">
            {/* Logo Area */}
            <div className="p-8 border-b border-white/5">
                <h1 className="flex flex-col">
                    <span className="text-2xl font-heading font-bold italic text-white tracking-tighter">
                        ALFA <span className="text-red-600">MOTOS</span>
                    </span>
                    <span className="text-[10px] text-white/40 tracking-[0.2em] font-light uppercase">
                        Catálogo v2.0
                    </span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => setFilter(item.value)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${filter === item.value
                            ? 'bg-red-600 text-white shadow-lg shadow-red-900/20'
                            : 'text-white/50 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <span className={`material-symbols-outlined ${filter === item.value ? 'fill' : ''}`}>
                            {item.icon}
                        </span>
                        <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>

                        {filter === item.value && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                    </button>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 mt-auto border-t border-white/5 space-y-4">


                {/* Status / Copyright */}
                <div className="px-2 pt-2">
                    <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></span>
                        <span>Sistema Online</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-xs">visibility</span>
                        <span>{visitCount.toLocaleString('pt-BR')} Visitas</span>
                    </div>

                    <p className="mt-4 text-[9px] text-white/10 text-center uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} AC SOLUCOES 98 981489667
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
