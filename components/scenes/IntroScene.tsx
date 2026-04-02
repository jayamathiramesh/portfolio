'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import FloatingGeometry from '../3d/FloatingGeometry';
import AtmosphericFog from '../3d/AtmosphericFog';
import GlowingGrid from '../3d/GlowingGrid';
import { TRANSITION } from '@/lib/motion';

export default function IntroScene() {
    return (
        <>
            <AtmosphericFog color="#0d1020" near={6} far={18} />
            <GlowingGrid position={[0, -2, 0]} color="#00d9ff" />

            <FloatingGeometry
                position={[4, 2, -5]}
                geometry="torus"
                size={0.6}
                color="#7c3aed"
                emissiveIntensity={0.5}
                rotationSpeed={0.005}
            />

            <FloatingGeometry
                position={[-4, -1, -4]}
                geometry="octahedron"
                size={0.8}
                color="#00d9ff"
                emissiveIntensity={0.4}
                rotationSpeed={0.003}
            />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
        </>
    );
}

export function IntroOverlay() {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <>
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
                <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center scene-content">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...TRANSITION.reveal, delay: 0.1 }}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] shadow-[0_0_30px_rgba(0,217,255,0.2)] mb-4 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setIsImageOpen(true)}
                    >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1020] relative">
                        {/* 
                            Make sure to add your picture as 'profile.jpg' or 'profile.png' in the 'public' folder.
                            If your file has a different name or extension, update the src attribute below.
                        */}
                        <Image
                            src="/profile.jpeg" 
                            alt="Jayamathi Ramesh"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Name + Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.3 }}
                    className="mb-4 w-full block"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-[var(--color-accent-cyan)]">
                        Jayamathi Ramesh
                    </h1>

                    <p className="mt-1 md:mt-2 text-lg md:text-xl text-gray-400 font-light tracking-wide">
                        Founder & CEO | AI & Business Analytics
                    </p>

                    {/* Legal name — subtle, secondary */}
                    <p className="mt-1 text-[10px] md:text-xs text-gray-500 tracking-wide">
                        Legally known as S R Jayamathi
                    </p>
                </motion.div>

                {/* Core statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.5 }}
                    className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-glow leading-tight"
                >
                    I build intelligent systems that turn complexity into clarity.
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 1 }}
                    className="text-base md:text-lg text-gray-300 space-y-3 mb-6"
                >
                    <p>
                        I'm a tech founder designing AI-driven, data-centric platforms that scale from idea to real-world impact.
                    </p>

                    <p className="text-sm md:text-base text-gray-400">
                        Computer Science Engineer turned founder. Currently pursuing AI & Business Analytics at GLIM while building{" "}
                        <span className="text-[var(--color-accent-violet)]">JALENTHRA</span> — systems that help organizations automate workflows.
                    </p>

                    <p className="text-xs md:text-sm text-gray-500">
                        This is not a résumé or a portfolio of projects.
                        <br />
                        It’s an interactive window into how I think, build, and shape technology.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1.5 }}
                    className="text-xs md:text-sm text-[var(--color-accent-cyan)] tracking-wider uppercase"
                >
                    Enter the architecture behind the vision.
                </motion.p>

                {/* Navigation hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 2 }}
                    className="mt-6 md:mt-8 text-[10px] md:text-xs text-gray-500"
                >
                    Scroll or use arrow keys to explore →
                </motion.div>
            </div>
        </div>

            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsImageOpen(false)}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square rounded-2xl overflow-hidden border border-[var(--color-accent-cyan)]/30 shadow-[0_0_50px_rgba(0,217,255,0.3)] bg-[#0d1020]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src="/profile.jpeg" 
                                alt="Jayamathi Ramesh"
                                fill
                                className="object-cover"
                            />
                            
                            <button 
                                onClick={() => setIsImageOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md"
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
