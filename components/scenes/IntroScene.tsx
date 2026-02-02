import { motion } from 'framer-motion';
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
    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Name + Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.3 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase text-[var(--color-accent-cyan)]">
                        Jayamathi Ramesh
                    </h1>

                    <p className="mt-2 text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                        Founder & CEO | AI & Business Analytics
                    </p>

                    {/* Legal name — subtle, secondary */}
                    <p className="mt-1 text-xs text-gray-500 tracking-wide">
                        Legally known as S R Jayamathi
                    </p>
                </motion.div>

                {/* Core statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...TRANSITION.reveal, delay: 0.5 }}
                    className="text-2xl md:text-4xl font-bold mb-8 text-glow leading-tight"
                >
                    I build intelligent systems that turn complexity into clarity.
                </motion.h2>

                {/* Description */}
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
                        Computer Science Engineer turned founder. Currently pursuing AI & Business Analytics at Great Lakes Institute of Management while building{" "}
                        <span className="text-[var(--color-accent-violet)]">JALENTHRA</span> — systems that help organizations make better decisions, automate workflows, and scale operations.
                    </p>

                    <p className="text-sm text-gray-500">
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
                    className="text-sm text-[var(--color-accent-cyan)] tracking-wider uppercase"
                >
                    Enter the architecture behind the vision.
                </motion.p>

                {/* Navigation hint */}
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
