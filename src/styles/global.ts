import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, button, input, textarea {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color:${props => props.theme.black};
        color: ${props => props.theme["gray-100"]};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`