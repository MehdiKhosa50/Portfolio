import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
`;

const gridMove = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(50px) translateY(50px);
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);

  /* Canvas positioning - only on left side for desktop */
  canvas {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 60% !important;
    height: 100% !important;
    z-index: -1;
  }

  /* Floating geometric shapes - positioned to avoid profile image */
  .floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: ${float} 20s ease-in-out infinite;
  }

  .shape-1 {
    top: 20%;
    left: 10%;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #854CE6, #13ADC7);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation-delay: 0s;
  }

  .shape-2 {
    top: 60%;
    left: 15%;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #13ADC7, #945DD6);
    border-radius: 50%;
    animation-delay: -5s;
  }

  .shape-3 {
    bottom: 30%;
    left: 20%;
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #945DD6, #854CE6);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    animation-delay: -10s;
  }

  .shape-4 {
    top: 40%;
    left: 40%;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #854CE6, #13ADC7);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation-delay: -15s;
  }

  .shape-5 {
    bottom: 20%;
    left: 30%;
    width: 70px;
    height: 70px;
    background: linear-gradient(45deg, #13ADC7, #945DD6);
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    animation-delay: -7s;
  }

  /* Data grid overlay - only on left side */
  .data-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(133, 76, 230, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(133, 76, 230, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${gridMove} 30s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  /* Pulse rings - positioned to avoid profile image */
  .pulse-rings {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2;
  }

  .ring {
    position: absolute;
    border: 2px solid rgba(133, 76, 230, 0.3);
    border-radius: 50%;
    animation: ${pulse} 4s ease-in-out infinite;
  }

  .ring-1 {
    width: 200px;
    height: 200px;
    animation-delay: 0s;
  }

  .ring-2 {
    width: 300px;
    height: 300px;
    border-color: rgba(19, 173, 199, 0.3);
    animation-delay: -1.5s;
  }

  .ring-3 {
    width: 400px;
    height: 400px;
    border-color: rgba(148, 93, 214, 0.3);
    animation-delay: -3s;
  }

  /* Mobile responsive - full width on mobile */
  @media (max-width: 960px) {
    canvas {
      width: 100% !important;
    }
    
    .floating-shapes {
      width: 100%;
    }
    
    .data-grid {
      width: 100%;
    }
    
    .pulse-rings {
      left: 50%;
    }
    
    .shape {
      transform: scale(0.7);
    }
    
    .ring-1 { width: 150px; height: 150px; }
    .ring-2 { width: 220px; height: 220px; }
    .ring-3 { width: 300px; height: 300px; }
    
    .data-grid {
      background-size: 30px 30px;
    }
  }

  @media (max-width: 480px) {
    .shape {
      transform: scale(0.5);
    }
    
    .ring-1 { width: 100px; height: 100px; }
    .ring-2 { width: 150px; height: 150px; }
    .ring-3 { width: 200px; height: 200px; }
    
    .data-grid {
      background-size: 20px 20px;
    }
  }
`;