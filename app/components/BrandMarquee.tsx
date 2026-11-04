"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BrandMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const brands = [
        { name: "CFE", cat: "Energía Estatal" },
        { name: "PEMEX", cat: "Hidrocarburos" },
        { name: "GRUPO MODELO", cat: "Bebidas & Consumo" },
        { name: "COCA-COLA", cat: "Refrescos & Retail" },
        { name: "URBANIA", cat: "Desarrollo Inmobiliario" },
        { name: "GRUPO INTEGRA", cat: "Servicios Corporativos" },
        { name: "DENTALFLOX", cat: "Salud Especializada" },
        { name: "GIGANTE GRUPO", cat: "Consorcio Retail" },
        { name: "STA. MARÍA", cat: "Agua de Manantial" },
        { name: "KFC", cat: "Quick Service Restaurant" },
        { name: "RENAULT", cat: "Automotriz Global" },
        { name: "PRODIET", cat: "Nutrición Clínica" },
        { name: "KZ92", cat: "Moda & Streetwear" },
        { name: "SIDRAL MUNDET", cat: "Bebidas Tradicionales" },
        { name: "ZARA", cat: "Moda Internacional" },
        { name: "CHILI'S", cat: "Casual Dining" },
        { name: "APOLO", cat: "Entretenimiento & Eventos" },
        { name: "SU-FRIDA", cat: "Gastronomía Mexicana" },
        { name: "BOXING CLUB", cat: "Fitness de Alto Rendimiento" },
        { name: "SNOB SALÓN", cat: "Belleza & Estilismo" },
        { name: "LECHESAN", cat: "Lácteos & Alimentos" },
        { name: "GRUPO JUMEX", cat: "Jugos & Néctares" },
        { name: "DENTALIA", cat: "Clínicas Odontológicas" },
        { name: "REBI", cat: "Soluciones Industriales" },
        { name: "XIAOMI", cat: "Hardware & Ecosistema" },
        { name: "BOSCH", cat: "Ingeniería & Tecnología" },
    ];

    // Agrupamos en 3 filas verticales por columna
    const chunkSize = 3;
    const brandColumns = [];
    for (let i = 0; i < brands.length; i += chunkSize) {
        brandColumns.push(brands.slice(i, i + chunkSize));
    }

    useGSAP(
        () => {
            if (!trackRef.current || !containerRef.current) return;

            const totalShift = trackRef.current.scrollWidth - window.innerWidth + 100;

            gsap.to(trackRef.current, {
                x: -totalShift,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=1200", // Distancia de scroll corta para que termine rápido
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="relative z-20 bg-[#070709] w-full">
            <div className="h-screen w-full flex flex-col justify-center px-6 sm:px-12 overflow-hidden">
                {/* Cabecera */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4 max-w-7xl">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                            03 // ALIANZAS ESTRATÉGICAS & CLIENTES
                        </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        Scroll para avanzar →
                    </span>
                </div>

                {/* Tira en matriz horizontal (3 de alto) */}
                <div
                    ref={trackRef}
                    className="flex items-center gap-5 whitespace-nowrap will-change-transform"
                >
                    {brandColumns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-4 flex-shrink-0">
                            {col.map((b, rowIdx) => {
                                const num = colIdx * 3 + rowIdx + 1;
                                return (
                                    <div
                                        key={rowIdx}
                                        className="group relative px-6 py-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/40 transition-all duration-300 w-[240px] sm:w-[280px] h-[92px] flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                                                {num < 10 ? `0${num}` : num}
                                            </span>
                                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider truncate max-w-[160px]">
                                                {b.cat}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold font-mono tracking-tight text-zinc-200 group-hover:text-amber-400 transition-colors uppercase truncate">
                                            {b.name}
                                        </h3>

                                        <div className="h-[2px] w-6 bg-zinc-800 group-hover:w-full group-hover:bg-amber-400 transition-all duration-300" />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}