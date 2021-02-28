import styled from 'styled-components'

export const InformationContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0px;
        width: 100%;
        overflow-x: hidden;
    }

    @media screen and (max-width: 414px) {
        padding: 100px 0px;
        width: 100%;
        overflow-x: hidden;
    }

`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 1100px;
    display: flex;

    @media screen and (max-width: 360px) and (max-height: 640px) {
        height: 780px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        height: 780px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        height: 780px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        height: 780px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        height: 780px;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        height: 780px;
    }



`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-right: 100px;
    margin-left: -10px;

    @media screen and (max-width: 1400px) {
        padding-left: 100px;
    }

    @media screen and (max-width: 1024px) {
        margin-right: 0px;
        display: grid;
        align-items: center;
        margin-right: -10%;
        padding-left: 60px;
       
    }

    @media screen and (max-width: 768px) {
        padding-left: 45px;
    }

    @media screen and (max-width: 414px) {
        padding-left: 25px;
    }

    @media screen and (max-width: 360px) {
        padding-left: 25px;
    }

    @media screen and (max-width: 320px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 280px) {
        margin-right: 0px;
        display: grid;
        align-items: center;
        padding-left: 30px;
    }
    
`

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: pink;

    
`

export const Body = styled.ul`
    
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin-bottom: 5px;


    @media screen and (max-width: 414px) {
        font-size: 1rem;
        display: grid;
        justify-content: center;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 30px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 0px;
    margin: 0 0 10px 0;

    @media screen and (max-width: 1400px) {
        padding-right: 100px;
    }

    @media screen and (max-width: 1270px) {
        display: none;
    }
`

export const Item = styled.div`
    font-size: 1.15rem;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
        margin-left: -40px;
        
    }

    @media screen and (max-width: 280px) {
        font-size: 1rem;
    }

`

export const ContactWrap = styled.div`
    display: flex;
    justify-content: left;
`

export const ContactForm = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
`


export const ContactTitle = styled.h2`
    color: pink;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Label = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5px;
    width: 280px;
    font-weight: 500;
    font-size: 1.7rem;

    @media screen and (max-width: 414px) {
        font-size: 1.4rem;
        
    }
`

export const Input = styled.input`
    height: 40px;
    width: 280px;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
    margin-top: 10px;

    @media screen and (max-width: 320px) {
        width: 250px;
        
    }

    @media screen and (max-width: 280px) {
        width: 240px;
        
    }
`

export const InputLarge = styled.textarea`
    height: 100px;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
    padding-top: 10px;
    width: 280px;
    margin-top: 10px;
    type: textarea;

    @media screen and (max-width: 320px) {
        width: 250px;
        
    }

    @media screen and (max-width: 280px) {
        width: 240px;
        
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 40px;
`

export const SubmitBtn = styled.button`
    
    border-radius: 30px;
    background: pink;
    white-space: nowrap;
    padding: 10px 30px;
    color: black;
    font-size: 1rem;
    font-weight: 600;
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

export const Error = styled.p`
color: red;
font-family: 'Open Sans', sans-serif;
font-weight: 700;
padding-top: 5px;

`

