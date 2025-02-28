'use client';

import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const drawMatrix = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font and text color
      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Varying green colors for a more dynamic effect
        const green = 128 + Math.floor(Math.random() * 128);
        ctx.fillStyle = `rgba(0, ${green}, 0, 0.8)`;
        
        // Draw text at position
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset position when hitting bottom or randomly
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drops down
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 70);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};

export default MatrixBackground; 