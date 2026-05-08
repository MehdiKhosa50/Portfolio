import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import { darkTheme, lightTheme } from './utils/Themes.js';

const Body = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.text_primary};
  background:
    linear-gradient(120deg, ${({ theme }) => theme.bg} 0%, ${({ theme }) => theme.bgLight} 58%, ${({ theme }) => theme.bg} 100%);
  width: 100%;
  overflow-x: hidden;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image:
      linear-gradient(${({ theme }) => theme.border} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.border} 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 72%);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.18 : 0.3)};
    animation: gridDrift 28s linear infinite;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.gradientSoft};
  width: 100%;
  border-block: 1px solid ${({ theme }) => theme.border};
`;

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = window.localStorage.getItem('portfolio-theme');
    if (savedPreference) return savedPreference === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((mode) => !mode)} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
