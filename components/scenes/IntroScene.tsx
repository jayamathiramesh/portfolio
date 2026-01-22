'use client';

import { motion } from 'framer-motion';
import FloatingGeometry from '../3d/FloatingGeometry';
import GlowingGrid from '../3d/GlowingGrid';
import AtmosphericFog from '../3d/AtmosphericFog';
import { TRANSITION } from '@/lib/motion';

export default function IntroScene() {
    return (
        <>
            {/* 3D Elements */}
            <AtmosphericFog color="#0a0e1a" near={8} far={20} />
            <GlowingGrid size={30} divisions={30} opacity={0.15} position={[0, -3, 0]} />

            {/* Central floating structures */}
            <FloatingGeometry
                position={[0, 0, -5]}
                geometry="octahedron"
                size={2}
                color="#00d9ff"
                emissiveIntensity={0.6}
                rotationSpeed={0.001}
            />

            <FloatingGeometry
                position={[-3, 2, -8]}
                geometry="torus"
                size={0.8}
                color="#a78bfa"
                emissiveIntensity={0.4}
                rotationSpeed={0.002}
            />

            <FloatingGeometry
                position={[4, -1, -6]}
                geometry="box"
                size={1.2}
                color="#00d9ff"
                emissiveIntensity={0.3}
                rotationSpeed={0.0015}
            />

            {/* Ambient lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d9ff" />
            <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a78bfa" />
        </>
    );
}

export function IntroOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.3 }}
                    className="mb-8"
                >
                    <p className="text-4xl md:text-6xl font-bold text-[var(--color-accent-cyan)] tracking-wider uppercase mb-2">
                        S R Jayamathi
                    </p>
                    <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                        Founder & CEO | AI & Business Analytics
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.5 }}
                    className="text-2xl md:text-4xl font-bold mb-8 text-glow leading-tight"
                >
                    I build intelligent systems that turn complexity into clarity.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 1 }}
                    className="text-lg md:text-xl text-gray-300 space-y-4 mb-8"
                >
                    <p>
                        I'm a tech founder designing AI-driven, data-centric platforms that scale from idea to real-world impact.
                    </p>
                    <p className="text-base text-gray-400">
                        Computer Science Engineer turned founder. Currently pursuing AI & Business Analytics at Great Lakes Institute of Management while building <span className="text-[var(--color-accent-violet)]">JALENTHRA</span> — systems that help organizations make better decisions, automate workflows, and scale operations.
                    </p>
                    <p className="text-sm text-gray-500">
                        This is not a résumé or a portfolio of projects.<br />
                        It's an interactive window into how I think, build, and shape technology.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1.5 }}
                    className="text-sm text-[var(--color-accent-cyan)] tracking-wider uppercase"
                >
                    Enter the architecture behind the vision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 2 }}
                    className="mt-12 text-xs text-gray-500"
                >
                    Scroll or use arrow keys to explore →
                </motion.div>
            </div>
        </div>
    );
}
