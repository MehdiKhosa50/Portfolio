import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px 0;
  padding: 40px 32px;
  border-radius: 24px;
  background: rgba(20, 20, 30, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    padding: 24px 8px;
    border-radius: 16px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
