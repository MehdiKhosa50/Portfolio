import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 92px 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
`;

export const SectionTop = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: end;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 42px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  max-width: 720px;
  margin-top: 14px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.75;

  @media (max-width: 820px) {
    margin-inline: auto;
  }
`;

export const ProjectMetric = styled.div`
  min-width: 180px;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: right;

  strong {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    font-size: 34px;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 6px;
    color: ${({ theme }) => theme.text_muted};
    font-size: 13px;
    font-weight: 800;
  }

  @media (max-width: 820px) {
    text-align: center;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;

  @media (max-width: 820px) {
    justify-content: center;
  }
`;

export const ToggleButton = styled.button`
  min-height: 42px;
  padding: 0 14px;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.borderStrong : theme.border)};
  border-radius: 999px;
  color: ${({ $active, theme }) => ($active ? theme.bg : theme.text_secondary)};
  background: ${({ $active, theme }) => ($active ? theme.gradient : theme.card)};
  cursor: pointer;
  font-size: 13px;
  font-weight: 800;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ $active, theme }) => ($active ? theme.gradient : theme.gradientSoft)};
    color: ${({ $active, theme }) => ($active ? theme.bg : theme.text_primary)};
  }
`;

export const Divider = styled.div`
  display: none;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
