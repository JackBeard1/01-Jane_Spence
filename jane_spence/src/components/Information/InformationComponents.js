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
    height: 100vh;
    display: flex;
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    overflow-x: hidden;
`

export const Column1 = styled.div`
    grid-area: col1;
    display: flex;
    overflow: hidden;
    height: 90vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 5vw;
    margin-right: 5vw;
`

export const Title = styled.h1`
    font-size: 5vh;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
`

export const Subtitle = styled.h1`
    margin-top: 3vh;
    font-size: 3.5vh;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')}; 
`

export const Body = styled.p`
    margin-top: 1.5vh;
    font-size: 2.2vh;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    white-space: pre-wrap;


`

export const SubBody = styled.p`
    margin-top: 1.5vh;
    font-size: 2.2vh;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
`

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5vw;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    padding: 0 1.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgWrap = styled.div`
    width: 40vw;
    height: 40vw;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    padding-top: 5vh;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;

`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: 5vh;
    background: ${({darkButton}) => (darkButton ? 'black' : 'thistle')};
    white-space: nowrap;
    padding: 2vh 3vw;
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: 2vh;
    font-weight: 600;
    margin-top: -5vh;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

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
    font-size: 1.75vh;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vh;

    @media screen and (max-width: 1024px) {
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
    outline: solid 2px red;
    margin-bottom: 2vh;
    font-size: 2vh;

`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
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