import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 14px 20px;
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(7, 10, 15, 0.72)' : 'rgba(248, 250, 252, 0.74)')};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(22px);
`;

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 0.8fr) auto minmax(210px, 0.8fr);
  align-items: center;
  width: 100%;
  max-width: 1240px;
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr auto;
  }
`;

export const NavLogo = styled(LinkR)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  min-width: 0;
`;

export const LogoMark = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.gradient};
  box-shadow: ${({ theme }) => theme.shadow};
  transform: rotateX(12deg) rotateY(-16deg);
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-weight: 800;
  line-height: 1;

  small {
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_muted};
    text-transform: uppercase;
  }
`;

export const NavItems = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 16px 44px ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.22)' : 'rgba(15, 23, 42, 0.08)')};

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  color: ${({ $active, theme }) => ($active ? theme.bg : theme.text_secondary)};
  background: ${({ $active, theme }) => ($active ? theme.gradient : 'transparent')};
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 180ms ease, color 180ms ease, background 180ms ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    color: ${({ $active, theme }) => ($active ? theme.bg : theme.text_primary)};
    background: ${({ $active, theme }) => ($active ? theme.gradient : theme.gradientSoft)};
    transform: translateY(-2px);
  }
`;

export const ActionRow = styled.div`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    grid-column: 2;
  }
`;

export const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  font-weight: 800;
  text-decoration: none;
  font-size: 13px;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.gradientSoft};
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const IconButton = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  display: inline-grid;
  place-items: center;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  font-size: 18px;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-2px) rotateX(12deg);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.gradientSoft};
  }
`;

export const MobileIcon = styled(IconButton)`
  display: none;

  @media (max-width: 900px) {
    display: inline-grid;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    position: absolute;
    top: 76px;
    left: 20px;
    right: 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 22px;
    background: ${({ theme }) => theme.cardSolid};
    box-shadow: ${({ theme }) => theme.shadow};
    transform-origin: top right;
    animation: sectionRise 180ms ease both;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MobileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 14px;
  border-radius: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ $active, theme }) => ($active ? theme.gradientSoft : 'transparent')};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.borderStrong : theme.border)};
  font-weight: 700;
  text-decoration: none;
`;
