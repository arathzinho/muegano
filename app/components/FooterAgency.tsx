"use client";

import { useEffect, useState } from "react";

export default function FooterAgency() {
    const [year, setYear] = useState(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="relative z-20 bg-[#050507] text-white border-t border-white/10 px-6 sm:px-16 py-16">
            <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-3">
                            MUÉGANO NETWORK // CIERRE
                        </span>
                        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter">
                            CREEMOS ALGO <br /> INOLVIDABLE.
                        </h2>
                    </div>

                    <a
                        href="mailto:contacto@muegano.com"
                        className="px-8 py-4 rounded-full bg-amber-400 text-black font-mono font-bold uppercase tracking-wider text-sm hover:bg-amber-300 transition-colors"
                    >
                        Iniciar Proyecto →
                    </a>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between text-xs font-mono text-zinc-500 gap-4">
                    <div>
                        © {year} MUÉGANO NETWORK. TODOS LOS DERECHOS RESERVADOS.
                    </div>
                    <div className="flex gap-6 uppercase">
                        <span>Ciudad de México</span>
                        <span>Guadalajara</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}