import _default from "../../themes/default";
import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
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

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
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
   &:hover{
   cursor:pointer;
   }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 45px;
  font-family:"Serif";
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 1200px) {
    font-size:40px;
  }
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  .name{
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 45px;
  &:hover{
  cursor: pointer;
  }
  @media (max-width: 1200px) {
    font-size:40px
     line-height: 40px;
  }
    @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 8px;
  }
}
  
  
  `;

export const TextLoop = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 700;
  font-family:"Serif";
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 1200px) {
    font-size:30px
  }
    @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
   background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Serif";
  cursor: pointer;
  font-size:37px;
  font-weight: 600;
   @media (max-width: 1200px) {
    font-size: 27px;
  }
    @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 42px;
  font-family: "Serif";
  color: ${({ theme }) => theme.text_primary + 95};

 @media (max-width: 1200px) {
    font-family: "Serif";
    font-size:16px;
  }
@media (max-width: 960px) {
    text-align: center;
    font-family: "Serif";
  }
  @media (max-width: 640px) {
    font-size: 16px;
    font-family: "Serif";
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 14px 13px;
  color: ${({ theme }) => theme.white};
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, filter 0.5s ease-in-out;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }

    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
