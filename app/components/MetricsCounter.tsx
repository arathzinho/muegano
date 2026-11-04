"use client";

export default function MetricsCounter() {
    const metrics = [
        { value: "+140M", label: "Impresiones y alcance orgánico monetizado", tag: "AUDIENCIA" },
        { value: "18", label: "Laureles y selecciones en festivales internacionales", tag: "CINE & AD" },
        { value: "98.7%", label: "Eficiencia de automatización operativa mediante IA", tag: "CONSULTING" },
        { value: "02", label: "Centros de operación estratégica: CDMX & Occidente", tag: "PRESENCIA" },
    ];

    return (
        <section id="manifiesto" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((m, idx) => (
                    <div
                        key={idx}
                        className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-amber-400/20 transition-all duration-300 group"
                    >
                        <span className="text-xs font-mono text-amber-400/80 tracking-widest uppercase block mb-6">
                            [{m.tag}]
                        </span>
                        <div className="text-5xl lg:text-6xl font-black text-white font-mono tracking-tight mb-4 group-hover:text-amber-400 transition-colors">
                            {m.value}
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                            {m.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}