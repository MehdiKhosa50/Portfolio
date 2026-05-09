import React, { useEffect, useMemo, useState } from 'react';
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaGithub,
  FaGraduationCap,
  FaLayerGroup,
  FaMoon,
  FaPaperPlane,
  FaRocket,
  FaSun,
  FaTimes,
} from 'react-icons/fa';
import { Bio } from '../../data/constants';
import {
  ActionRow,
  GitHubButton,
  IconButton,
  LogoMark,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavbarContainer,
  NavLogo,
  Span,
} from './NavbarStyledComponent';

const navItems = [
  { id: 'about', label: 'About', icon: FaRocket },
  { id: 'skills', label: 'Skills', icon: FaLayerGroup },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'projects', label: 'Projects', icon: FaCode },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'contact', label: 'Contact', icon: FaPaperPlane },
];

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    let ticking = false;

    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    const updateActiveSection = () => {
      const sections = getSections();
      const activationLine = Math.min(window.innerHeight * 0.34, 280);
      let currentSection = sections[0]?.id || 'about';
      let nearestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom > activationLine) {
          currentSection = section.id;
          nearestDistance = 0;
          return;
        }

        if (nearestDistance !== 0) {
          const distance = Math.abs(rect.top - activationLine);

          if (distance < nearestDistance) {
            nearestDistance = distance;
            currentSection = section.id;
          }
        }
      });

      setActiveSection((current) => (current === currentSection ? current : currentSection));
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [sectionIds]);

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LogoMark>
            <FaCode />
          </LogoMark>
          <Span>
            Mehdi Khosa
            <small>Full Stack Blockchain Engineer</small>
          </Span>
        </NavLogo>

        <NavItems aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                $active={isActive}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(item.id);
                }}
              >
                <Icon />
                {item.label}
              </NavLink>
            );
          })}
        </NavItems>

        <ActionRow>
          <IconButton
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </GitHubButton>
          <MobileIcon
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </ActionRow>

        {isOpen && (
          <MobileMenu>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <MobileLink
                  key={item.id}
                  href={`#${item.id}`}
                  $active={activeSection === item.id}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection(item.id);
                  }}
                >
                  <Icon />
                  {item.label}
                </MobileLink>
              );
            })}
            <MobileLink href={Bio.github} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub Profile
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
