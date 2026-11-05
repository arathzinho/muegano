"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
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
        <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
            {/* Marca & Hora */}
            <div className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                <span className="font-bold text-xs tracking-wider text-neutral-900 uppercase">
                    MUÉGANO
                </span>
                <span className="text-xs text-neutral-500 font-normal border-l border-neutral-200 pl-3">
                    CDMX // GDL {time && `• ${time}`}
                </span>
            </div>

            {/* Menú de Enlaces */}
            <nav className="pointer-events-auto hidden md:flex items-center gap-8 px-7 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                {[
                    { label: "Manifiesto", href: "#manifiesto" },
                    { label: "Capacidades", href: "#capacidades" },
                    { label: "Casos", href: "#casos" },
                    { label: "Enlace", href: "#contacto" },
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors uppercase tracking-wider"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Botón Acción */}
            <a
                href="mailto:contacto@muegano.com"
                className="pointer-events-auto px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-sm tracking-wider uppercase"
            >
                Línea Directa ↗
            </a>
        </header>
    );
}