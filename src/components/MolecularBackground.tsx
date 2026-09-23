import React, { useEffect, useRef } from 'react';

export const MolecularBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    // Ambient floating network nodes spanning entire viewport
    const ambientNodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1.2,
      color: Math.random() > 0.35 ? 'rgba(25, 217, 255, 0.5)' : 'rgba(143, 234, 34, 0.5)',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012;

      const mouse = mouseRef.current;

      // 1. Render ambient floating molecular nodes
      for (let i = 0; i < ambientNodes.length; i++) {
        const node = ambientNodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        const isNearCursor = distMouse < 180;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isNearCursor ? node.radius * 2 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearCursor ? '#19D9FF' : node.color;
        if (isNearCursor) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#19D9FF';
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < ambientNodes.length; j++) {
          const other = ambientNodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(27, 48, 69, ${0.22 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw laser line to cursor
        if (isNearCursor) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(25, 217, 255, ${0.35 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // 2. Render Full Viewport Continuous 3D Double Helix on Right Side
      const isMobile = width < 768;
      const helixCenterX = isMobile ? width * 0.88 : width * 0.84;
      const helixWidth = isMobile ? 65 : 140;
      const stepY = 24;
      const totalPoints = Math.ceil(height / stepY) + 6;

      for (let i = -3; i < totalPoints; i++) {
        const y = i * stepY + ((time * 30) % stepY);
        const angle1 = i * 0.2 + time;
        const angle2 = angle1 + Math.PI;

        const x1 = helixCenterX + Math.sin(angle1) * helixWidth;
        const z1 = Math.cos(angle1);
        const r1 = Math.max(2, 4 + z1 * 2);

        const x2 = helixCenterX + Math.sin(angle2) * helixWidth;
        const z2 = Math.cos(angle2);
        const r2 = Math.max(2, 4 + z2 * 2);

        const d1Mouse = Math.hypot(mouse.x - x1, mouse.y - y);
        const d2Mouse = Math.hypot(mouse.x - x2, mouse.y - y);

        // Base pair connecting line (hydrogen bond)
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        const lineAlpha = 0.22 + Math.abs(z1) * 0.2;
        ctx.strokeStyle = i % 3 === 0 ? `rgba(143, 234, 34, ${lineAlpha})` : `rgba(25, 217, 255, ${lineAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Strand 1 node (Cyan)
        ctx.beginPath();
        ctx.arc(x1, y, d1Mouse < 140 ? r1 * 1.7 : r1, 0, Math.PI * 2);
        const alpha1 = Math.max(0.3, 0.5 + z1 * 0.5);
        ctx.fillStyle = d1Mouse < 140 ? '#19D9FF' : (i % 4 === 0 ? `rgba(143, 234, 34, ${alpha1})` : `rgba(25, 217, 255, ${alpha1})`);
        ctx.shadowBlur = d1Mouse < 140 ? 16 : (z1 > 0 ? 10 : 0);
        ctx.shadowColor = '#19D9FF';
        ctx.fill();

        // Strand 2 node (Lime / Light Cyan)
        ctx.beginPath();
        ctx.arc(x2, y, d2Mouse < 140 ? r2 * 1.7 : r2, 0, Math.PI * 2);
        const alpha2 = Math.max(0.3, 0.5 + z2 * 0.5);
        ctx.fillStyle = d2Mouse < 140 ? '#8FEA22' : (i % 5 === 0 ? `rgba(143, 234, 34, ${alpha2})` : `rgba(169, 237, 255, ${alpha2})`);
        ctx.shadowBlur = d2Mouse < 140 ? 16 : (z2 > 0 ? 10 : 0);
        ctx.shadowColor = '#8FEA22';
        ctx.fill();

        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85 w-full h-full"
    />
  );
};
