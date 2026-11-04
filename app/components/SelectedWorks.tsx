"use client";

import { ArrowUpRight } from "lucide-react";

export default function SelectedWorks() {
    const projects = [
        {
            title: "Travesía Energética",
            client: "PEMEX Refinación",
            category: "Audiovisual & Documental",
            year: "2025",
            impact: "Selección Oficial FICM • 1.2M Visualizaciones",
            desc: "Producción cinematográfica a escala industrial documentando los complejos petroquímicos de México con óptica de cine y etalonaje en DaVinci Resolve.",
        },
        {
            title: "Neural Engine OS",
            client: "Logística y Garantías VK",
            category: "Consultoría de Inteligencia Artificial",
            year: "2026",
            impact: "-70% Tiempo de Respuesta • 99.4% Precisión",
            desc: "Sistema centralizado de predicción de inventario, automatización de garantías mecánicas y prospección multi-canal con agentes LLM conectados.",
        },
        {
            title: "Sabor a Origen",
            client: "Coca-Cola FEMSA",
            category: "Campaña Transmedia & PR",
            year: "2025",
            impact: "Premio Oro Creatividad • Tier 1 Media",
            desc: "Campaña regional de orgullo comunitario con cobertura en prensa nacional y activación hiperlocal con micro-segmentación.",
        },
    ];

    return (
        <section id="casos" className="relative z-10 py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="mb-20">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-4">
                    03 // CASOS DE ESTUDIO
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
                    Ejecuciones <br />
                    reales.
                </h2>
            </div>

            <div className="space-y-8">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        className="p-8 sm:p-12 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-amber-400/30 transition-all duration-300 group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                                    {p.client} — {p.year}
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors flex items-center gap-3">
                                    {p.title}
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </div>

                            <div className="lg:col-span-4">
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    {p.desc}
                                </p>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                                    {p.impact}
                                </span>
                            </div>

                            <div className="lg:col-span-3 flex lg:justify-end">
                                <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                                    {p.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}