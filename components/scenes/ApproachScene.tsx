'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import AtmosphericFog from '../3d/AtmosphericFog';
import { TRANSITION } from '@/lib/motion';

// Blueprint-style grid planes
function BlueprintGrids() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Very subtle fade in/out of layers
        const time = state.clock.elapsedTime;
        groupRef.current.children.forEach((child, index) => {
            const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
            if (material) {
                material.opacity = 0.1 + Math.sin(time * 0.3 + index * 0.5) * 0.05;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {/* Layered translucent planes */}
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} position={[0, i * 0.5 - 1, -5 - i]} rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[15, 15, 15, 15]} />
                    <meshBasicMaterial
                        color="#00d9ff"
                        wireframe
                        transparent
                        opacity={0.1}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function ApproachScene() {
    return (
        <>
            <AtmosphericFog color="#0a0e1a" near={5} far={18} />
            <BlueprintGrids />

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />
            <pointLight position={[5, -2, 5]} intensity={0.3} color="#00d9ff" />
        </>
    );
}

export function ApproachOverlay() {
    const principles = [
        'Product-first thinking',
        'MVP-to-scale architecture',
        'AI-first design',
        'Security and reliability as defaults',
        'Rapid iteration with long-term structure',
    ];

    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
            <div className="max-w-3xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={TRANSITION.reveal}
                    className="text-4xl md:text-6xl font-bold mb-8 text-glow"
                >
                    From vision to execution.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10"
                >
                    I operate at the intersection of product, engineering, and strategy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.4 }}
                    className="mb-8"
                >
                    <h3 className="text-lg text-[var(--color-accent-cyan)] mb-4 uppercase tracking-wider">
                        Core Principles
                    </h3>
                    <ul className="space-y-3">
                        {principles.map((principle, index) => (
                            <motion.li
                                key={principle}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ...TRANSITION.reveal, delay: 0.5 + index * 0.1 }}
                                className="flex items-start text-base text-gray-300"
                            >
                                <span className="text-[var(--color-accent-cyan)] mr-3">–</span>
                                <span>{principle}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 1 }}
                    className="space-y-3 text-base text-gray-400"
                >
                    <p>I don't chase trends or features.</p>
                    <p>I design systems that survive growth.</p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1.3 }}
                    className="text-sm text-[var(--color-accent-violet)] mt-8 italic"
                >
                    Building is easy. Building things that last is hard.
                </motion.p>
            </div>
        </div>
    );
}
