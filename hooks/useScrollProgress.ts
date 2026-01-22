'use client';

import { useState, useEffect, useCallback } from 'react';

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const newProgress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
            setProgress(Math.min(Math.max(newProgress, 0), 1));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}

export function useSceneFromProgress(totalScenes: number) {
    const progress = useScrollProgress();

    // Map scroll progress to scene index
    const sceneIndex = Math.floor(progress * totalScenes);
    return Math.min(sceneIndex, totalScenes - 1);
}

export function useKeyboardNavigation(
    currentIndex: number,
    totalScenes: number,
    onNavigate: (index: number) => void
) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                if (currentIndex < totalScenes - 1) {
                    onNavigate(currentIndex + 1);
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                if (currentIndex > 0) {
                    onNavigate(currentIndex - 1);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, totalScenes, onNavigate]);
}
