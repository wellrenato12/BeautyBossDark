import styled, { css } from "styled-components";

export const MobileContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.white};

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: all 0.5s;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: all 0.7s;
    }

    nav {
        div {
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 2rem;
                transform: scale(.7);
                transition: all .7s;

                li {
                    a {
                        font-size: 2rem;
                        color: ${props => props.theme.black};
                    }
                }
            }
        }
    }

    ${({ menuIsVisible }: {menuIsVisible: boolean}) => menuIsVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);

        > svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1);
        }
    `}
`