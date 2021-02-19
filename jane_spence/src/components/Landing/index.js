import React from 'react'
import {
    LandingContainer,
    LandingBackground,
    VideoLoop,
    LandingText,
    LandingTitle,
    LandingSubText,
    LearnMoreBtnWrapper,
    LearnMoreBtn
} from './LandingComponents'
import Video from '../../videos/landingVideo.mp4'

const Landing = () => {
    return (
        <LandingContainer>
            <LandingBackground>
                <VideoLoop autoPlay loop muted src={Video} type='video/mp4'></VideoLoop>
            </LandingBackground>
            <LandingText>
                <LandingTitle>
                Jane Spence Diabetes Education
                </LandingTitle>
                <LandingSubText>
                Seek professional advice from a Certified Pharmacist and Diabetes Educator
                </LandingSubText>
                <LearnMoreBtnWrapper>
                    <LearnMoreBtn to="about" smooth={true} spy={true} offset={-80}>
                    Learn More
                    </LearnMoreBtn>
                </LearnMoreBtnWrapper>
            </LandingText>
            
            
        </LandingContainer>
        
    )
}

export default Landing
