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
import CustomCursor from "./CustomCursor";

// 1. Escultura central 3D (sin SSR)
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

// 2. Túnel Cilíndrico estilo Resn / Daddy Yankee (sin SSR)
const CylinderGallery3D = dynamic(
  () => import("./components/CylinderGallery3D"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-white selection:bg-amber-400 selection:text-black overflow-x-clip">
      {/* 1. Malla de grano y textura cinematográfica */}
      <NoiseOverlay />

      {/* 2. Cursor reactivo */}
      <CustomCursor />

      {/* 3. Escultura orgánica de cristal de fondo */}
      <Scene3D />

      {/* 4. Barra de navegación flotante */}
      <Navbar />

      {/* 5. Portada principal (Hero) */}
      <HeroVisual />

      {/* 6. Matriz de marcas con scroll horizontal */}
      <BrandMarquee />

      {/* 7. El túnel 3D infinito estilo Resn / Daddy Yankee */}
      <CylinderGallery3D />

      {/* 8. Métricas y datos de impacto */}
      <MetricsCounter />

      {/* 9. Capacidades interactivas */}
      <InteractiveCards />

      {/* 10. Casos destacados */}
      <SelectedWorks />

      {/* 11. Presencia CDMX // GDL */}
      <DualLocations />

      {/* 12. Cierre y contacto directo */}
      <FooterAgency />
    </main>
  );
}