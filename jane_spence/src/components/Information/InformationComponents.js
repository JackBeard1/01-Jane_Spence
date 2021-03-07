import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'white')};
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: max(90vh, 400px);
    display: flex;
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: max(80vh, 300px);
    width: 100%;
    overflow-x: hidden;

    @media screen and (max-width: 767px) {
        height: max(100vh, 400px);
        margin-top: min(-40px, -10vmin);
    }
`

export const Column1 = styled.div`
    grid-area: col1;
    display: flex;
    overflow: hidden;
    height: max(80vh, 300px);
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-left: 3vmin;
    margin-right:  2vmin;

    @media screen and (max-width: 1024px) {
        margin-left: 15px;
        margin-right: 15px;
    }

    @media screen and (max-width: 767px) {
        height: max(100vh, 400px);
    }
`

export const Title = styled.h1`
    font-size: max(2rem, 4.5vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
`

export const Subtitle = styled.h1`
    margin-top: max(20px, 2vh);
    font-size: max(1.75rem, 3.5vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')}; 
`

export const Body = styled.p`
    margin-top: max(20px, 1.75vh);
    font-size: max(1.25rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    white-space: pre-wrap;

    @media screen and (max-width: 767px) {
        font-size: max(0.75rem, 1vmin);
    }
`

export const SubBody = styled.p`
    margin-top: max(20px, 1.5vh);
    font-size: max(1.25rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    
    @media screen and (max-width: 767px) {
        font-size: max(0.75rem, 1vmin);
    }
`

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: max(80px, 3vmin);
    height: max(70vh, 250px);
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    padding: 0 2.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;

`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: 5vh;
    background: ${({darkButton}) => (darkButton ? 'black' : 'thistle')};
    white-space: nowrap;
    padding: 1vh 2vw;
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: 2vh;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
        padding: 10px 20px;
        border-radius: 40px;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.65rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`

export const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    margin-top: 3vh;
    margin-bottom: 3vh;
    overflow: hidden;
    padding-left: 2vw;
    padding-right: 2vw;
    width: 100%;
    display: ${({showAccordion}) => (showAccordion ? '' : 'none')};
`


export const Accordion = styled.div`
    color: white;
    width: 100%;
`

export const QuestionWrapper = styled.div`
    
    background: rgb(13,16,22,0.4);
    border-radius: 5vh;
    padding: 2vh;
    cursor: pointer;
    font-size: 2.5vh;
    height: 5vh;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vh;

    @media screen and (max-width: 1024px) {
        font-size: 1.8vh;
    }

    @media screen and (max-width: 411px) and (min-height: 823px) {
        font-size: 1.6vh;
    }

    @media screen and (max-width: 375px) and (min-height: 812px) {
        font-size: 1.5vh;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.4vh;
    }

    &:hover {
        color: thistle;
    }
    
`

export const AnswerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
    font-size: 2vh;

`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 1vh;
    padding-left: 2vw;
    padding-right: 2vw;
    display: ${({showDescription}) => (showDescription ? '' : 'none')};
`

export const Description = styled.p`
    color: white;
    font-size: 2vh;
    font-weight: 200;
    font-family: 'Open Sans', sans-serif;
`