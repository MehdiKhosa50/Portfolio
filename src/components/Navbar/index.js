import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { FaHome } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";
import { PiGraduationCapBold } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  // Fast page flip transition
  const navigateToSection = (sectionId) => {
    if (isTransitioning || activeSection === sectionId) return;
    
    setIsTransitioning(true);
    setActiveSection(sectionId);
    
    // Create page flip effect
    createPageFlipEffect();
    
    // Quick scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      // Instant scroll with smooth easing
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Create page flip visual effect
  const createPageFlipEffect = () => {
    // Create flip overlay
    const flipOverlay = document.createElement('div');
    flipOverlay.className = 'page-flip-overlay';
    document.body.appendChild(flipOverlay);
    
    // Create flip card effect
    const flipCard = document.createElement('div');
    flipCard.className = 'page-flip-card';
    flipOverlay.appendChild(flipCard);
    
    // Animate the flip
    setTimeout(() => {
      flipCard.classList.add('flipping');
    }, 50);
    
    // Remove after animation
    setTimeout(() => {
      if (flipOverlay.parentNode) {
        flipOverlay.parentNode.removeChild(flipOverlay);
      }
    }, 800);
  };

  return (
    <Nav>
      <NavbarContainer> 
        <NavLogo to='/' onClick={() => window.scrollTo(0, 0)}>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
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
              navigateToSection('about');
            }}
            className={activeSection === 'about' ? 'active' : ''}
          >
            <FaHome/> About
          </NavLink>
          <NavLink 
            href="#skills" 
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('skills');
            }}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            <HiLightBulb/> Skills
          </NavLink>
          <NavLink 
            href="#experience" 
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('experience');
            }}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            <IoPeople/> Experience
          </NavLink>
          <NavLink 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('projects');
            }}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            <HiOutlineDesktopComputer/> Projects
          </NavLink>
          <NavLink 
            href="#education" 
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('education');
            }}
            className={activeSection === 'education' ? 'active' : ''}
          >
            <PiGraduationCapBold/> Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              navigateToSection('about');
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              navigateToSection('skills');
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              navigateToSection('experience');
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              navigateToSection('projects');
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              navigateToSection('education');
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px', width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
