'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingGeometryProps {
    position?: [number, number, number];
    geometry?: 'box' | 'sphere' | 'torus' | 'octahedron';
    size?: number;
    color?: string;
    emissiveIntensity?: number;
    rotationSpeed?: number;
    driftSpeed?: number;
}

export default function FloatingGeometry({
    position = [0, 0, 0],
    geometry = 'box',
    size = 1,
    color = '#00d9ff',
    emissiveIntensity = 0.5,
    rotationSpeed = 0.002,
    driftSpeed = 0.001,
}: FloatingGeometryProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialY = position[1];

    useFrame((state) => {
        if (!meshRef.current) return;

        // Slow rotation
        meshRef.current.rotation.x += rotationSpeed;
        meshRef.current.rotation.y += rotationSpeed * 0.7;

        // Gentle drift
        const time = state.clock.elapsedTime;
        meshRef.current.position.y = initialY + Math.sin(time * driftSpeed) * 0.3;
    });

    const renderGeometry = () => {
        switch (geometry) {
            case 'sphere':
                return <sphereGeometry args={[size, 32, 32]} />;
            case 'torus':
                return <torusGeometry args={[size, size * 0.3, 16, 32]} />;
            case 'octahedron':
                return <octahedronGeometry args={[size]} />;
            default:
                return <boxGeometry args={[size, size, size]} />;
        }
    };

    return (
        <mesh ref={meshRef} position={position}>
            {renderGeometry()}
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={emissiveIntensity}
                metalness={0.8}
                roughness={0.2}
                wireframe={false}
            />
        </mesh>
    );
}
