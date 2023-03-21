import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    height: 100vh;
    max-width: 1376px;
    margin: auto;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        margin: 10rem 0 5rem;
    }
`

export const ContentHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40%;

    @media only screen and (max-width: 800px) {
        width: 80%;
        text-align: center;
    }

    h1 {
        font-size: 3rem;

        @media only screen and (max-width: 800px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.25rem;

        @media only screen and (max-width: 800px) {
            font-size: 1rem;
        }
    }
    
    span {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5rem;

        @media only screen and (max-width: 800px) {
            justify-content: center;
        }

        a {
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 1rem;
            transition: all .5s;
            color: ${props => props.theme.white};

            &:hover {
                color: ${props => props.theme["yellow-500"]};
                transition: all .5s;
            }
        }
    }
`

export const ImageHome = styled.div`
    img {
        width: 450px;
        height: 450px;
        border-radius: 50%;
        box-shadow: 0 0 2rem ${props => props.theme["yellow-500"]};
        

        @media only screen and (max-width: 1024px) {
            width: 380px;
            height: 380px;
        }

        @media only screen and (max-width: 800px) {
            width: 300px;
            height: 300px;
        }
    }

    
`