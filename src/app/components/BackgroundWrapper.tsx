'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the MatrixBackground to avoid SSR issues with canvas
const MatrixBackground = dynamic(
  () => import('./MatrixBackground'),
  { ssr: false }
);

export default function BackgroundWrapper() {
  return (
    <Suspense fallback={null}>
      <MatrixBackground />
    </Suspense>
  );
} 