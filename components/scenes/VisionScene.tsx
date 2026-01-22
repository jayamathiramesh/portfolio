'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import FloatingGeometry from '../3d/FloatingGeometry';
import AtmosphericFog from '../3d/AtmosphericFog';
import { TRANSITION } from '@/lib/motion';

// Branching node system
function VisionNodes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    });

    return (
        <group ref={groupRef}>
            {/* Central node */}
            <FloatingGeometry
                position={[0, 0, 0]}
                geometry="sphere"
                size={0.5}
                color="#a78bfa"
                emissiveIntensity={0.8}
                rotationSpeed={0.003}
            />

            {/* Branching nodes - representing focus areas */}
            <FloatingGeometry
                position={[3, 1, -2]}
                geometry="octahedron"
                size={0.4}
                color="#00d9ff"
                emissiveIntensity={0.6}
                rotationSpeed={0.002}
            />

            <FloatingGeometry
                position={[-3, -1, -2]}
                geometry="octahedron"
                size={0.4}
                color="#00d9ff"
                emissiveIntensity={0.6}
                rotationSpeed={0.002}
            />

            <FloatingGeometry
                position={[0, 3, -3]}
                geometry="octahedron"
                size={0.4}
                color="#00d9ff"
                emissiveIntensity={0.6}
                rotationSpeed={0.002}
            />

            <FloatingGeometry
                position={[2, -2, -4]}
                geometry="octahedron"
                size={0.4}
                color="#00d9ff"
                emissiveIntensity={0.6}
                rotationSpeed={0.002}
            />

            {/* Connection lines would go here - simplified for now */}
        </group>
    );
}

export default function VisionScene() {
    return (
        <>
            <AtmosphericFog color="#0d1020" near={6} far={18} />
            <VisionNodes />

            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={0.6} color="#a78bfa" />
            <pointLight position={[-5, -5, 0]} intensity={0.4} color="#00d9ff" />
        </>
    );
}

export function VisionOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-auto flex items-start justify-center z-10 pt-20 md:pt-32 pb-24 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={TRANSITION.reveal}
                    className="text-3xl md:text-5xl font-bold mb-10 text-glow-violet"
                >
                    Building systems for a smarter, more automated future.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.3 }}
                    className="text-lg text-gray-300 space-y-8"
                >
                    <p className="text-xl md:text-2xl font-light text-white/90">
                        I care about problems where technology is not just a tool — but a strategic advantage.
                    </p>

                    <div className="space-y-4 text-base flex flex-col items-center">
                        <p className="text-gray-400">I focus on building systems that help people and organizations:</p>
                        <ul className="list-none space-y-3 text-left inline-block">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-cyan)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Make better decisions using intelligence, not intuition</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-cyan)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Automate complex workflows without losing control</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-cyan)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Scale operations without increasing chaos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-cyan)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Trust digital systems in high-stakes environments</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-base pt-2 flex flex-col items-center">
                        <p className="text-gray-400">I believe the future belongs to platforms that are:</p>
                        <ul className="list-none space-y-3 text-left inline-block min-w-[200px]">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-violet)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>AI-first</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-violet)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Data-driven</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-violet)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Secure by design</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-accent-violet)] mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 block"></span>
                                <span>Built to evolve, not just launch</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm text-[var(--color-accent-cyan)] pt-8 italic tracking-wide">
                        My goal is to build digital infrastructure that compounds in value over time.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
