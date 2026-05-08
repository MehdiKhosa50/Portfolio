import React, { useEffect, useRef } from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    const lines = [];

    const createLine = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 80 + Math.random() * 170,
      speed: 0.45 + Math.random() * 1.15,
      angle: Math.random() > 0.5 ? 0 : Math.PI / 2,
      hue: Math.random() > 0.45 ? 185 : Math.random() > 0.5 ? 155 : 38,
      alpha: 0.2 + Math.random() * 0.35,
    });

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      lines.length = 0;
      const count = window.innerWidth < 720 ? 32 : 54;
      for (let index = 0; index < count; index += 1) {
        lines.push(createLine());
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.lineCap = 'round';

      lines.forEach((line, index) => {
        const dx = Math.cos(line.angle) * line.length;
        const dy = Math.sin(line.angle) * line.length;
        const gradient = context.createLinearGradient(line.x, line.y, line.x + dx, line.y + dy);
        gradient.addColorStop(0, `hsla(${line.hue}, 88%, 58%, 0)`);
        gradient.addColorStop(0.5, `hsla(${line.hue}, 88%, 58%, ${line.alpha})`);
        gradient.addColorStop(1, `hsla(${line.hue}, 88%, 58%, 0)`);

        context.strokeStyle = gradient;
        context.lineWidth = 1.4;
        context.beginPath();
        context.moveTo(line.x, line.y);
        context.lineTo(line.x + dx, line.y + dy);
        context.stroke();

        context.fillStyle = `hsla(${line.hue}, 88%, 58%, ${line.alpha + 0.12})`;
        context.fillRect(line.x + dx * 0.52, line.y + dy * 0.52, 3, 3);

        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x > width + line.length || line.y > height + line.length) {
          lines[index] = {
            ...createLine(),
            x: Math.random() * width * 0.35,
            y: Math.random() * height * 0.35,
          };
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Div>
      <canvas ref={canvasRef} />
      <div className="mesh-plane" />
      <div className="terminal-stack" aria-hidden="true">
        <div className="signal-card">
          <span className="card-line" />
          <span className="card-line mid" />
          <span className="card-line short" />
        </div>
        <div className="signal-card">
          <span className="card-line mid" />
          <span className="card-line short" />
        </div>
      </div>
    </Div>
  );
};

export default HeroBgAnimation;
