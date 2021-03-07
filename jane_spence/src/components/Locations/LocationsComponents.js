import styled from 'styled-components'

export const InformationContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 1250px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
    
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: max(90vh, 700px);
    display: flex;

    @media screen and (max-width: 1250px) {
        height: max(90vh, 1550px);
    }

    @media screen and (max-width: 767px) {
        height: max(90vh, 1300px);
    }

    @media screen and (max-width: 320px) {
        height: max(90vh, 1350px);
    }    
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;

    @media screen and (max-width: 1250px) {
        display: flex;
        flex-direction: column;
    }
`

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
    }
`

export const Title = styled.h1`
    font-size: max(1.6rem, 3.5vmin);
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    color: black;
    margin-bottom: max(10px, 0.5vmin);
`

export const Body = styled.p`
    font-size: max(1rem, 2vmin);
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    color: black;
    text-align: center;
`

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
        margin-right: 0;
        margin-left: 0;
    }
`

export const Column3 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
    }
`

export const MapWrapper = styled.div`
    height: max(250px, 40vh);
    width: 22.5vw;
    overflow: hidden;
    margin-top: max(10px, 2.5vmin);
    margin-bottom: max(10px, 2.5vmin);

    @media screen and (max-width: 1250px) {
        width: 90%;
        height: max(250px, 30vh);
    }

    @media screen and (max-width: 1024px) {
        width: 90%;
        height: max(250px, 20vh);
    }

    
`


export const BodyHours = styled.p`
    font-size: max(1rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: black;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

export const BodyHoursTitle = styled.h4`
    font-size: max(1rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    color: black;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

