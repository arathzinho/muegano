"use client";

export default function BrandMarquee() {
    const brands = [
        "PEMEX",
        "COCA-COLA",
        "UNIVERSIDAD ICEL",
        "RED BULL",
        "SONY MUSIC",
        "WARNER BROS",
        "MERCADO LIBRE",
        "KAVAK",
    ];

    return (
        <section className="relative z-10 py-12 border-y border-white/5 bg-[#050507]/60 overflow-hidden">
            <div className="flex select-none gap-16 animate-marquee whitespace-nowrap">
                {[...brands, ...brands].map((brand, i) => (
                    <div key={i} className="flex items-center gap-16">
                        <span className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-zinc-600 hover:text-white transition-colors font-mono">
                            {brand}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                    </div>
                ))}
            </div>
        </section>
    );
}