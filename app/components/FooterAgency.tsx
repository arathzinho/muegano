"use client";

import { ArrowUpRight } from "lucide-react";

export default function FooterAgency() {
    return (
        <footer id="contacto" className="relative z-10 pt-24 pb-16 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="mb-20">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-4">
                    04 // CONEXIÓN
                </span>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-8">
                    ¿Listo para <br />
                    construir?
                </h2>
                <a
                    href="mailto:contacto@muegano.com.mx"
                    className="inline-flex items-center gap-3 text-2xl sm:text-4xl font-mono text-white hover:text-amber-400 transition-colors underline decoration-zinc-800 underline-offset-8"
                >
                    contacto@muegano.com.mx
                    <ArrowUpRight className="w-8 h-8 text-amber-400" />
                </a>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-zinc-600">
                <div>
                    © 2026 MUÉGANO NETWORK. TODOS LOS DERECHOS RESERVADOS.
                </div>
                <div className="flex gap-6 uppercase">
                    <span>Ciudad de México</span>
                    <span>•</span>
                    <span>Guadalajara</span>
                </div>
            </div>
        </footer>
    );
}