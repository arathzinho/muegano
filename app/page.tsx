"use client";

import dynamic from "next/dynamic";
import NoiseOverlay from "./components/NoiseOverlay";
import Navbar from "./components/Navbar";
import HeroVisual from "./components/HeroVisual";
import BrandMarquee from "./components/BrandMarquee";
import MetricsCounter from "./components/MetricsCounter";
import InteractiveCards from "./components/InteractiveCards";
import SelectedWorks from "./components/SelectedWorks";
import DualLocations from "./components/DualLocations";
import FooterAgency from "./components/FooterAgency";

// Carga dinámica de la escena 3D sin SSR
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070709] text-white selection:bg-amber-400 selection:text-black">
      {/* 1. Malla de grano analógico */}
      <NoiseOverlay />

      {/* 2. Escultura interactiva Three.js con postprocesado */}
      <Scene3D />

      {/* 3. Barra de navegación con reloj dual CDMX/GDL */}
      <Navbar />

      {/* 4. Hero editorial principal */}
      <HeroVisual />

      {/* 5. Cinta infinita de marcas */}
      <BrandMarquee />

      {/* 6. Indicadores y métricas */}
      <MetricsCounter />

      {/* 7. Matriz interactiva de servicios */}
      <InteractiveCards />

      {/* 8. Proyectos y casos de estudio */}
      <SelectedWorks />

      {/* 9. Hubs operativos CDMX // GDL */}
      <DualLocations />

      {/* 10. Pie de página y enlace comercial */}
      <FooterAgency />
    </main>
  );
}