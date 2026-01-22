'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SceneId, SCENES, SCENE_ORDER } from '@/lib/scene-config';
import { TRANSITION } from '@/lib/motion';

interface NavigationHUDProps {
    currentScene: SceneId;
    onNavigate: (scene: SceneId) => void;
}

export default function NavigationHUD({ currentScene, onNavigate }: NavigationHUDProps) {
    const currentIndex = SCENE_ORDER.indexOf(currentScene);
    const progress = ((currentIndex + 1) / SCENE_ORDER.length) * 100;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            {/* Top HUD */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-start justify-between">
                {/* Scene indicator */}
                <div className="space-y-2">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`hud-${currentScene}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={TRANSITION.hover}
                            className="text-xs text-[var(--color-accent-cyan)] tracking-widest uppercase"
                        >
                            {SCENES[currentScene].hudText}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={`title-${currentScene}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={TRANSITION.hover}
                            className="text-sm text-white/80 font-medium"
                        >
                            {SCENES[currentScene].title}
                        </motion.h3>
                    </AnimatePresence>
                </div>

                {/* Progress indicator */}
                <div className="text-right space-y-2">
                    <p className="text-xs text-gray-500">
                        {currentIndex + 1} / {SCENE_ORDER.length}
                    </p>
                    <div className="w-32 h-0.5 bg-gray-800">
                        <motion.div
                            className="h-full bg-[var(--color-accent-cyan)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={TRANSITION.sceneTransition}
                        />
                    </div>
                </div>
            </div>

            {/* Scene navigation dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-auto">
                {SCENE_ORDER.map((sceneId, index) => (
                    <button
                        key={sceneId}
                        onClick={() => onNavigate(sceneId)}
                        className="group relative"
                        aria-label={`Navigate to ${SCENES[sceneId].title}`}
                    >
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${sceneId === currentScene
                                    ? 'bg-[var(--color-accent-cyan)] scale-125'
                                    : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {SCENES[sceneId].title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Keyboard hint */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-xs text-gray-600 text-center"
                >
                    Use ↑↓ arrow keys or scroll to navigate
                </motion.p>
            </div>
        </div>
    );
}
