"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandMarquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

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

    // Distribuir la lista en columnas verticales de 3 elementos
    const chunkSize = 3;
    const brandColumns = [];
    for (let i = 0; i < brands.length; i += chunkSize) {
        brandColumns.push(brands.slice(i, i + chunkSize));
    }

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: () =>
                    -(sectionRef.current!.scrollWidth - window.innerWidth + 80),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${sectionRef.current!.scrollWidth * 0.7}`, // Recorrido más rápido y dinámico
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="relative z-20 overflow-hidden bg-[#070709]" ref={triggerRef}>
            <div className="h-screen w-full flex flex-col justify-center px-6 sm:px-12">
                {/* Cabecera de la sección */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4 max-w-7xl">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                            03 // ALIANZAS ESTRATÉGICAS & CLIENTES
                        </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
                        Desplaza hacia abajo para avanzar →
                    </span>
                </div>

                {/* Tira horizontal con 3 tarjetas de alto */}
                <div
                    ref={sectionRef}
                    className="flex items-center gap-5 whitespace-nowrap will-change-transform"
                >
                    {brandColumns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-4 flex-shrink-0">
                            {col.map((b, rowIdx) => {
                                const globalIndex = colIdx * 3 + rowIdx + 1;
                                return (
                                    <div
                                        key={rowIdx}
                                        className="group relative px-6 py-4 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-amber-400/40 transition-all duration-300 w-[240px] sm:w-[280px] h-[90px] flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono text-zinc-600 group-hover:text-amber-400/80 transition-colors">
                                                {globalIndex < 10 ? `0${globalIndex}` : globalIndex}
                                            </span>
                                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider truncate max-w-[170px]">
                                                {b.cat}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold font-mono tracking-tight text-zinc-300 group-hover:text-amber-400 transition-colors uppercase truncate">
                                            {b.name}
                                        </h3>

                                        <div className="h-[2px] w-5 bg-zinc-800 group-hover:w-full group-hover:bg-amber-400 transition-all duration-300" />
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
