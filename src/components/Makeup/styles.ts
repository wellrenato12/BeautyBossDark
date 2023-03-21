import styled from "styled-components";

export const MakeupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    max-width: 1376px;
    margin: 0 auto 5rem;
    padding: 2rem;
    border-radius: 12px;
    background-color: ${props => props.theme["yellow-200"]};
    color: ${props => props.theme.black};

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        padding: 2rem 0 6rem;
    }
`

export const ImageMakeup = styled.div`
    img {
        border-radius: 12px;
        height: 350px;
        object-fit: cover;

        @media only screen and (max-width: 1024px) {
            height: 250px;
        }

        @media only screen and (max-width: 800px) {
            height: 200px;
        }
    }
`

export const TextMakeup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (max-width: 800px) {
        align-items: center;
        padding: 1rem;
        width: 80%;
        text-align: center;
    }
    
    h1 {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 800px) {
            justify-content: center;
        }
    }

    section {
        width: 110px;
        &:nth-child(4) {
            width: 75px;
        }
        a {
            display: flex;
            gap: .25rem;
            transition: all .5s;
            color: ${props => props.theme.black};

            &:hover {
                color: ${props => props.theme["blue-500"]};
                gap: 0.5rem;
                transition: all .5s;
            }

            span {
                display: flex;
                align-items: center;
            }
        }
    }
`