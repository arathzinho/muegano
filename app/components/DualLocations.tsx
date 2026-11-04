"use client";

import { Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function DualLocations() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hub CDMX */}
                <div className="p-10 rounded-3xl bg-zinc-950/50 border border-white/5 hover:border-amber-400/30 transition-all">
                    <div className="flex items-center justify-between mb-8">
                        <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Sede Central // CDMX
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white mb-2">
                        Valle de México
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mb-8">
                        Producción cinematográfica, dirección de arte y mesa estratégica.
                    </p>
                    <a
                        href="tel:+525624860041"
                        className="inline-flex items-center gap-3 text-sm font-mono text-white hover:text-amber-400 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-amber-400" />
                        +52 56 2486 0041
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                </div>

                {/* Hub GDL */}
                <div className="p-10 rounded-3xl bg-zinc-950/50 border border-white/5 hover:border-amber-400/30 transition-all">
                    <div className="flex items-center justify-between mb-8">
                        <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Sede Occidente // GDL
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white mb-2">
                        Guadalajara, Jalisco
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mb-8">
                        Desarrollo de IA aplicada, automatización y relaciones públicas.
                    </p>
                    <a
                        href="tel:+523342658220"
                        className="inline-flex items-center gap-3 text-sm font-mono text-white hover:text-amber-400 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-amber-400" />
                        +52 33 4265 8220
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                </div>
            </div>
        </section>
    );
}