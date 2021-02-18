import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './navbarElements'


const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Jane Spence</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq">FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="location">Location</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            <NavBtn>
                <NavBtnLink to="enquire">Enquire Now</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

