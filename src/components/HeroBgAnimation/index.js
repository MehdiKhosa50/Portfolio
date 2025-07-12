import React, { useEffect, useRef } from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      constructor(x, y, type = 'orb') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.005;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.1;
        this.color = type === 'orb' ? 
          `hsl(${Math.random() * 60 + 250}, 70%, 60%)` : 
          `hsl(${Math.random() * 60 + 180}, 80%, 50%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.angleSpeed;
        this.life -= this.decay;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        
        if (this.type === 'orb') {
          // Draw glowing orb
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
          );
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(0.5, this.color.replace('60%)', '30%)'));
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw data stream
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.size;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(
            this.x + Math.cos(this.angle) * 20,
            this.y + Math.sin(this.angle) * 20
          );
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Neural network connections
    class Connection {
      constructor(particle1, particle2) {
        this.particle1 = particle1;
        this.particle2 = particle2;
        this.life = 1;
        this.decay = 0.01;
      }

      update() {
        this.life -= this.decay;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.particle1.x - this.particle2.x, 2) +
          Math.pow(this.particle1.y - this.particle2.y, 2)
        );

        if (distance < 150 && this.life > 0) {
          ctx.save();
          ctx.globalAlpha = this.life * (1 - distance / 150);
          ctx.strokeStyle = `rgba(133, 76, 230, ${this.life * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const particles = [];
    const connections = [];
    
    // Create orbs
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'orb'
      ));
    }

    // Create data streams
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'stream'
      ));
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            particle.type
          );
        }
      });

      // Create connections between nearby orbs
      connections.length = 0;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type === 'orb') {
          for (let j = i + 1; j < particles.length; j++) {
            if (particles[j].type === 'orb') {
              connections.push(new Connection(particles[i], particles[j]));
            }
          }
        }
      }

      // Update and draw connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Draw gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(133, 76, 230, 0.1)');
      gradient.addColorStop(0.5, 'rgba(19, 173, 199, 0.1)');
      gradient.addColorStop(1, 'rgba(148, 93, 214, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Data grid overlay */}
      <div className="data-grid"></div>

      {/* Pulse rings */}
      <div className="pulse-rings">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>
    </Div>
  );
};

export default HeroBgAnimation;