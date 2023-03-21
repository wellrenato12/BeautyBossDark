import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1376px;
    margin: auto;
    min-height: 100vh;
`

export const CarouselContent = styled.div`
    cursor: grab;
    overflow: hidden;
`

export const Inner = styled.div`
    display: flex;
`

export const Item = styled.div`
    max-height: 502.64px;
    min-width: 400px;
    padding: 1rem;

    @media only screen and (max-width: 800px) {
        min-width: 300px;
        height: 300px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 90%;
        border-radius: 12px;
        pointer-events: none;
    }
`