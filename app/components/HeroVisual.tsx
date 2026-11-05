"use client";

export default function HeroVisual() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-14 pt-32 pb-14 z-10 pointer-events-none">
            {/* Etiqueta superior limpia */}
            <div className="pointer-events-auto">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-neutral-900" />
                    Creative Intelligence & Production Unit
                </span>
            </div>

            {/* Título Principal en Negro Fuerte */}
            <div className="max-w-5xl my-auto py-10 pointer-events-auto">
                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-neutral-950 leading-[0.92] uppercase">
                    UNIMOS <br />
                    PIEZAS. <br />
                    <span className="text-amber-500">
                        MULTIPLICAMOS
                    </span> <br />
                    IMPACTO.
                </h1>

                <p className="mt-8 max-w-xl text-neutral-700 text-base sm:text-lg font-normal leading-relaxed">
                    No concebimos la estrategia como islas separadas. Fusionamos narrativa
                    cinematográfica galardonada con modelos de inteligencia artificial y
                    distribución algorítmica para firmas que lideran su categoría.
                </p>

                <div className="mt-10 flex items-center gap-6">
                    <a
                        href="#casos"
                        className="px-6 py-3 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-sm"
                    >
                        Explorar Proyectos ↘
                    </a>
                    <span className="text-xs text-neutral-500 font-semibold tracking-wider uppercase">
                        Archivo de casos [2024 — 2026]
                    </span>
                </div>
            </div>

            {/* Pie del hero */}
            <div className="pointer-events-auto flex items-center justify-between border-t border-neutral-200 pt-6 text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                <span>01 // Manifiesto de Dirección</span>
                <span>Desliza para explorar</span>
            </div>
        </section>
    );
}