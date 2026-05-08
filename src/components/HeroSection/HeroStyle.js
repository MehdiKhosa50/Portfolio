import styled, { keyframes } from 'styled-components';

const haloSpin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const panelFloat = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(8deg) rotateY(-10deg);
  }

  50% {
    transform: translate3d(0, -14px, 0) rotateX(12deg) rotateY(-6deg);
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 22px 88px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 900px) {
    min-height: auto;
    padding: 52px 18px 64px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  z-index: 1;
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);
  align-items: center;
  gap: 52px;
  width: 100%;
  max-width: 1240px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 38px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  @media (max-width: 980px) {
    align-items: center;
    text-align: center;
  }
`;

export const Eyebrow = styled.div`
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 9px 13px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: 999px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card};
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  overflow-wrap: anywhere;

  span {
    width: 9px;
    height: 9px;
    border-radius: 3px;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 18px ${({ theme }) => theme.accent};
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 820px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 72px;
  line-height: 1.03;
  font-weight: 800;
  overflow-wrap: break-word;

  .name {
    display: inline;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1200px) {
    font-size: 58px;
  }

  @media (max-width: 720px) {
    font-size: 46px;
  }

  @media (max-width: 560px) {
    max-width: calc(100vw - 36px);
    font-size: 36px;
  }
`;

export const TextLoop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 34px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    font-size: 17px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.p`
  max-width: 680px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  line-height: 1.78;

  strong {
    color: ${({ theme }) => theme.text_primary};
  }

  @media (max-width: 560px) {
    max-width: calc(100vw - 36px);
    font-size: 16px;
  }
`;

export const ActionGroup = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    max-width: calc(100vw - 36px);
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 20px;
  color: ${({ theme }) => theme.bg};
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 18px 46px rgba(34, 211, 238, 0.2);
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 24px 58px rgba(34, 211, 238, 0.28);
  }

  @media (max-width: 980px) {
    flex: 1 1 150px;
  }

  @media (max-width: 520px) {
    flex-basis: 100%;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 20px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.gradientSoft};
  }

  @media (max-width: 980px) {
    flex: 1 1 150px;
  }

  @media (max-width: 520px) {
    flex-basis: 100%;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  max-width: 680px;
  margin-top: 4px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    max-width: calc(100vw - 36px);
  }
`;

export const StatCard = styled.div`
  padding: 16px;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 16px 48px ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(15,23,42,0.08)')};
  transform: perspective(800px) rotateX(0deg);
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: perspective(800px) rotateX(7deg) translateY(-4px);
    border-color: ${({ theme }) => theme.borderStrong};
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    font-size: 24px;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.text_muted};
    font-size: 13px;
    line-height: 1.45;
    font-weight: 700;
  }
`;

export const HeroRightContainer = styled.div`
  position: relative;
  min-width: 0;
  display: flex;
  justify-content: center;
  perspective: 1100px;
`;

export const ProfileStage = styled.div`
  position: relative;
  width: min(390px, 88vw);
  aspect-ratio: 0.86;
  transform-style: preserve-3d;
  animation: ${panelFloat} 7s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 24px;
    border-radius: 34px;
    background: ${({ theme }) => theme.gradient};
    filter: blur(26px);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.22 : 0.2)};
  }
`;

export const PortraitShell = styled.div`
  position: absolute;
  inset: 0;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: 34px;
  background:
    linear-gradient(${({ theme }) => theme.cardSolid}, ${({ theme }) => theme.cardSolid}) padding-box,
    ${({ theme }) => theme.gradient} border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transform: translateZ(40px);

  &::after {
    content: '';
    position: absolute;
    inset: -40%;
    background: conic-gradient(from 90deg, transparent, rgba(255,255,255,0.24), transparent 26%);
    animation: ${haloSpin} 8s linear infinite;
  }
`;

export const Img = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
  object-position: center top;
  filter: saturate(1.04) contrast(1.02);
`;

export const FloatingBadge = styled.div`
  position: absolute;
  z-index: 2;
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  top: ${({ $top }) => $top || 'auto'};
  max-width: 210px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.cardSolid};
  box-shadow: ${({ theme }) => theme.shadow};
  transform: translateZ(78px);

  strong {
    display: block;
    font-size: 13px;
  }

  span {
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.text_muted};
    font-size: 12px;
    line-height: 1.4;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;
