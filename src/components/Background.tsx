'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let offset = 0;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gridSize = 40;
      const horizonY = canvas.height * 0.4; // Horizon line position
      const speed = 0.5;
      
      offset = (offset + speed) % gridSize;

      ctx.lineWidth = 1;
      
      // Vertical lines (Perspective)
      // We draw lines radiating from the center of the horizon
      const centerX = canvas.width / 2;
      // Number of vertical lines
      const numVerticalLines = Math.ceil(canvas.width / 20); 
      
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.1)'; // Cyan text color
      
      for (let i = -numVerticalLines; i <= numVerticalLines; i++) {
        const x = centerX + i * 50; // Base spacing at bottom
        
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY);
        // Calculate bottom intersection
        // Simple perspective: lines spread out from center
        // We actually want parallel lines in 3D, which vanish to a point
        // But for a simple retro grid, radiating lines work well
         
        // Let's do simple perspective projection
        // x_screen = (x_world / z_world) * f + center_x
        // z moves from near to far
        
        ctx.lineTo(centerX + (i * 100), canvas.height);
        ctx.stroke();
      }

      // Horizontal lines (moving towards viewer)
      // z goes from far (horizon) to near (bottom)
      // We simulate movement by changing the starting z
      
      for (let i = 0; i < 20; i++) {
        // Logarithmic spacing for perspective
        // y positions closer together near horizon, further apart near bottom
        const p = (i * gridSize + offset) % (canvas.height - horizonY);
        // Map linear progress to exponential/perspective y
        // normalized 0 to 1
        const t = p / (canvas.height - horizonY);
        const y = horizonY + (Math.pow(t, 2)) * (canvas.height - horizonY); // Quadratic spacing
        
        const alpha = Math.max(0, t * 0.3); // Fade out near horizon
        ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw faint horizon glow
      const gradient = ctx.createLinearGradient(0, horizonY - 50, 0, horizonY + 50);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(0, 243, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, horizonY - 50, canvas.width, 100);

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    drawGrid();

    window.addEventListener('resize', () => {
      resizeCanvas();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-background"
    />
  );
}
