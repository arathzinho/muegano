"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
    const [timeCDMX, setTimeCDMX] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTimeCDMX(
                now.toLocaleTimeString("es-MX", {
                    timeZone: "America/Mexico_City",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand / Logo */}
                <div className="pointer-events-auto flex items-center gap-4 px-4 py-2.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-bold tracking-widest text-sm uppercase text-white font-mono">
                        MUÉGANO
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">|</span>
                    <span className="font-mono text-xs text-zinc-400">
                        MEX [CDMX // GDL] {timeCDMX && `• ${timeCDMX}`}
                    </span>
                </div>

                {/* Links editoriales */}
                <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-xl text-xs font-mono uppercase tracking-wider text-zinc-400">
                    <a href="#manifiesto" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                        01 // Manifiesto
                    </a>
                    <a href="#capacidades" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                        02 // Capacidades
                    </a>
                    <a href="#casos" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                        03 // Casos
                    </a>
                    <a href="#contacto" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                        04 // Enlace
                    </a>
                </nav>

                {/* CTA Directo */}
                <div className="pointer-events-auto">
                    <a
                        href="https://wa.me/525624860041"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-xl shadow-amber-400/10"
                    >
                        Línea Directa
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </header>
    );
}