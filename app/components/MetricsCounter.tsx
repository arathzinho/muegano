"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    {
        num: "01",
        tag: "AUDIENCIA",
        value: "+140M",
        label: "Impresiones y alcance orgánico monetizado",
        highlight: "Impacto Global",
    },
    {
        num: "02",
        tag: "CINE & AD",
        value: "18",
        label: "Laureles y selecciones en festivales internacionales",
        highlight: "Prestigio & Calidad",
    },
    {
        num: "03",
        tag: "CONSULTING",
        value: "98.7%",
        label: "Eficiencia de automatización operativa mediante IA",
        highlight: "Escalabilidad",
    },
    {
        num: "04",
        tag: "PRESENCIA",
        value: "02",
        label: "Centros de operación estratégica: CDMX & Occidente",
        highlight: "Infraestructura",
    },
];

export default function MetricsCounter() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const ctx = gsap.context(() => {
            // Distancia exacta para que la tarjeta 4 entre al 100% en la pantalla
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${Math.abs(getScrollAmount())}`,
                    pin: true,
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (progressRef.current) {
                            progressRef.current.style.width = `${self.progress * 100}%`;
                        }
                    },
                },
            });

            // Efecto sutil de zoom en cada tarjeta al cruzar el visor
            const cards = track.querySelectorAll(".metric-card");
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { scale: 0.94 },
                    {
                        scale: 1.03,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: tween,
                            start: "left 70%",
                            end: "center 50%",
                            scrub: true,
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-20 bg-white h-screen w-full overflow-hidden flex flex-col justify-between px-6 sm:px-14 pt-28 pb-10"
        >
            {/* Cabecera con separación suficiente para no colisionar con la Navbar */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 max-w-7xl w-full mx-auto">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                        03 // Métricas & Escala Operativa
                    </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
                    <span>DESPLAZAMIENTO</span>
                    <div className="w-28 h-1 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                            ref={progressRef}
                            className="h-full bg-neutral-950 transition-all duration-75"
                            style={{ width: "0%" }}
                        />
                    </div>
                </div>
            </div>

            {/* Riel Horizontal que avanza al hacer scroll */}
            <div className="my-auto w-full">
                <div
                    ref={trackRef}
                    className="flex gap-8 items-center pl-6 sm:pl-14 pr-20 will-change-transform"
                >
                    {metrics.map((m) => (
                        <div
                            key={m.tag}
                            className="metric-card flex-shrink-0 w-[82vw] sm:w-[420px] p-8 sm:p-10 rounded-3xl border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[420px]"
                        >
                            <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-neutral-100 text-neutral-800">
                                    [{m.tag}]
                                </span>
                                <span className="text-xs font-semibold text-neutral-400">
                  // {m.num}
                                </span>
                            </div>

                            <div className="my-4">
                                <span className="text-6xl sm:text-7xl font-black uppercase tracking-tight text-neutral-950 block leading-none">
                                    {m.value}
                                </span>
                                <span className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-amber-500">
                                    ● {m.highlight}
                                </span>
                            </div>

                            <div className="pt-6 border-t border-neutral-100">
                                <p className="text-sm font-normal text-neutral-600 leading-relaxed">
                                    {m.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Guía inferior */}
            <div className="max-w-7xl w-full mx-auto pt-4 flex items-center justify-between text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                <span>Gira la rueda del ratón hacia abajo para avanzar</span>
                <span>[01 — 04]</span>
            </div>
        </section>
    );
}