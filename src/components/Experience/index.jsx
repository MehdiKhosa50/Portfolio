import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 64px 20px 92px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 42px;
  text-align: center;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  max-width: 760px;
  margin: 14px auto 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.75;
  text-align: center;
`;

const TimelineSection = styled.div`
  position: relative;
  display: grid;
  gap: 18px;
  margin-top: 36px;

  &::before {
    content: '';
    position: absolute;
    left: 28px;
    top: 16px;
    bottom: 16px;
    width: 2px;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.5;
  }

  @media (max-width: 720px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  animation: sectionRise 420ms ease both;
  animation-delay: ${({ $index }) => `${$index * 80}ms`};

  @media (max-width: 720px) {
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 12px;
  }
`;

const Dot = styled.div`
  position: relative;
  z-index: 1;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 18px 42px rgba(34, 211, 238, 0.22);

  @media (max-width: 720px) {
    width: 42px;
    height: 42px;
    border-radius: 14px;
  }
`;

const Experience = () => (
  <Container id="experience">
    <Wrapper>
      <Title>Experience</Title>
      <Desc>
        Professional engineering work across full-stack platforms, blockchain systems, audits,
        smart contracts, trading products, and automation-heavy delivery.
      </Desc>
      <TimelineSection>
        {experiences.map((experience, index) => (
          <TimelineItem key={experience.id} $index={index}>
            <Dot>
              <FaBriefcase />
            </Dot>
            <ExperienceCard experience={experience} />
          </TimelineItem>
        ))}
      </TimelineSection>
    </Wrapper>
  </Container>
);

export default Experience;
