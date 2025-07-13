import _default from "../../themes/default";
import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px 40px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px 100px 16px;
  }
  @media (max-width: 640px) {
    padding: 40px 16px 80px 16px;
  }
  z-index: 1;
  min-height: 100vh;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;
  min-height: 80vh;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
    min-height: auto;
  }
  
  @media (max-width: 640px) {
    gap: 20px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 15px;
    gap: 15px;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    margin-bottom: 15px;
  }
`;

const rotateCoin = keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  50% {
    transform: perspective(1000px) rotateY(180deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 380px;
  border-radius: 50%;
  animation: ${rotateCoin} 2s linear;
  box-shadow: 0 20px 40px rgba(133, 76, 230, 0.3);
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 45px;
  font-family: "Serif";
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 36px;
  }
  
  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 8px;
  }

  .name {
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 45px;
    
    &:hover {
      cursor: pointer;
    }
    
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    
    @media (max-width: 960px) {
      text-align: center;
      font-size: 36px;
    }
    
    @media (max-width: 640px) {
      font-size: 28px;
    }
  }
`;

export const TextLoop = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 700;
  font-family: "Serif";
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 15px;
  
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    font-size: 28px;
  }
  
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 12px;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Span = styled.span`
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Serif";
  cursor: pointer;
  font-size: 37px;
  font-weight: 600;
  
  @media (max-width: 1200px) {
    font-size: 27px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 25px;
  }
  
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 30px;
  font-family: "Serif";
  color: ${({ theme }) => theme.text_primary + 95};
  max-width: 600px;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: fit-content;
  min-width: 200px;
  text-align: center;
  padding: 16px 24px;
  color: ${({ theme }) => theme.white};
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 0 10px 30px rgba(133, 76, 230, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(133, 76, 230, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 960px) {
    align-self: center;
    min-width: 180px;
    padding: 14px 20px;
    font-size: 16px;
    margin-top: 5px;
  }

  @media (max-width: 640px) {
    min-width: 160px;
    padding: 12px 18px;
    font-size: 15px;
    gap: 6px;
    margin-top: 5px;
  }
`;
