"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Image as DreiImage } from "@react-three/drei";
import * as THREE from "three";
import Lenis from "lenis";

// Casos y marcas insignia de Muégano distribuidos en el cilindro
const PROJECTS = [
    { id: "01", title: "GRUPO MODELO", cat: "PRODUCCIÓN CINEMATOGRÁFICA", img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop" },
    { id: "02", title: "PEMEX REFINERÍA", cat: "ESTRATEGIA & AUTOMATIZACIÓN", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1000&auto=format&fit=crop" },
    { id: "03", title: "COCA-COLA FEMSA", cat: "CAMPAÑAS ALGORÍTMICAS", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop" },
    { id: "04", title: "RENAULT MÉXICO", cat: "EXPERIENCIAS VIRTUALES 3D", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop" },
    { id: "05", title: "BOSCH INDUSTRIAL", cat: "DISEÑO DE IDENTIDAD GLOBAL", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
    { id: "06", title: "CFE ENERGÍA", cat: "INFRAESTRUCTURA DE MARCA", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop" },
    { id: "07", title: "URBANIA RESIDENTIAL", cat: "MARKETING DIGITAL INMERSIVO", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
    { id: "08", title: "DENTALIA NETWORK", cat: "POSICIONAMIENTO DE CATEGORÍA", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" },
    { id: "09", title: "JUMEX SELECTO", cat: "DIRECCIÓN DE ARTE EDITORIAL", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop" },
    { id: "10", title: "ZARA ATELIER", cat: "DISEÑO DE INTERFACES DIGITALES", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" },
];

function CylinderCard({ project, index, total, scrollOffset }: { project: typeof PROJECTS[0], index: number, total: number, scrollOffset: React.MutableRefObject<number> }) {
    const meshRef = useRef<THREE.Group>(null);
    const radius = 5.2; // Radio del túnel cilíndrico
    const step = (Math.PI * 2) / total;

    useFrame((_, delta) => {
        if (!meshRef.current) return;

        // Ángulo reactivo ligado a la inercia de scroll
        const angle = index * step + scrollOffset.current * 0.0022;

        // Proyección cilíndrica en X y Z con espiral sutil en Y
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius - 2.8;
        const y = Math.sin(angle * 2) * 0.45;

        meshRef.current.position.set(x, y, z);
        // Orientar las tarjetas siempre tangentes hacia el centro del visor
        meshRef.current.rotation.y = angle + Math.PI;
        meshRef.current.rotation.z = Math.sin(angle) * 0.08; // Deformación por arco
    });

    return (
        <group ref={meshRef}>
            {/* Marco flotante editorial estilo Daddy Yankee / Resn */}
            <mesh position={[0, 0, -0.02]}>
                <planeGeometry args={[2.4, 3.2]} />
                <meshBasicMaterial color="#0a0a0c" transparent opacity={0.8} />
            </mesh>

            {/* Imagen del proyecto con refracción y textura */}
            <DreiImage
                url={project.img}
                scale={[2.2, 2.7]}
                position={[0, 0.15, 0]}
                transparent
                toneMapped={false}
            />

            {/* Textos tipográficos en el espacio 3D */}
            <Text
                position={[-1.0, -1.25, 0.05]}
                anchorX="left"
                fontSize={0.12}
                color="#fbbf24"
                font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
            >
                {project.id} // {project.title}
            </Text>

            <Text
                position={[-1.0, -1.42, 0.05]}
                anchorX="left"
                fontSize={0.075}
                color="#a1a1aa"
                font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
            >
                {project.cat}
            </Text>
        </group>
    );
}

function TunnelScene() {
    const scrollOffset = useRef(0);
    const scrollVelocity = useRef(0);

    useFrame((_, delta) => {
        // Inercia continua acumulada del scroll global
        scrollOffset.current += (window.scrollY - scrollOffset.current) * 0.08;
    });

    return (
        <group position={[0, 0, 0]}>
            {PROJECTS.map((proj, idx) => (
                <CylinderCard
                    key={proj.id}
                    project={proj}
                    index={idx}
                    total={PROJECTS.length}
                    scrollOffset={scrollOffset}
                />
            ))}
        </group>
    );
}

export default function CylinderGallery3D() {
    return (
        <section className="relative h-[250vh] w-full bg-[#050507]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-8 sm:p-14 pointer-events-none z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
                            03 // EL TÚNEL CINEMATOGRÁFICO
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
                            HISTORIAL <br />
                            EN ÓRBITA.
                        </h2>
                    </div>
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden sm:inline">
                        Scroll infinito reactivo [Resn Engine Mode] ↓
                    </span>
                </div>

                <div className="flex justify-between items-end text-xs font-mono text-zinc-500">
                    <span>COLECCIÓN // 2024 — 2026</span>
                    <span className="text-amber-400">DESLIZA PARA ACELERAR EL TÚNEL</span>
                </div>
            </div>

            {/* Viewport 3D en tiempo real */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <Canvas
                    camera={{ position: [0, 0, 0], fov: 60 }}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                >
                    <ambientLight intensity={0.9} />
                    <pointLight position={[0, 0, 0]} intensity={2.5} color="#fbbf24" distance={10} />
                    <TunnelScene />
                </Canvas>
            </div>
        </section>
    );
}