import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const Card = styled.article`
  position: relative;
  min-height: 520px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 26px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 20px 58px ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0,0,0,0.24)' : 'rgba(15,23,42,0.08)')};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  animation: sectionRise 420ms ease both;
  animation-delay: ${({ $index }) => `${($index % 6) * 55}ms`};
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: perspective(1000px) rotateX(4deg) rotateY(-4deg) translateY(-7px);
    border-color: ${({ theme }) => theme.borderStrong};
    background: ${({ theme }) => theme.cardSolid};
  }
`;

const MediaWrap = styled.div`
  position: relative;
  height: 210px;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 44%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.54), transparent);
    pointer-events: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 360ms ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Category = styled.span`
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 1;
  max-width: calc(100% - 28px);
  padding: 7px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.gradient};
  font-size: 12px;
  font-weight: 900;
  text-transform: capitalize;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  padding: 18px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255,255,255,0.045)' : 'rgba(15,23,42,0.035)')};
  font-size: 11px;
  font-weight: 800;
`;

const Details = styled.div`
  display: grid;
  gap: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  line-height: 1.3;
  font-weight: 800;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.65;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: -10px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.cardSolid};
  background: ${({ theme }) => theme.surface};
`;

const OpenCue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
  font-weight: 900;
`;

const getCategoryLabel = (category) => {
  if (Array.isArray(category)) return category[0];
  return category || 'project';
};

const ProjectCards = ({ project, setOpenModal, index = 0 }) => (
  <Card
    $index={index}
    onClick={() => setOpenModal({ state: true, project })}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpenModal({ state: true, project });
      }
    }}
  >
    <MediaWrap>
      {project.video ? (
        <Video
          src={project.video}
          poster={project.thumbnail}
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image src={project.image} alt={project.title} loading="lazy" />
      )}
      <Category>{getCategoryLabel(project.category)}</Category>
    </MediaWrap>

    <Content>
      <Tags>
        {project.tags?.slice(0, 6).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Details>

      <Footer>
        <Members>
          {project.member?.map((member) => (
            <Avatar key={member.name} src={member.img} alt={member.name} loading="lazy" />
          ))}
        </Members>
        <OpenCue>
          Case
          <FaArrowRight />
        </OpenCue>
      </Footer>
    </Content>
  </Card>
);

export default ProjectCards;
