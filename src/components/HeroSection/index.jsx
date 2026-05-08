import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import HeroBgAnimation from '../HeroBgAnimation';
import HeroImg from '../../images/HeroImage.jpeg';
import { Bio, experiences, projects, skills } from '../../data/constants';
import {
  ActionGroup,
  Eyebrow,
  FloatingBadge,
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  PortraitShell,
  ProfileStage,
  ResumeButton,
  SecondaryButton,
  Span,
  StatCard,
  StatsGrid,
  SubTitle,
  TextLoop,
  Title,
} from './HeroStyle';

const HeroSection = () => {
  const skillCount = skills.reduce((total, group) => total + group.skills.length, 0);

  return (
    <HeroContainer id="about">
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer>
          <Eyebrow>
            <span />
            Software Engineer | Blockchain & AI Systems
          </Eyebrow>
          <Title>
            Building fast Web3 and AI products as <span className="name">{Bio.name}</span>.
          </Title>
          <TextLoop>
            Focused on
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 28,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>
            <strong>Full-stack engineer for blockchain, trading, automation, and AI-assisted systems.</strong>{' '}
            {Bio.description}
          </SubTitle>
          <ActionGroup>
            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
              <IoMdDownload />
              Resume
            </ResumeButton>
            <SecondaryButton href="#projects">
              View Work
              <FaArrowRight />
            </SecondaryButton>
            <SecondaryButton href={Bio.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
              LinkedIn
            </SecondaryButton>
            <SecondaryButton href={Bio.github} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </SecondaryButton>
          </ActionGroup>
          <StatsGrid>
            <StatCard>
              <strong>{projects.length}+</strong>
              <span>Projects across Web3, trading platforms, bots, and product systems</span>
            </StatCard>
            <StatCard>
              <strong>{skillCount}+</strong>
              <span>Core technologies across frontend, backend, blockchain, and delivery</span>
            </StatCard>
            <StatCard>
              <strong>{experiences.length}</strong>
              <span>Engineering roles spanning full-stack and blockchain delivery</span>
            </StatCard>
          </StatsGrid>
        </HeroLeftContainer>

        <HeroRightContainer>
          <ProfileStage>
            <PortraitShell>
              <Img src={HeroImg} alt={Bio.name} />
            </PortraitShell>
            <FloatingBadge $left="-28px" $top="38px">
              <strong>Blockchain engineering</strong>
              <span>Smart contracts, dApps, marketplaces, DeFi, TON, SUI, Solana</span>
            </FloatingBadge>
            <FloatingBadge $right="-30px" $bottom="48px">
              <strong>AI + automation</strong>
              <span>Trading alerts, Telegram bots, data workflows, product backends</span>
            </FloatingBadge>
          </ProfileStage>
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
