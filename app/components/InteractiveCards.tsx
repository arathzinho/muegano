"use client";

import { useState } from "react";

const capabilities = [
    {
        num: "01",
        tag: "Producción",
        title: "Cinematografía & Producción Comercial",
        description:
            "Rodajes en 4K/8K RAW con ópticas anamórficas de cine, dirección artística de precisión y etalonaje en DaVinci Resolve. Piezas diseñadas para consolidar marcas y liderar festivales.",
        features: [
            "Ópticas Anamórficas",
            "Color Grading HDR",
            "Brand Films",
            "VFX & Acabado",
        ],
    },
    {
        num: "02",
        tag: "Tecnología",
        title: "Arquitectura & Agentes de IA Aplicada",
        description:
            "Implementamos agentes autónomos, modelos de lenguaje ajustados y automatización de procesos operativos de alta demanda para acelerar la toma de decisiones corporativas.",
        features: [
            "Modelos LLM Propios",
            "Pipelines Autónomos",
            "Integración API",
            "Data Sync",
        ],
    },
    {
        num: "03",
        tag: "Diseño Web",
        title: "Experiencias Digitales 3D & WebGL",
        description:
            "Desarrollamos interfaces web inmersivas con físicas fluidas, shaders personalizados y micro-interacciones cinematográficas que elevan el valor percibido del negocio.",
        features: [
            "Next.js App Router",
            "Three.js & Shaders",
            "GSAP & Lenis Physics",
            "UI Editorial",
        ],
    },
    {
        num: "04",
        tag: "Crecimiento",
        title: "Distribución Algorítmica & Performance",
        description:
            "Estrategia de escala omnicanal respaldada por análisis predictivo, segmentación de audiencias de alto ticket y optimización continua de tasas de conversión.",
        features: [
            "Paid Media Premium",
            "Growth Loops",
            "CRO Avanzado",
            "Business Analytics",
        ],
    },
];

export default function InteractiveCards() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="capacidades" className="relative z-10 py-24 px-6 sm:px-14 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                            02 // Núcleo de Competencias
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                            SOLUCIONES EN BLOQUE. <br />
                            <span className="text-amber-500">SIN FISURAS.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
                        Cada división opera como un engrane conectado. La narrativa nutre a la IA, y la tecnología amplifica el impacto visual de cada entrega.
                    </p>
                </div>

                {/* Rejilla de tarjetas limpias de alto contraste */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, idx) => {
                        const isHovered = hoveredIndex === idx;
                        return (
                            <div
                                key={cap.num}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group relative p-8 sm:p-10 rounded-2xl bg-neutral-50/70 border transition-all duration-300 flex flex-col justify-between min-h-[380px] ${isHovered
                                        ? "border-neutral-900 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] -translate-y-1"
                                        : "border-neutral-200 hover:border-neutral-400"
                                    }`}
                            >
                                {/* Cabecera de la tarjeta */}
                                <div>
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200/80">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {cap.tag}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      // {cap.num}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950 mb-4 leading-snug">
                                        {cap.title}
                                    </h3>

                                    <p className="text-neutral-600 text-sm sm:text-base font-normal leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Etiquetas de características */}
                                <div className="mt-8 pt-6 border-t border-neutral-200/60 flex flex-wrap gap-2">
                                    {cap.features.map((feat) => (
                                        <span
                                            key={feat}
                                            className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700"
                                        >
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}