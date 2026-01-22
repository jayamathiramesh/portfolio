'use client';

interface AtmosphericFogProps {
    color?: string;
    near?: number;
    far?: number;
}

export default function AtmosphericFog({
    color = '#0a0e1a',
    near = 5,
    far = 25,
}: AtmosphericFogProps) {
    return <fog attach="fog" args={[color, near, far]} />;
}
