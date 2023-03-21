import styled from "styled-components";

export const WebContainer = styled.header`
    background: ${props => props.theme.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 7rem;
        margin: auto;
        padding: 2rem;
        max-width: 1376px;

        a {
            cursor: pointer;
            img {
                width: 250px;
            }
        }

        button {
            background-color: ${props => props.theme.white};
        }

        div {
            ul {
                display: flex;
                gap: 2rem;

                li {
                    a {
                        color: ${props => props.theme["gray-500"]};
                        transition: all 1s;

                        &:hover {
                            color: ${props => props.theme["yellow-500"]};
                            transition: all 0.5s;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 800px) {
        div {
            display: none;
        }
    }

    @media only screen and (min-width: 800px) {
        span {
            visibility: hidden;
        }
    }
`