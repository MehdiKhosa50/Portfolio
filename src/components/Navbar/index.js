import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FaHome } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";
import { PiGraduationCapBold } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const theme = useTheme();

  // Advanced scroll function with particle effects
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);

    // Create particle trail effect
    createParticleTrail();

    // Create scanning line effect
    createScanningLine();

    // Create matrix rain effect
    createMatrixRain();

    // Create holographic cursor effect
    createHolographicCursor();

    // Create audio wave effect
    createAudioWave();

    // Add glitch effect to body
    document.body.classList.add('scroll-glitch');

    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 80; // Account for navbar height

      // Smooth scroll with custom easing
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 1500; // 1.5 seconds
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // Animation complete
          setTimeout(() => {
            setIsScrolling(false);
            document.body.classList.remove('scroll-glitch');
            removeMatrixRain();
          }, 300);
        }
      };

      requestAnimationFrame(animation);
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Custom easing function for smooth animation
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  // Create scanning line effect
  const createScanningLine = () => {
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);

    setTimeout(() => {
      if (scanLine.parentNode) {
        scanLine.parentNode.removeChild(scanLine);
      }
    }, 1500);
  };

  // Create matrix rain effect
  const createMatrixRain = () => {
    const matrixRain = document.createElement('div');
    matrixRain.className = 'matrix-rain';

    // Create multiple matrix columns
    for (let i = 0; i < 5; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.textContent = '01'.repeat(20);
      matrixRain.appendChild(column);
    }

    document.body.appendChild(matrixRain);

    setTimeout(() => {
      matrixRain.classList.add('active');
    }, 100);
  };

  // Remove matrix rain effect
  const removeMatrixRain = () => {
    const matrixRain = document.querySelector('.matrix-rain');
    if (matrixRain) {
      matrixRain.classList.remove('active');
      setTimeout(() => {
        if (matrixRain.parentNode) {
          matrixRain.parentNode.removeChild(matrixRain);
        }
      }, 300);
    }
  };

  // Create holographic cursor effect
  const createHolographicCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'holographic-cursor';
    document.body.appendChild(cursor);

    // Show cursor
    setTimeout(() => {
      cursor.style.opacity = '1';
    }, 100);

    // Follow mouse movement
    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Remove cursor after animation
    setTimeout(() => {
      cursor.style.opacity = '0';
      document.removeEventListener('mousemove', handleMouseMove);
      setTimeout(() => {
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      }, 300);
    }, 1500);
  };

  // Create audio wave effect
  const createAudioWave = () => {
    const audioWave = document.createElement('div');
    audioWave.className = 'audio-wave';
    document.body.appendChild(audioWave);

    setTimeout(() => {
      if (audioWave.parentNode) {
        audioWave.parentNode.removeChild(audioWave);
      }
    }, 1500);
  };

  // Create particle trail effect
  const createParticleTrail = () => {
    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'scroll-particle';
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #854CE6, #13ADC7, #945DD6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        opacity: 0;
        transform: scale(0);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      `;

      document.body.appendChild(particle);
      particles.push(particle);

      // Animate particle
      setTimeout(() => {
        particle.style.opacity = '1';
        particle.style.transform = 'scale(1)';

        setTimeout(() => {
          particle.style.opacity = '0';
          particle.style.transform = 'scale(0) translateY(-100px)';

          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }, 800);
        }, 400);
      }, i * 50);
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={() => window.scrollTo(0, 0)}>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className={isScrolling ? 'scrolling' : ''}
          >
            <FaHome /> About
          </NavLink>
          <NavLink
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
            className={isScrolling ? 'scrolling' : ''}
          >
            <HiLightBulb /> Skills
          </NavLink>
          <NavLink
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            className={isScrolling ? 'scrolling' : ''}
          >
            <IoPeople /> Experience
          </NavLink>
          <NavLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className={isScrolling ? 'scrolling' : ''}
          >
            <HiOutlineDesktopComputer /> Projects
          </NavLink>
          <NavLink
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}
            className={isScrolling ? 'scrolling' : ''}
          >
            <PiGraduationCapBold /> Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              scrollToSection('about');
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              scrollToSection('skills');
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              scrollToSection('experience');
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              scrollToSection('projects');
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              scrollToSection('education');
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar