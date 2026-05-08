import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 28px 20px 38px;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(7, 10, 15, 0.72)' : 'rgba(248, 250, 252, 0.72)')};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const Logo = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 900;

  span {
    display: block;
    margin-top: 5px;
    color: ${({ theme }) => theme.text_muted};
    font-size: 12px;
    font-weight: 800;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 860px) {
    justify-self: center;
  }
`;

const SocialMediaIcon = styled.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          Muhammad Muntazir Mehdi
          <span>Full-stack | Blockchain | AI systems</span>
        </Logo>
        <Nav aria-label="Footer navigation">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegramPlane />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
