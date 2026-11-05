"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroVisual from "./components/HeroVisual";
import BrandMarquee from "./components/BrandMarquee";
import MetricsCounter from "./components/MetricsCounter";
import InteractiveCards from "./components/InteractiveCards";
import SelectedWorks from "./components/SelectedWorks";
import DualLocations from "./components/DualLocations";
import FooterAgency from "./components/FooterAgency";
import CustomCursor from "./CustomCursor";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });
const CylinderGallery3D = dynamic(() => import("./components/CylinderGallery3D"), { ssr: false });

export default function Home() {
    return (
        <main className="relative min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white overflow-x-clip">
            {/* 1. Cursor sutil */}
            <CustomCursor />

            {/* 2. Escultura con fondo blanco puro y cámara reactiva */}
            <Scene3D />

            {/* 3. Navegación limpia */}
            <Navbar />

            {/* 4. Portada Hero */}
            <HeroVisual />

            {/* 5. Marcas */}
            <BrandMarquee />

            {/* 6. Túnel 3D */}
            <CylinderGallery3D />

            {/* 7. Métricas */}
            <MetricsCounter />

            {/* 8. Tarjetas */}
            <InteractiveCards />

            {/* 9. Casos */}
            <SelectedWorks />

            {/* 10. Sedes */}
            <DualLocations />

            {/* 11. Cierre */}
            <FooterAgency />
        </main>
    );
}
