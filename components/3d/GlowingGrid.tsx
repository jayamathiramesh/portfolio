'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowingGridProps {
    size?: number;
    divisions?: number;
    color?: string;
    opacity?: number;
    position?: [number, number, number];
}

export default function GlowingGrid({
    size = 20,
    divisions = 20,
    color = '#00d9ff',
    opacity = 0.3,
    position = [0, -2, 0],
}: GlowingGridProps) {
    const gridRef = useRef<THREE.GridHelper>(null);

    useFrame((state) => {
        if (!gridRef.current) return;

        // Subtle pulsing effect
        const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + 0.9;
        if (gridRef.current.material) {
            (gridRef.current.material as THREE.Material).opacity = opacity * pulse;
        }
    });

    return (
        <gridHelper
            ref={gridRef}
            args={[size, divisions, color, color]}
            position={position}
        >
            <lineBasicMaterial attach="material" transparent opacity={opacity} />
        </gridHelper>
    );
}
