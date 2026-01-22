'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import { SceneId, SCENE_ORDER, SCENES } from '@/lib/scene-config';
import { useSceneFromProgress, useKeyboardNavigation } from '@/hooks/useScrollProgress';

import IntroScene, { IntroOverlay } from '../scenes/IntroScene';
import VisionScene, { VisionOverlay } from '../scenes/VisionScene';
import CapabilitiesScene, { CapabilitiesOverlay } from '../scenes/CapabilitiesScene';
import ApproachScene, { ApproachOverlay } from '../scenes/ApproachScene';
import ContactScene, { ContactOverlay } from '../scenes/ContactScene';
import NavigationHUD from '../ui/NavigationHUD';

export default function ExperienceController() {
    const sceneIndexFromScroll = useSceneFromProgress(SCENE_ORDER.length);
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 10]);
    const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);

    const currentScene = SCENE_ORDER[currentSceneIndex];

    // Update scene based on scroll
    useEffect(() => {
        setCurrentSceneIndex(sceneIndexFromScroll);
    }, [sceneIndexFromScroll]);

    // Update camera when scene changes
    useEffect(() => {
        const scene = SCENES[currentScene];
        setCameraPosition(scene.cameraPosition);
        setCameraTarget(scene.cameraTarget);
    }, [currentScene]);

    // Keyboard navigation
    const handleNavigate = useCallback((index: number) => {
        const targetY = (index / SCENE_ORDER.length) * (document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo({
            top: targetY,
            behavior: 'smooth',
        });
    }, []);

    const handleNavigateToScene = useCallback((sceneId: SceneId) => {
        const index = SCENE_ORDER.indexOf(sceneId);
        if (index !== -1) {
            handleNavigate(index);
        }
    }, [handleNavigate]);

    useKeyboardNavigation(currentSceneIndex, SCENE_ORDER.length, handleNavigate);

    // Render current 3D scene
    const render3DScene = () => {
        switch (currentScene) {
            case 'intro':
                return <IntroScene />;
            case 'vision':
                return <VisionScene />;
            case 'capabilities':
                return <CapabilitiesScene />;
            case 'approach':
                return <ApproachScene />;
            case 'contact':
                return <ContactScene />;
            default:
                return <IntroScene />;
        }
    };

    // Render current overlay
    const renderOverlay = () => {
        switch (currentScene) {
            case 'intro':
                return <IntroOverlay key="intro" />;
            case 'vision':
                return <VisionOverlay key="vision" />;
            case 'capabilities':
                return <CapabilitiesOverlay key="capabilities" />;
            case 'approach':
                return <ApproachOverlay key="approach" />;
            case 'contact':
                return <ContactOverlay key="contact" />;
            default:
                return <IntroOverlay key="intro" />;
        }
    };

    return (
        <>
            {/* 3D Canvas - Fixed position */}
            <div className="fixed inset-0 bg-gradient-horizon">
                <Canvas
                    gl={{ antialias: true, alpha: false }}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        <AnimatedCamera position={cameraPosition} target={cameraTarget} />
                        {render3DScene()}
                    </Suspense>
                </Canvas>
            </div>

            {/* HTML Overlays */}
            <AnimatePresence mode="wait">
                {renderOverlay()}
            </AnimatePresence>

            {/* Navigation HUD */}
            <NavigationHUD currentScene={currentScene} onNavigate={handleNavigateToScene} />

            {/* Spacer for scroll - creates scrollable height */}
            <div
                className="relative pointer-events-none"
                style={{ height: `${SCENE_ORDER.length * 100}vh` }}
            />
        </>
    );
}

// Animated camera component
function AnimatedCamera({
    position,
    target,
}: {
    position: [number, number, number];
    target: [number, number, number];
}) {
    const [currentPos, setCurrentPos] = useState(position);
    const [currentTarget, setCurrentTarget] = useState(target);

    useEffect(() => {
        // Smooth transition
        const duration = 2000; // ms
        const startTime = Date.now();
        const startPos = currentPos;
        const startTarget = currentTarget;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing
            const eased = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const newPos: [number, number, number] = [
                startPos[0] + (position[0] - startPos[0]) * eased,
                startPos[1] + (position[1] - startPos[1]) * eased,
                startPos[2] + (position[2] - startPos[2]) * eased,
            ];

            const newTarget: [number, number, number] = [
                startTarget[0] + (target[0] - startTarget[0]) * eased,
                startTarget[1] + (target[1] - startTarget[1]) * eased,
                startTarget[2] + (target[2] - startTarget[2]) * eased,
            ];

            setCurrentPos(newPos);
            setCurrentTarget(newTarget);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [position, target]);

    return (
        <PerspectiveCamera
            makeDefault
            position={currentPos}
            fov={60}
            near={0.1}
            far={1000}
            onUpdate={(camera) => {
                camera.lookAt(new THREE.Vector3(...currentTarget));
            }}
        />
    );
}
