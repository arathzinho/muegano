"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ArchitecturalMuegano() {
    const groupRef = useRef<THREE.Group>(null!);

    const blocks = useMemo(
        () => [
            { pos: [-0.42, 0.42, 0.3], rot: [0.1, 0.08, 0.05], scale: [0.82, 0.8, 0.76] },
            { pos: [0.4, 0.4, 0.25], rot: [-0.08, 0.12, -0.06], scale: [0.78, 0.82, 0.76] },
            { pos: [-0.38, -0.38, 0.28], rot: [0.06, -0.1, 0.1], scale: [0.8, 0.78, 0.8] },
            { pos: [0.42, -0.4, 0.32], rot: [-0.12, 0.08, -0.08], scale: [0.82, 0.8, 0.78] },
            { pos: [0.0, 0.0, 0.52], rot: [0.05, 0.05, 0.15], scale: [0.86, 0.86, 0.8] },
            // Núcleo trasero
            { pos: [-0.34, 0.34, -0.3], rot: [-0.1, -0.08, 0.06], scale: [0.76, 0.78, 0.74] },
            { pos: [0.34, 0.36, -0.32], rot: [0.08, 0.1, -0.05], scale: [0.78, 0.76, 0.76] },
            { pos: [-0.32, -0.34, -0.3], rot: [0.1, 0.05, -0.1], scale: [0.76, 0.78, 0.74] },
            { pos: [0.36, -0.32, -0.28], rot: [-0.08, -0.1, 0.08], scale: [0.8, 0.78, 0.76] },
            { pos: [0.0, 0.0, -0.4], rot: [0.12, -0.05, -0.1], scale: [0.82, 0.82, 0.74] },
        ],
        []
    );

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const { width, height } = state.viewport;

        // Desplazamiento orgánico acoplado al mouse y al scroll
        const targetX = 1.3 + (state.pointer.x * width) * 0.12;
        const targetY = -0.1 + (state.pointer.y * height) * 0.12;

        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.04);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.04);

        // Rotación multidimensional compleja
        groupRef.current.rotation.x = t * 0.15 + state.pointer.y * 0.4;
        groupRef.current.rotation.y = t * 0.22 + state.pointer.x * 0.5;
    });

    return (
        <group ref={groupRef} scale={1.55}>
            {blocks.map((b, i) => (
                <mesh
                    key={i}
                    position={b.pos as [number, number, number]}
                    rotation={b.rot as [number, number, number]}
                    scale={b.scale as [number, number, number]}
                >
                    <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.18} smoothness={8}>
                        <meshPhysicalMaterial
                            color="#d97706"
                            emissive="#78350f"
                            emissiveIntensity={0.15}
                            roughness={0.18}
                            metalness={0.88}
                            clearcoat={0.9}
                            clearcoatRoughness={0.1}
                            reflectivity={1}
                        />
                    </RoundedBox>
                </mesh>
            ))}
        </group>
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 8.5], fov: 38 }}
                gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[12, 18, 12]} intensity={5.0} color="#ffffff" />
                <directionalLight position={[-12, -14, -8]} intensity={2.5} color="#d97706" />
                <pointLight position={[1, 1, 4]} intensity={3.5} color="#f59e0b" />

                <ArchitecturalMuegano />

                {/* Efectos de postprocesado óptico de cine */}
                <EffectComposer multisampling={0}>
                    <Bloom
                        intensity={0.6}
                        luminanceThreshold={0.55}
                        luminanceSmoothing={0.3}
                    />
                    <Noise
                        opacity={0.035}
                        blendFunction={BlendFunction.OVERLAY}
                    />
                    <ChromaticAberration
                        offset={new THREE.Vector2(0.0012, 0.0012)}
                        radialModulation={false}
                        modulationOffset={0}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}