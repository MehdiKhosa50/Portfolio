import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 0 80px;
  gap: 14px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 720px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactPanel = styled.div`
  width: 100%;
  max-width: 980px;
  margin-top: 24px;
  padding: 28px 24px 36px;
  border-radius: 28px;
  background:
    radial-gradient(circle at top, rgba(133, 76, 230, 0.22), transparent 42%),
    linear-gradient(145deg, rgba(18, 18, 30, 0.92), rgba(9, 9, 17, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
`;

const ContactEyebrow = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 12px;
  color: #9f7aea;
  text-align: center;
  margin-bottom: 10px;
`;

const ContactHeadline = styled.h3`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const ContactText = styled.p`
  margin: 14px auto 0;
  max-width: 680px;
  text-align: center;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
`;

const DockShell = styled.div`
  width: fit-content;
  max-width: 100%;
  margin: 28px auto 0;
  padding: 16px 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  overflow-x: auto;
`;

const DockRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 14px;
  min-width: max-content;
`;

const DockItem = styled.a`
  position: relative;
  width: 74px;
  height: 74px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  background: ${({ accent }) => accent};
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.26);
  transform: ${({ scale }) => `translateY(${(1 - scale) * 18}px) scale(${scale})`};
  transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
  filter: saturate(${({ scale }) => (scale > 1 ? 1.1 : 1)});

  &:hover {
    box-shadow: 0 22px 40px rgba(0, 0, 0, 0.34);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  transform: translateX(-50%)
    ${({ visible }) => (visible ? ' translateY(0)' : ' translateY(6px)')};
  padding: 10px 12px;
  min-width: 156px;
  border-radius: 14px;
  background: rgba(8, 11, 20, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  text-align: center;
  pointer-events: none;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 180ms ease, transform 180ms ease;
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    width: 10px;
    height: 10px;
    background: rgba(8, 11, 20, 0.96);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const TooltipTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #f8fafc;
`;

const TooltipValue = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.68);
`;

const IconWrap = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 26px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const QuickCard = styled.a`
  text-decoration: none;
  padding: 16px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(159, 122, 234, 0.65);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const QuickLabel = styled.div`
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
`;

const QuickValue = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  word-break: break-word;
`;

const contactItems = [
  {
    name: 'GitHub',
    value: 'MehdiKhosa50',
    href: Bio.github,
    accent: 'linear-gradient(180deg, #2b3137, #111827)',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    value: 'mehdikhosa',
    href: Bio.linkedin,
    accent: 'linear-gradient(180deg, #0a66c2, #08488f)',
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
    href: `mailto:${Bio.email}`,
    accent: 'linear-gradient(180deg, #7c3aed, #4c1d95)',
    icon: FaEnvelope,
  },
  {
    name: 'WhatsApp',
    value: '+92 3176202271',
    href: Bio.whatsapp,
    accent: 'linear-gradient(180deg, #25d366, #128c7e)',
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
  if (distance === 0) return 1.22;
  if (distance === 1) return 1.12;
  if (distance === 2) return 1.05;
  return 1;
};

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Reach out for full-stack, blockchain, trading, or Web3 product work.</Desc>
        <ContactPanel>
          <ContactEyebrow>Direct Reach</ContactEyebrow>
          <ContactHeadline>Open to strong product teams, Web3 builds, and serious freelance work.</ContactHeadline>
          <ContactText>
            This section replaces the old contact form with fast direct channels recruiters and technical teams actually use.
            Hover the icons to preview each contact method, then click to open it.
          </ContactText>

          {/* Previous Email Me form intentionally commented out per request.
          <ContactForm ref={form} onSubmit={handleSubmit} onChange={checkFormValidity}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" type="email" required />
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Message" rows="4" name="message" required />
            <ContactButton type="submit" value="Send" disabled={!isFormValid} />
          </ContactForm>
          */}

          <DockShell>
            <DockRow>
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <DockItem
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    accent={item.accent}
                    scale={getScale(hoveredIndex, index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={item.name}
                  >
                    <Tooltip visible={hoveredIndex === index}>
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
            <QuickCard href={`mailto:${Bio.email}`}>
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
