import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Document = styled.img`
  width: 100%;
  max-height: 210px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 180ms ease, opacity 180ms ease;

  &:hover {
    opacity: 0.86;
    transform: scale(1.01);
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  line-height: 1.7;
`;

const Card = styled.article`
  position: relative;
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 18px 52px ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0,0,0,0.24)' : 'rgba(15,23,42,0.08)')};
  overflow: hidden;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.cardSolid};
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  align-items: center;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
`;

const Body = styled.div`
  min-width: 0;
`;

const Role = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  line-height: 1.25;
  font-weight: 800;
`;

const Company = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 800;
`;

const Date = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.text_muted};
  font-size: 13px;
  font-weight: 700;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const Skill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 5px 9px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.gradientSoft};
  font-size: 12px;
  font-weight: 800;
`;

const DocLink = styled.a`
  display: grid;
  gap: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`;

const ExperienceCard = ({ experience }) => (
  <Card>
    <Top>
      <Image src={experience.img} alt={experience.company} loading="lazy" />
      <Body>
        <Role>{experience.role}</Role>
        <Company>{experience.company}</Company>
        <Date>{experience.date}</Date>
      </Body>
    </Top>
    <Description>{experience.desc}</Description>
    {experience.skills && (
      <Skills>
        {experience.skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </Skills>
    )}
    {experience.doc && (
      <DocLink href={experience.doc} target="_blank" rel="noreferrer">
        <span>
          View certificate
          <FaExternalLinkAlt />
        </span>
        <Document src={experience.doc} alt={`${experience.company} certificate`} loading="lazy" />
      </DocLink>
    )}
  </Card>
);

export default ExperienceCard;
