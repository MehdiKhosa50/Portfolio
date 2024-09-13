import React, { useState } from 'react';
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import { IoMdDownload } from "react-icons/io";
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';


const HeroSection = () => {

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, It's <br /> <span className='name'>{Bio.name}</span></Title>
                        <TextLoop>
                            I'm a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume}  target='display'><IoMdDownload style={{margin :"0 0px -6px", fontSize: "25px"}}/> Resume</ResumeButton>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                    <Img src={HeroImg} alt="hero-image"/>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection