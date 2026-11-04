"use client";

export default function BrandMarquee() {
    // Lista oficial basada en los clientes reales de Muégano
    const brands = [
        "CFE",
        "PEMEX",
        "GRUPO MODELO",
        "COCA-COLA",
        "URBANIA",
        "GRUPO INTEGRA",
        "DENTALFLOX",
        "GIGANTE GRUPO",
        "STA. MARÍA",
        "KFC",
        "RENAULT",
        "PRODIET",
        "KZ92",
        "SIDRAL MUNDET",
        "ZARA",
        "CHILI'S",
        "APOLO",
        "SU-FRIDA",
        "BOXING CLUB",
        "SNOB SALÓN",
        "LECHESAN",
        "GRUPO JUMEX",
        "DENTALIA",
        "REBI",
        "XIAOMI",
        "BOSCH",
    ];

    return (
        <section className="relative z-10 py-10 border-y border-white/5 bg-[#050507]/70 overflow-hidden backdrop-blur-md">
            <div className="flex select-none gap-12 animate-marquee whitespace-nowrap">
                {[...brands, ...brands].map((brand, i) => (
                    <div key={i} className="flex items-center gap-12">
                        <span className="text-xl sm:text-2xl font-black tracking-widest uppercase text-zinc-500 hover:text-amber-400 transition-colors font-mono">
                            {brand}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                    </div>
                ))}
            </div>
        </section>
    );
}