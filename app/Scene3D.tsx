"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LevoraMueganoGlass() {
    const groupRef = useRef<THREE.Group>(null);
    const meshRefs = useRef<THREE.Mesh[]>([]);

    // Coordenadas para los 8 cubos que forman la estructura del muégano
    const positions: [number, number, number][] = [
        [-0.55, -0.55, -0.55],
        [0.55, -0.55, -0.55],
        [-0.55, 0.55, -0.55],
        [0.55, 0.55, -0.55],
        [-0.55, -0.55, 0.55],
        [0.55, -0.55, 0.55],
        [-0.55, 0.55, 0.55],
        [0.55, 0.55, 0.55],
    ];

    // Animación ligada al scroll continuo de la página (Scroll-Driven Rig)
    useEffect(() => {
        if (!groupRef.current) return;

        const ctx = gsap.context(() => {
            // Rotación y traslación cinematográfica al scrollear
            gsap.to(groupRef.current!.rotation, {
                x: Math.PI * 1.5,
                y: Math.PI * 2.2,
                z: Math.PI * 0.4,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.2,
                },
            });

            // La posición acompaña la lectura (de la derecha al centro y luego a la izquierda)
            gsap.to(groupRef.current!.position, {
                x: -0.4,
                y: 0.1,
                z: -0.2,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Inercia sutil permanente
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.12;
        }
    });

    return (
        <group ref={groupRef} position={[1.4, -0.1, 0]} scale={1.3}>
            {positions.map((pos, idx) => (
                <mesh
                    key={idx}
                    position={pos}
                    ref={(el) => {
                        if (el) meshRefs.current[idx] = el;
                    }}
                >
                    <boxGeometry args={[0.92, 0.92, 0.92]} />
                    {/* Material físico de vidrio líquido con transmisión y refracción óptica (Estilo Cuberto) */}
                    <meshPhysicalMaterial
                        roughness={0.08}
                        metalness={0.1}
                        transmission={0.92} // Permite ver a través del objeto refractando el fondo
                        ior={1.52}          // Índice de refracción del cristal óptico
                        thickness={1.6}     // Profundidad de volumen del vidrio
                        color="#ffffff"
                        attenuationColor="#fbbf24" // Tinte ambarino dorado en los bordes internos
                        attenuationDistance={0.8}
                        specularIntensity={1.0}
                        specularColor="#ffffff"
                        clearcoat={1.0}
                        clearcoatRoughness={0.1}
                        envMapIntensity={2.5}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 5.2], fov: 45 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.4} />
                {/* Luces cálidas doradas en contraste con luz fría de recorte */}
                <directionalLight position={[10, 10, 5]} intensity={2.8} color="#ffffff" />
                <directionalLight position={[-10, -5, -5]} intensity={1.5} color="#f59e0b" />
                <pointLight position={[0, 0, 3]} intensity={1.2} color="#fbbf24" />

                {/* Mapa de reflejos HDR para que el cristal tenga brillo realista */}
                <Environment preset="city" />

                <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
                    <LevoraMueganoGlass />
                </Float>
            </Canvas>
        </div>
    );
}
