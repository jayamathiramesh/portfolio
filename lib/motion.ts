// Motion constants for cinematic, calm animations

export const EASING = {
    smooth: [0.4, 0, 0.2, 1] as const,
    cinematic: [0.65, 0, 0.35, 1] as const,
    gentle: [0.25, 0.1, 0.25, 1] as const,
};

export const DURATION = {
    sceneTransition: 2000, // ms
    reveal: 1200,
    hover: 400,
    fast: 200,
};

// Framer Motion spring configs
export const SPRING = {
    smooth: {
        type: 'spring' as const,
        stiffness: 50,
        damping: 20,
    },
    gentle: {
        type: 'spring' as const,
        stiffness: 30,
        damping: 15,
    },
};

// Framer Motion transition presets
export const TRANSITION = {
    sceneTransition: {
        duration: DURATION.sceneTransition / 1000,
        ease: EASING.cinematic,
    },
    reveal: {
        duration: DURATION.reveal / 1000,
        ease: EASING.smooth,
    },
    hover: {
        duration: DURATION.hover / 1000,
        ease: EASING.gentle,
    },
};

// Variants for reduced motion support
export const getAnimationVariants = (prefersReducedMotion: boolean) => {
    if (prefersReducedMotion) {
        return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        };
    }

    return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };
};
