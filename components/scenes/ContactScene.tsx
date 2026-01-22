'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import AtmosphericFog from '../3d/AtmosphericFog';
import { TRANSITION } from '@/lib/motion';

// Illuminated platform
function TerminalPlatform() {
    const platformRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!platformRef.current) return;

        // Gentle pulsing glow
        const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 0.8;
        const material = platformRef.current.material as THREE.MeshStandardMaterial;
        if (material) {
            material.emissiveIntensity = pulse * 0.3;
        }
    });

    return (
        <group>
            {/* Main platform */}
            <mesh ref={platformRef} position={[0, -1, 0]}>
                <boxGeometry args={[6, 0.2, 6]} />
                <meshStandardMaterial
                    color="#00d9ff"
                    emissive="#00d9ff"
                    emissiveIntensity={0.3}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Edge glow */}
            <lineSegments position={[0, -0.9, 0]}>
                <edgesGeometry args={[new THREE.BoxGeometry(6, 0.2, 6)]} />
                <lineBasicMaterial color="#00d9ff" transparent opacity={0.8} />
            </lineSegments>
        </group>
    );
}

export default function ContactScene() {
    return (
        <>
            <AtmosphericFog color="#080b15" near={3} far={12} />
            <TerminalPlatform />

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
            <spotLight
                position={[0, 8, 0]}
                angle={0.3}
                penumbra={0.5}
                intensity={1}
                color="#00d9ff"
                target-position={[0, -1, 0]}
            />
        </>
    );
}

export function ContactOverlay() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Add Web3Forms access key
        formData.append('access_key', '4496e452-08ae-49f0-9a79-a51be532597d');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                e.currentTarget.reset();

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSuccess(false);
                }, 5000);
            } else {
                alert('There was an error sending your message. Please try again or contact via LinkedIn.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error sending your message. Please try again or contact via LinkedIn.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-auto flex items-start justify-center z-10 overflow-y-auto pt-24 md:pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={TRANSITION.reveal}
                    className="text-4xl md:text-6xl font-bold mb-8 text-center text-glow"
                >
                    Let's build something meaningful.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.3 }}
                    className="text-lg text-gray-300 mb-8 text-center"
                >
                    I'm open to collaborations, partnerships, and ambitious problems worth solving.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.5 }}
                    className="text-base text-gray-400 mb-10 text-center"
                >
                    If you're building something impactful — or want to explore how intelligent systems can shape your product or business — let's talk.
                </motion.p>

                {/* Success Message */}
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-center"
                    >
                        <p className="text-green-400 font-medium">✓ Message sent successfully!</p>
                        <p className="text-sm text-green-300/70 mt-1">I'll get back to you soon.</p>
                    </motion.div>
                )}

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.7 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-lg mx-auto"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-[var(--color-bg-charcoal)]/40 border border-[var(--color-accent-cyan)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-[var(--color-bg-charcoal)]/40 border border-[var(--color-accent-cyan)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-[var(--color-bg-charcoal)]/40 border border-[var(--color-accent-cyan)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors resize-none"
                            placeholder="Tell me about your project or collaboration idea..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-[var(--color-accent-cyan)]/10 border-2 border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] rounded-lg hover:bg-[var(--color-accent-cyan)]/20 transition-all duration-300 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>

                {/* LinkedIn Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1 }}
                    className="mt-12 pt-8 border-t border-white/20 text-center"
                >
                    <p className="text-white/80 text-sm mb-4 font-medium uppercase tracking-wider">Connect</p>
                    <a
                        href="https://www.linkedin.com/in/jayamathi-ramesh-2993s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[var(--color-accent-cyan)] transition-colors text-lg inline-flex items-center gap-2 font-semibold bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-black/40"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="mt-12 text-sm text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto group"
                >
                    <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
                    Return to beginning
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...TRANSITION.reveal, delay: 1.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xs text-white/30">
                        &copy; {new Date().getFullYear()} S R Jayamathi. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
