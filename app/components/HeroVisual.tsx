"use client";

import { ArrowDownRight } from "lucide-react";

export default function HeroVisual() {
    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-end pb-24 px-6 max-w-7xl mx-auto pt-36">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md">
                    <span>Creative Intelligence & Production Unit</span>
                </div>

                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.88] uppercase text-white mb-10 select-none">
                    Unimos <br />
                    piezas. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white">
                        Multiplicamos
                    </span> <br />
                    impacto.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4 border-t border-white/10">
                    <p className="md:col-span-7 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                        No concebimos la estrategia como islas separadas. Fusionamos narrativa cinematográfica galardonada con modelos de inteligencia artificial y distribución algorítmica para firmas que lideran su categoría.
                    </p>

                    <div className="md:col-span-5 flex items-center md:justify-end gap-4">
                        <a
                            href="#casos"
                            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-amber-400 uppercase transition-colors"
                        >
                            Explorar Proyectos
                            <ArrowDownRight className="w-4 h-4 text-amber-400" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}