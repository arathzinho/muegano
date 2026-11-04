"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandMarquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    // Lista verificada de marcas reales
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

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: () =>
                    -(sectionRef.current!.scrollWidth - window.innerWidth + 120),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${sectionRef.current!.scrollWidth}`,
                    scrub: 0.8,
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
            <div className="h-screen w-full flex flex-col justify-center px-8 sm:px-16">
                {/* Cabecera de la sección fijada */}
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 max-w-7xl">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                            03 // ALIANZAS ESTRATÉGICAS & CLIENTES
                        </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
                        Desplaza hacia abajo para navegar horizontalmente →
                    </span>
                </div>

                {/* Tira horizontal que se desplaza con el scroll */}
                <div
                    ref={sectionRef}
                    className="flex items-center gap-10 whitespace-nowrap will-change-transform"
                >
                    {brands.map((b, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 group relative p-8 sm:p-10 rounded-3xl bg-zinc-950/60 border border-white/5 hover:border-amber-400/40 transition-all duration-300 w-[280px] sm:w-[340px] flex flex-col justify-between h-[200px]"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono text-zinc-500 group-hover:text-amber-400/70 transition-colors">
                                    0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                </span>
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                                    {b.cat}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-zinc-300 group-hover:text-amber-400 transition-colors uppercase">
                                    {b.name}
                                </h3>
                            </div>

                            <div className="h-0.5 w-8 bg-zinc-800 group-hover:w-full group-hover:bg-amber-400 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}