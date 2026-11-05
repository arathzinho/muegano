"use client";

const projects = [
    {
        client: "COCA-COLA FEMSA — 2025",
        title: "SABOR A ORIGEN",
        category: "Campaña Transmedia & PR",
        description:
            "Dirección cinematográfica y narrativa documental para el rescate de historias de valor comunitario en el centro del país. Cobertura nacional y distribución algorítmica de alto impacto.",
        tags: ["Premio Oro Creatividad", "Tier 1 Media", "Anamórfico 8K"],
        link: "#",
    },
    {
        client: "GRUPO JUMEX — 2025",
        title: "PULSO CONTINUO",
        category: "Arquitectura IA & Digital",
        description:
            "Plataforma interactiva con renderizado WebGL en tiempo real y agentes de predicción logística conectados a su cadena de distribución multicanal.",
        tags: ["E-Commerce B2B", "Next.js + Three.js", "Lead Gen +42%"],
        link: "#",
    },
];

export default function SelectedWorks() {
    return (
        <section id="casos" className="relative z-10 py-24 px-6 sm:px-14 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
                {/* Cabecera */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                            03 // Archivo de Producción
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950">
                            CASOS SELECCIONADOS.
                        </h2>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        [Proyectos 2024 — 2026]
                    </span>
                </div>

                {/* Lista de Casos */}
                <div className="space-y-8">
                    {projects.map((proj) => (
                        <div
                            key={proj.title}
                            className="group p-8 sm:p-12 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-950 transition-all duration-300 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-neutral-200">
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                    {proj.client}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800">
                                    {proj.category}
                                </span>
                            </div>

                            <div className="py-8">
                                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 group-hover:text-amber-600 transition-colors mb-4">
                                    {proj.title}
                                </h3>
                                <p className="max-w-3xl text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
                                    {proj.description}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={proj.link}
                                    className="text-xs font-bold uppercase tracking-wider text-neutral-950 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                                >
                                    Ver Ficha Técnica →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}