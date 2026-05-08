import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 84px 20px 42px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1040px;
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
  max-width: 700px;
  margin: 14px auto 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.75;
  text-align: center;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 34px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EducationItem = styled.div`
  position: relative;
  animation: sectionRise 420ms ease both;
  animation-delay: ${({ $index }) => `${$index * 80}ms`};
`;

const Badge = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto -18px;
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.bg};
  border-radius: 16px;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 18px 44px rgba(34, 211, 238, 0.2);
`;

const Education = () => (
  <Container id="education">
    <Wrapper>
      <Title>Education</Title>
      <Desc>
        Academic foundation in computer science and engineering, refined through hands-on product,
        contract, and platform work.
      </Desc>
      <EducationGrid>
        {education.map((item, index) => (
          <EducationItem key={item.id} $index={index}>
            <Badge>
              <FaGraduationCap />
            </Badge>
            <EducationCard education={item} />
          </EducationItem>
        ))}
      </EducationGrid>
    </Wrapper>
  </Container>
);

export default Education;
