import styled, { keyframes } from 'styled-components';

const tiltFlow = keyframes`
  0%, 100% {
    transform: rotateX(64deg) rotateZ(-18deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotateX(64deg) rotateZ(-18deg) translate3d(18px, -18px, 0);
  }
`;

const lift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: translate3d(0, -14px, 0) rotateX(8deg) rotateY(-8deg);
  }
`;

const scan = keyframes`
  from {
    transform: translateX(-110%);
  }

  to {
    transform: translateX(110%);
  }
`;

export const Div = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  canvas {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    z-index: 0;
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.74 : 0.5)};
  }

  .mesh-plane {
    position: absolute;
    right: -10%;
    bottom: -18%;
    width: min(760px, 80vw);
    height: min(760px, 80vw);
    transform-style: preserve-3d;
    background-image:
      linear-gradient(${({ theme }) => theme.borderStrong} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.borderStrong} 1px, transparent 1px);
    background-size: 44px 44px;
    border: 1px solid ${({ theme }) => theme.border};
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.22 : 0.36)};
    animation: ${tiltFlow} 12s ease-in-out infinite;
  }

  .terminal-stack {
    position: absolute;
    right: 8%;
    top: 18%;
    display: grid;
    gap: 12px;
    transform: perspective(900px) rotateY(-16deg) rotateX(8deg);
  }

  .signal-card {
    width: 190px;
    padding: 12px;
    border-radius: 18px;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.card};
    box-shadow: ${({ theme }) => theme.shadow};
    animation: ${lift} 5.5s ease-in-out infinite;
    overflow: hidden;
  }

  .signal-card:nth-child(2) {
    width: 150px;
    margin-left: 54px;
    animation-delay: -2.5s;
  }

  .signal-card::before {
    content: '';
    display: block;
    height: 2px;
    margin: -4px -12px 10px;
    background: ${({ theme }) => theme.gradient};
    animation: ${scan} 2.8s linear infinite;
  }

  .card-line {
    display: block;
    height: 8px;
    margin-top: 9px;
    border-radius: 999px;
    background: ${({ theme }) => theme.gradientSoft};
  }

  .card-line.short {
    width: 58%;
  }

  .card-line.mid {
    width: 78%;
  }

  @media (max-width: 900px) {
    .terminal-stack {
      display: none;
    }

    .mesh-plane {
      right: -35%;
      bottom: -24%;
      width: 620px;
      height: 620px;
    }
  }
`;
