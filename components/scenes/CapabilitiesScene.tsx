'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import FloatingGeometry from '../3d/FloatingGeometry';
import AtmosphericFog from '../3d/AtmosphericFog';
import { TRANSITION } from '@/lib/motion';

// Dynamic assembling structures representing each capability domain
function CapabilityStructures() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const time = state.clock.elapsedTime;

        // Gentle overall rotation
        groupRef.current.rotation.y = Math.sin(time * 0.05) * 0.3;
    });

    return (
        <group ref={groupRef}>
            {/* AI Systems - cluster on the right */}
            <group position={[4, 2, -4]}>
                <FloatingGeometry
                    position={[0, 0, 0]}
                    geometry="sphere"
                    size={0.8}
                    color="#a78bfa"
                    emissiveIntensity={0.7}
                    rotationSpeed={0.002}
                />
                <FloatingGeometry
                    position={[0.5, 1, 0.5]}
                    geometry="octahedron"
                    size={0.4}
                    color="#a78bfa"
                    emissiveIntensity={0.5}
                    rotationSpeed={0.003}
                />
            </group>

            {/* Automation Platforms - cluster on the left */}
            <group position={[-4, 1, -5]}>
                <FloatingGeometry
                    position={[0, 0, 0]}
                    geometry="box"
                    size={1}
                    color="#00d9ff"
                    emissiveIntensity={0.6}
                    rotationSpeed={0.0015}
                />
                <FloatingGeometry
                    position={[-0.8, 0.8, -0.5]}
                    geometry="box"
                    size={0.5}
                    color="#00d9ff"
                    emissiveIntensity={0.4}
                    rotationSpeed={0.002}
                />
            </group>

            {/* Data Platforms - cluster at top */}
            <group position={[0, 4, -6]}>
                <FloatingGeometry
                    position={[0, 0, 0]}
                    geometry="torus"
                    size={1}
                    color="#00d9ff"
                    emissiveIntensity={0.6}
                    rotationSpeed={0.001}
                />
                <FloatingGeometry
                    position={[1, -0.5, 0]}
                    geometry="octahedron"
                    size={0.5}
                    color="#a78bfa"
                    emissiveIntensity={0.5}
                    rotationSpeed={0.0025}
                />
            </group>

            {/* Digital Infrastructure - cluster at bottom */}
            <group position={[1, -2, -5]}>
                <FloatingGeometry
                    position={[0, 0, 0]}
                    geometry="box"
                    size={1.2}
                    color="#00d9ff"
                    emissiveIntensity={0.5}
                    rotationSpeed={0.0012}
                />
                <FloatingGeometry
                    position={[-1, 0.5, 0.5]}
                    geometry="sphere"
                    size={0.6}
                    color="#00d9ff"
                    emissiveIntensity={0.4}
                    rotationSpeed={0.002}
                />
            </group>
        </group>
    );
}

export default function CapabilitiesScene() {
    return (
        <>
            <AtmosphericFog color="#0f1228" near={7} far={20} />
            <CapabilityStructures />

            <ambientLight intensity={0.35} />
            <pointLight position={[8, 5, 2]} intensity={0.7} color="#00d9ff" />
            <pointLight position={[-8, -3, 2]} intensity={0.5} color="#a78bfa" />
        </>
    );
}

export function CapabilitiesOverlay() {
    const capabilities = [
        {
            title: 'AI Systems',
            description: 'Decision engines, predictive intelligence, and automation layers that learn and adapt.',
        },
        {
            title: 'Automation Platforms',
            description: 'Workflow systems that remove friction, reduce manual work, and scale operations.',
        },
        {
            title: 'Data Platforms',
            description: 'Architectures that transform raw data into actionable insight.',
        },
        {
            title: 'Digital Infrastructure',
            description: 'Secure, reliable foundations for long-term product growth.',
        },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={TRANSITION.reveal}
                    className="text-4xl md:text-6xl font-bold mb-12 text-center text-glow"
                >
                    Systems, not just software.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10 text-center"
                >
                    I design and build intelligent digital systems across four core domains:
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...TRANSITION.reveal, delay: 0.3 + index * 0.15 }}
                            className="bg-[var(--color-bg-charcoal)]/40 backdrop-blur-sm border border-[var(--color-accent-cyan)]/20 rounded-lg p-6"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-[var(--color-accent-cyan)]">
                                {capability.title}
                            </h3>
                            <p className="text-sm text-gray-400">{capability.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1 }}
                    className="text-sm text-[var(--color-accent-violet)] text-center italic"
                >
                    Everything I build is designed to scale from prototype to production.
                </motion.p>
            </div>
        </div>
    );
}
