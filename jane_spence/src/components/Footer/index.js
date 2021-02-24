import {React, useEffect} from 'react'
import {
    FooterContainer,
    FooterWrapper,
    Row1,
    Column1,
    Column2,
    Column3,
    SubFooterContainer,
    LeftText,
    RightText,
    Title,
    NavLink,
    NavLinkScroll
} from './FooterComponents'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <FooterContainer>
            <FooterWrapper>
                <Row1>
                    <Column1>
                        <Title data-aos='fade-down'>
                            PAGES
                        </Title>
                        <NavLinkScroll data-aos='fade-right' to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="location" smooth={true} spy={true} offset={-80}>Location</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="contact" smooth={true} spy={true} offset={-80}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-down'>
                            KEY WEBSITES
                        </Title>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 1</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 2</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 3</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 4</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 5</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-down'>
                            OTHER
                        </Title>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 6</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 7</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 8</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 9</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 10</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <SubFooterContainer>
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
            
                <RightText to="//linkedin.com/in/jack-beard/">
                    Created By JACK BEARD
                </RightText>
                
            </SubFooterContainer>
        </FooterContainer>
    )
}

export default Footer
