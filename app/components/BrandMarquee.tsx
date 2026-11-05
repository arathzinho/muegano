"use client";

const row1 = [
    { name: "CFE", category: "Energía Estatal", num: "01" },
    { name: "COCA-COLA", category: "Refrescos & Retail", num: "02" },
    { name: "DENTALFLOX", category: "Salud Especializada", num: "03" },
    { name: "KFC", category: "Quick Service Restaurant", num: "04" },
    { name: "KZ92", category: "Moda & Streetwear", num: "05" },
    { name: "CHILI'S", category: "Casual Dining", num: "06" },
    { name: "PEMEX", category: "Hidrocarburos", num: "07" },
    { name: "URBANIA", category: "Desarrollo Inmobiliario", num: "08" },
    { name: "GIGANTE GRUPO", category: "Consorcio Retail", num: "09" },
];

const row2 = [
    { name: "RENAULT", category: "Automotriz Global", num: "10" },
    { name: "SIDRAL MUNDET", category: "Bebidas Tradicionales", num: "11" },
    { name: "APOLO", category: "Entretenimiento & Eventos", num: "12" },
    { name: "GRUPO MODELO", category: "Bebidas & Consumo", num: "13" },
    { name: "GRUPO INTEGRA", category: "Servicios Corporativos", num: "14" },
    { name: "STA. MARÍA", category: "Agua de Manantial", num: "15" },
    { name: "PRODIET", category: "Nutrición Clínica", num: "16" },
    { name: "ZARA", category: "Moda Internacional", num: "17" },
    { name: "SU-FRIDA", category: "Gastronomía Mexicana", num: "18" },
];

export default function BrandMarquee() {
    return (
        <section className="relative z-10 py-16 bg-[#18191e] text-white overflow-hidden border-y border-neutral-800">
            <style>{`
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: scrollLeft 28s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: scrollRight 28s linear infinite;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* Encabezado */}
            <div className="max-w-7xl mx-auto px-6 sm:px-14 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        03 // Alianzas Estratégicas & Clientes
                    </span>
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                    Scroll Continuo Automático
                </span>
            </div>

            {/* Tira 1: Hacia la izquierda */}
            <div className="overflow-hidden w-full mb-4">
                <div className="marquee-track-left gap-4">
                    {[...row1, ...row1, ...row1].map((b, i) => (
                        <div
                            key={`r1-${b.name}-${i}`}
                            className="w-64 p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between shrink-0 select-none"
                        >
                            <div className="flex justify-between items-center text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">
                                <span>{b.num}</span>
                                <span className="truncate ml-2 text-neutral-400">{b.category}</span>
                            </div>
                            <span className="text-base font-black uppercase tracking-tight text-white mt-3">
                                {b.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tira 2: Hacia la derecha */}
            <div className="overflow-hidden w-full">
                <div className="marquee-track-right gap-4">
                    {[...row2, ...row2, ...row2].map((b, i) => (
                        <div
                            key={`r2-${b.name}-${i}`}
                            className="w-64 p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between shrink-0 select-none"
                        >
                            <div className="flex justify-between items-center text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">
                                <span>{b.num}</span>
                                <span className="truncate ml-2 text-neutral-400">{b.category}</span>
                            </div>
                            <span className="text-base font-black uppercase tracking-tight text-white mt-3">
                                {b.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}