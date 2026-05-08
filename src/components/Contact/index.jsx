import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Bio } from '../../data/constants';

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 48px 20px 92px;
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
  max-width: 720px;
  margin: 14px auto 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.75;
  text-align: center;
`;

const ContactPanel = styled.div`
  position: relative;
  margin-top: 34px;
  padding: 34px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 28px;
  background:
    ${({ theme }) => theme.gradientSoft},
    ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(${({ theme }) => theme.border} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.border} 1px, transparent 1px);
    background-size: 42px 42px;
    opacity: 0.16;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 22px;
  }
`;

const ContactHeadline = styled.h3`
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 auto;
  max-width: 790px;
  font-size: 32px;
  line-height: 1.22;
  text-align: center;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ContactText = styled.p`
  position: relative;
  max-width: 720px;
  margin: 14px auto 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
`;

const DockShell = styled.div`
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.cardSolid};
  overflow-x: auto;
`;

const DockRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  min-width: max-content;
`;

const DockItem = styled.a`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  color: #fff;
  text-decoration: none;
  background: ${({ $accent }) => $accent};
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24);
  transform: ${({ $scale }) => `translateY(${(1 - $scale) * 16}px) scale(${$scale})`};
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.34);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  min-width: 152px;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.cardSolid};
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(-50%) ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(6px)')};
  transition: opacity 180ms ease, transform 180ms ease;
`;

const TooltipTitle = styled.div`
  font-size: 13px;
  font-weight: 800;
`;

const TooltipValue = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.text_muted};
  font-size: 12px;
`;

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  font-size: 28px;
`;

const QuickGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 26px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

const QuickCard = styled.a`
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.cardSolid};
  }
`;

const QuickLabel = styled.div`
  color: ${({ theme }) => theme.text_muted};
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
`;

const QuickValue = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 800;
  word-break: break-word;
`;

const contactItems = [
  {
    name: 'GitHub',
    value: 'MehdiKhosa50',
    href: Bio.github,
    accent: 'linear-gradient(180deg, #334155, #020617)',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    value: 'mehdikhosa',
    href: Bio.linkedin,
    accent: 'linear-gradient(180deg, #0ea5e9, #075985)',
    icon: FaLinkedinIn,
  },
  {
    name: 'X',
    value: '@MehdiKhosa50',
    href: Bio.twitter,
    accent: 'linear-gradient(180deg, #1f2937, #020617)',
    icon: FaXTwitter,
  },
  {
    name: 'Email',
    value: Bio.email,
    href: Bio.emailLink,
    accent: 'linear-gradient(180deg, #22d3ee, #0f766e)',
    icon: FaEnvelope,
  },
  {
    name: 'WhatsApp',
    value: '+92 3176202271',
    href: Bio.whatsapp,
    accent: 'linear-gradient(180deg, #22c55e, #15803d)',
    icon: FaWhatsapp,
  },
  {
    name: 'Telegram',
    value: 'dappengineer50',
    href: Bio.telegram,
    accent: 'linear-gradient(180deg, #38bdf8, #0284c7)',
    icon: FaTelegramPlane,
  },
];

const getScale = (hoveredIndex, index) => {
  if (hoveredIndex === null) return 1;
  const distance = Math.abs(hoveredIndex - index);
  if (distance === 0) return 1.2;
  if (distance === 1) return 1.1;
  if (distance === 2) return 1.04;
  return 1;
};

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Reach out for full-stack, blockchain, trading, AI automation, or Web3 product work.</Desc>
        <ContactPanel>
          <ContactHeadline>Available for serious product teams and high-impact engineering work.</ContactHeadline>
          <ContactText>
            The fastest route is email or LinkedIn. WhatsApp and Telegram are available for direct project discussions.
          </ContactText>

          <DockShell>
            <DockRow>
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <DockItem
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    $accent={item.accent}
                    $scale={getScale(hoveredIndex, index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={item.name}
                  >
                    <Tooltip $visible={hoveredIndex === index}>
                      <TooltipTitle>{item.name}</TooltipTitle>
                      <TooltipValue>{item.value}</TooltipValue>
                    </Tooltip>
                    <IconWrap>
                      <Icon />
                    </IconWrap>
                  </DockItem>
                );
              })}
            </DockRow>
          </DockShell>

          <QuickGrid>
            <QuickCard href={Bio.emailLink} target="_blank" rel="noreferrer">
              <QuickLabel>Email</QuickLabel>
              <QuickValue>{Bio.email}</QuickValue>
            </QuickCard>
            <QuickCard href={Bio.whatsapp} target="_blank" rel="noreferrer">
              <QuickLabel>WhatsApp</QuickLabel>
              <QuickValue>+92 3176202271</QuickValue>
            </QuickCard>
            <QuickCard href={Bio.telegram} target="_blank" rel="noreferrer">
              <QuickLabel>Telegram</QuickLabel>
              <QuickValue>@dappengineer50</QuickValue>
            </QuickCard>
          </QuickGrid>
        </ContactPanel>
      </Wrapper>
    </Container>
  );
};

export default Contact;
