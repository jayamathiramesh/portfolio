'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import to avoid SSR issues with Three.js
const ExperienceController = dynamic(
  () => import('@/components/experience/ExperienceController'),
  { ssr: false }
);

function LoadingFallback() {
  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deep)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-[var(--color-accent-cyan)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Initializing experience…</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<LoadingFallback />}>
        <ExperienceController />
      </Suspense>
    </main>
  );
}
