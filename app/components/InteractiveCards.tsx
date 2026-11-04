"use client";

import { Film, BrainCircuit, Globe, Target } from "lucide-react";

export default function InteractiveCards() {
    const services = [
        {
            icon: Film,
            num: "01",
            title: "Cinematografía & Producción Comercial",
            desc: "Rodajes comerciales en 4K/8K RAW con ópticas cinematográficas, dirección artística de precisión y etalonaje en DaVinci Resolve. Creamos piezas que ganan festivales y consolidan marcas.",
            tags: ["Anamorphic Optics", "Color Grading", "Brand Films", "VFX"],
        },
        {
            icon: BrainCircuit,
            num: "02",
            title: "Arquitectura & Agentes de IA Aplicada",
            desc: "No usamos prompts básicos; desarrollamos e integramos infraestructuras completas con LLMs personalizados, agentes autónomos y pipelines de automatización operativa para corporativos.",
            tags: ["Autonomous Agents", "Custom RAG", "Data Automation", "Fine-Tuning"],
        },
        {
            icon: Globe,
            num: "03",
            title: "Desarrollo Web & Experiencias 3D",
            desc: "Aplicaciones web de alto impacto construidas en Next.js, Three.js y WebGL. Plataformas interactivas que destacan en el panorama digital global y superan la media del mercado.",
            tags: ["Three.js", "WebGL", "Creative Code", "Full Stack"],
        },
        {
            icon: Target,
            num: "04",
            title: "Relaciones Públicas & Growth Digital",
            desc: "Estrategias de colocación en medios Tier 1, gestión de reputación de marca y pauta digital de alto desempeño con atribución matemática transparente.",
            tags: ["Crisis Strategy", "Tier 1 PR", "Meta / Google Ads", "High ROI"],
        },
    ];

    return (
        <section id="capacidades" className="relative z-10 py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                <div>
                    <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-4">
                        02 // NÚCLEO DE COMPETENCIAS
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
                        Soluciones en bloque. <br />
                        Sin fisuras.
                    </h2>
                </div>
                <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
                    Cada división de Muégano opera como un engrane conectado. La narrativa nutre a la IA, y la tecnología amplifica el alcance de la producción.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <div
                            key={i}
                            className="relative p-10 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-amber-400/40 transition-all duration-500 overflow-hidden group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                  // {s.num}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                                {s.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                {s.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {s.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 text-zinc-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}