import React from 'react';
import styled from 'styled-components';
import { FaCodeBranch, FaCube } from 'react-icons/fa';
import { skills } from '../../data/constants';

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 86px 20px 42px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 42px;
  text-align: center;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  max-width: 720px;
  margin: 14px auto 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.75;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 34px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.article`
  position: relative;
  min-height: 260px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  background:
    linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.cardSolid}) padding-box,
    ${({ theme }) => theme.gradient} border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transform-style: preserve-3d;
  animation: sectionRise 440ms ease both;
  animation-delay: ${({ $index }) => `${$index * 70}ms`};
  transition: transform 180ms ease, border-color 180ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%);
    transform: translateX(-120%);
    transition: transform 600ms ease;
  }

  &:hover {
    transform: perspective(900px) rotateX(4deg) rotateY(-3deg) translateY(-6px);
    border-color: ${({ theme }) => theme.borderStrong};
  }

  &:hover::before {
    transform: translateX(120%);
  }
`;

const SkillHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 800;
`;

const SkillCount = styled.span`
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.gradient};
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 900;
`;

const SkillList = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 42px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255,255,255,0.045)' : 'rgba(15,23,42,0.035)')};
  font-size: 14px;
  font-weight: 700;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.gradientSoft};
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Skills = () => (
  <Container id="skills">
    <Wrapper>
      <Title>Skills</Title>
      <Desc>
        A practical stack for shipping fast product surfaces, secure contracts, scalable backends,
        wallet experiences, bots, and automation workflows.
      </Desc>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={skill.title} $index={index}>
            <SkillHeader>
              <SkillTitle>
                {index % 2 === 0 ? <FaCube /> : <FaCodeBranch />}
                {skill.title}
              </SkillTitle>
              <SkillCount>{skill.skills.length}</SkillCount>
            </SkillHeader>
            <SkillList>
              {skill.skills.map((item) => (
                <SkillItem key={item.name}>
                  <SkillImage src={item.image} alt="" loading="lazy" />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </SkillsContainer>
    </Wrapper>
  </Container>
);

export default Skills;
