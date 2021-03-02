import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: rgb(19,24,33);
    height: 490px;
    overflow: hidden;
`

export const FooterWrapper = styled.div`
    height: 450px;
    display: grid;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
`

export const Row1 = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
`

export const Column1 = styled.div`
    width: 30%;
    height: 400px;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) {
        margin-left: -40px;
    }

    @media screen and (max-width: 768px) {
        margin-left: -35px;
    }

    @media screen and (max-width: 414px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 411px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 360px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 320px) {
        margin-left: -15px;
    }
`

export const Column2 = styled.div`
    width: 30%;
    height: 400px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const Column3 = styled.div`
    width: 30%;
    height: 400px;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        padding-left: 60px;
        padding-right: 60px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        padding-left: 15px;
        padding-right: 15px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const PreFooterWrapper = styled.div`
    background: rgb(0,0,0, 0.1);
    height: 80px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 411px) {
        font-size: 1.05rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.92rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }
`

export const SubFooterContainer = styled.div`
    background: rgba(0,0,0,0.2);
    height: 40px;
    overflow: hidden;
    display: space-between;


`

export const Title = styled.h3`
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    margin-top: 25px;

    @media screen and (max-width: 1024px) {
        margin-top: 10px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 25px;
    }

    @media screen and (max-width: 540px) {
        font-size: 0.9rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.9rem;
        margin-top: 5px;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;

    }

    @media screen and (max-width: 280px) {
        font-size: 0.75rem;
        margin-top: 20px;
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 350;
    margin-top: 20px;
    display: grid;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }


    &:hover {
        color: pink;
    }
`

export const NavLink = styled(LinkRouter)`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 350;
    margin-top: 20px;
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 0.75rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }

    

    &:hover {
        color: pink;
    }
`

export const TextContainer = styled.div`
    display: space-between;
    align-items: center;
    height: 40px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;

`

export const LeftText = styled.span`
    color: white;
    font-weight: 350;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding-right: 20px;
    float: left;

    
`

export const RightText = styled(LinkRouter)`
    color: white;
    font-size: 1rem;
    font-weight: 350;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    padding-left: 20px;
    float: right;

    &:hover {
        color: pink;
    }

`