import * as THREE from 'three';

export const lerp = (start: number, end: number, t: number): number => {
    return start + (end - start) * t;
};

export const lerpVector3 = (
    start: THREE.Vector3,
    end: THREE.Vector3,
    t: number
): THREE.Vector3 => {
    return new THREE.Vector3(
        lerp(start.x, end.x, t),
        lerp(start.y, end.y, t),
        lerp(start.z, end.z, t)
    );
};

// Smooth easing function for camera movement
export const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
};

// Calculate smooth camera transition
export const calculateCameraTransition = (
    currentPos: [number, number, number],
    targetPos: [number, number, number],
    progress: number // 0 to 1
): [number, number, number] => {
    const easedProgress = easeInOutCubic(progress);

    return [
        lerp(currentPos[0], targetPos[0], easedProgress),
        lerp(currentPos[1], targetPos[1], easedProgress),
        lerp(currentPos[2], targetPos[2], easedProgress),
    ];
};
