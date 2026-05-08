import { CloseRounded, GitHub, LinkedIn, OpenInNewRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 16px;
  background: rgba(3, 7, 18, 0.76);
  overflow-y: auto;
  backdrop-filter: blur(10px);
`;

const Wrapper = styled.article`
  position: relative;
  width: min(900px, 100%);
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: 28px;
  background: ${({ theme }) => theme.cardSolid};
  color: ${({ theme }) => theme.text_primary};
  box-shadow: ${({ theme }) => theme.shadow};
  animation: sectionRise 220ms ease both;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Title = styled.h2`
  margin-top: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 30px;
  line-height: 1.2;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Media = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.surface};
`;

const Image = styled.img`
  width: 100%;
  max-height: 460px;
  object-fit: cover;
`;

const Video = styled.video`
  width: 100%;
  max-height: 520px;
  object-fit: cover;
`;

const Desc = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.75;
`;

const Label = styled.h3`
  margin-top: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 17px;
  font-weight: 900;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

const Tag = styled.span`
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.gradientSoft};
  font-size: 12px;
  font-weight: 800;
`;

const Members = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 12px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
`;

const MemberImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  background: ${({ theme }) => theme.surface};
`;

const MemberName = styled.div`
  flex: 1;
  min-width: 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  font-weight: 800;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  display: inline-grid;
  place-items: center;
  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
`;

const Button = styled.a`
  flex: 1 1 190px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid ${({ $dull, theme }) => ($dull ? theme.border : theme.borderStrong)};
  color: ${({ $dull, theme }) => ($dull ? theme.text_primary : theme.bg)};
  background: ${({ $dull, theme }) => ($dull ? theme.card : theme.gradient)};
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: 900;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) return null;

  const closeModal = () => setOpenModal({ state: false, project: null });

  return (
    <Modal open onClose={closeModal}>
      <Container>
        <Wrapper>
          <CloseButton type="button" aria-label="Close project details" onClick={closeModal}>
            <CloseRounded />
          </CloseButton>

          <Media>
            {project.video ? (
              <Video src={project.video} controls autoPlay muted poster={project.thumbnail} />
            ) : (
              <Image src={project.image} alt={project.title} />
            )}
          </Media>

          <Title>{project.title}</Title>
          <Tags>
            {project.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project.description}</Desc>

          {project.member && (
            <>
              <Label>Contributor</Label>
              <Members>
                {project.member.map((member) => (
                  <Member key={member.name}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    <IconLink href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} GitHub`}>
                      <GitHub />
                    </IconLink>
                    <IconLink href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
                      <LinkedIn />
                    </IconLink>
                  </Member>
                ))}
              </Members>
            </>
          )}

          <ButtonGroup>
            {project.github && (
              <Button $dull href={project.github} target="_blank" rel="noreferrer">
                <GitHub />
                View Code
              </Button>
            )}
            {project.webapp && (
              <Button href={project.webapp} target="_blank" rel="noreferrer">
                <OpenInNewRounded />
                View Live App
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
