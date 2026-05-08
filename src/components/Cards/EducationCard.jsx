import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  width: 100%;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 16px 46px ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(15,23,42,0.08)')};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.borderStrong};
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 14px;
  align-items: center;
`;

const Image = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
  border-radius: 16px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
`;

const Body = styled.div`
  min-width: 0;
`;

const Name = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  line-height: 1.35;
  font-weight: 800;
`;

const Degree = styled.div`
  margin-top: 5px;
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

const EducationCard = ({ education }) => (
  <Card>
    <Top>
      <Image src={education.img} alt={education.school} loading="lazy" />
      <Body>
        <Name>{education.school}</Name>
        <Degree>{education.degree}</Degree>
        <Date>{education.date}</Date>
      </Body>
    </Top>
  </Card>
);

export default EducationCard;
