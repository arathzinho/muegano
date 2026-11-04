"use client";

import React from "react";
import Scene3D from "./Scene3D";

export default function Home() {
  const clientes = [
    "PEMEX",
    "CFE",
    "COCA-COLA",
    "RENAULT",
    "KFC",
    "JUMEX",
    "SIDRAL MUNDET",
    "GRUPO GIGANTE",
    "CHILI'S",
    "DENTALIA",
    "SANTA MARÍA",
    "URBANIA",
  ];

  const producciones = [
    {
      categoria: "CINE & FESTIVALES",
      titulo: "Moriré siendo de ti",
      reconocimiento: "Mejor Director, Cortometraje y Actriz — Festival Intl. de Cine de Perú",
      año: "Cine",
      tag: "Dirección & Producción",
    },
    {
      categoria: "PRODUCCIÓN MUSICAL",
      titulo: "Pena Negra — La Sonora Santanera",
      reconocimiento: "Videoclip oficial 4K con María Fernanda",
      año: "Música",
      tag: "Videoclip",
    },
    {
      categoria: "VIRAL & ESTRATEGIA DIGITAL",
      titulo: "Relatos de mi vida — Lili Zetina",
      reconocimiento: "+12 Millones de reproducciones y monetización de plataformas",
      año: "MKT & PR",
      tag: "Monetización",
    },
    {
      categoria: "CINE MINUTO",
      titulo: "Lupe",
      reconocimiento: "Premio Favorito del Público — Festival Hazlo Contra la Corrupción",
      año: "Cine",
      tag: "Producción",
    },
  ];

  const areas = [
    {
      num: "01",
      titulo: "Producción Audiovisual & Cine",
      desc: "Spots publicitarios, videoclips y cine con estándares de cinematografía digital (Blackmagic, Sony y Canon). Dirección de arte y postproducción de alto impacto.",
      detalles: "Videoclips / Spots Comerciales / Cine / Colorimetría",
    },
    {
      num: "02",
      titulo: "Estrategia Digital, PR & Redes",
      desc: "Gestión y monetización de redes sociales, campañas en Meta/Google Ads, SEO y vinculación con medios (Chilango, Time Out) y perfiles de alto alcance.",
      detalles: "Social Media / Pauta Digital / Influencer Marketing / PR",
    },
    {
      num: "03",
      titulo: "Soluciones & Consultoría con IA",
      desc: "Implementación de modelos de inteligencia artificial, automatización de inventarios y asistentes de atención multicanal para sectores médicos y hotelería.",
      detalles: "Chatbots / Automatización de Procesos / Segmentación Predictiva",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-200 antialiased selection:bg-amber-500/20 selection:text-amber-300">
      <Scene3D />

      {/* Halo de luz cálida ambiental */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_70%_70%_at_70%_40%,rgba(217,119,6,0.08),transparent)]" />

      {/* Navegación sobria */}
      <header className="relative z-20 flex items-center justify-between px-8 lg:px-20 py-8 border-b border-white/[0.06] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-zinc-500">[CDMX]</span>
          <span className="text-sm font-bold tracking-wider text-white uppercase">MUÉGANO</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-mono text-xs text-zinc-400">
          <a href="#producciones" className="hover:text-white transition-colors">01 // TRAYECTORIA</a>
          <a href="#servicios" className="hover:text-white transition-colors">02 // SERVICIOS</a>
          <a href="#clientes" className="hover:text-white transition-colors">03 // MARCAS</a>
          <a href="#contacto" className="hover:text-white transition-colors">04 // CONTACTO</a>
        </nav>

        <a
          href="https://wa.me/5215624860041"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs px-5 py-2 border border-white/10 hover:border-amber-400/60 rounded-full text-zinc-300 hover:text-white transition-all uppercase tracking-wider"
        >
          WhatsApp Directo
        </a>
      </header>

      {/* Hero Asimétrico: Textos a la izquierda y 3D orbitando a la derecha */}
      <main className="relative z-10 px-8 lg:px-20 pt-28 pb-24 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            AGENCIA INTEGRAL & CONSULTORÍA IA
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.98]">
            UNIMOS PIEZAS. MULTIPLICAMOS VALOR.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Combinamos producción audiovisual galardonada en festivales, monetización de audiencias digitales y arquitectura de inteligencia artificial aplicada.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#producciones"
              className="px-8 py-3.5 bg-white text-zinc-950 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-zinc-200 transition-colors"
            >
              Ver Casos Reales
            </a>
            <a
              href="mailto:contacto@muegano.com.mx"
              className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
            >
              contacto@muegano.com.mx ↗
            </a>
          </div>
        </div>

        {/* Marcas / Logos en cinta tipográfica limpia */}
        <section id="clientes" className="mt-32 pt-8 border-t border-white/[0.06]">
          <span className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase block mb-6">
            MARCAS & INSTITUCIONES QUE HAN CONFIADO EN NOSOTROS
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
            {clientes.map((c, i) => (
              <span
                key={i}
                className="font-mono text-sm tracking-widest font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {c} {i !== clientes.length - 1 && <span className="text-zinc-700 ml-8">•</span>}
              </span>
            ))}
          </div>
        </section>

        {/* Producciones y casos reales */}
        <section id="producciones" className="mt-36">
          <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-4 mb-8">
            <h2 className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
              PRODUCCIONES & CASOS DESTACADOS
            </h2>
            <span className="font-mono text-xs text-zinc-600">[ FESTIVALES & DIGITAL ]</span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {producciones.map((p, i) => (
              <div
                key={i}
                className="group py-8 transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-xl flex flex-col md:flex-row md:items-baseline justify-between gap-6"
              >
                <div className="md:w-1/3">
                  <span className="font-mono text-xs text-amber-500/80">{p.categoria}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:translate-x-1.5 transition-transform duration-300">
                    {p.titulo}
                  </h3>
                </div>
                <div className="md:w-1/2">
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {p.reconocimiento}
                  </p>
                </div>
                <div className="font-mono text-xs text-zinc-500 md:text-right">
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Áreas de especialidad */}
        <section id="servicios" className="mt-36">
          <div className="border-b border-white/[0.06] pb-4 mb-12">
            <h2 className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
              LÍNEAS DE ACCIÓN & CAPACIDADES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((a, i) => (
              <div key={i} className="border-t border-white/[0.06] pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-amber-500 font-semibold">{a.num}</span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-3">{a.titulo}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">{a.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-500 tracking-wider">
                  {a.detalles}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Contacto Directo */}
        <section id="contacto" className="mt-36 border-t border-white/[0.06] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-baseline">
            <div>
              <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">ATENCIÓN & PROPUESTAS</span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-3 leading-snug">
                Hablemos de cómo escalar la presencia y eficiencia de tu empresa.
              </h2>
            </div>
            <div className="flex flex-col gap-4 font-mono text-sm">
              <div>
                <span className="text-zinc-600 block text-xs uppercase tracking-wider mb-1">Correo oficial</span>
                <a
                  href="mailto:contacto@muegano.com.mx"
                  className="text-white hover:text-amber-400 underline underline-offset-4"
                >
                  contacto@muegano.com.mx
                </a>
              </div>
              <div>
                <span className="text-zinc-600 block text-xs uppercase tracking-wider mb-1">Línea directa / WhatsApp</span>
                <a
                  href="https://wa.me/5215624860041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-amber-400"
                >
                  +52 1 56 2486 0041
                </a>
                <span className="text-zinc-600 mx-2">|</span>
                <span className="text-zinc-400">55 4942 3736</span>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/5215624860041?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20junta%20de%20brief%20con%20Mu%C3%A9gano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-amber-500 text-zinc-950 font-bold text-xs tracking-widest uppercase hover:bg-amber-400 transition-colors"
                >
                  Agendar Junta de Brief
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer sobrio */}
      <footer className="relative z-20 border-t border-white/[0.06] px-8 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between text-zinc-500 font-mono text-xs gap-4">
        <span>MUÉGANO © 2026 — TODOS LOS DERECHOS RESERVADOS</span>
        <span>CIUDAD DE MÉXICO</span>
      </footer>
    </div>
  );
}