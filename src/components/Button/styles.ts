import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 2rem;

    a {
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            width: 200px;
            border-radius: 8px;
            padding: 1rem;
            
            background-color: ${props => props.theme.black};
            color: ${props => props.theme.white};
            transition: all .5s;

            &:hover {
                box-shadow: 0 0 2rem ${props => props.theme.white};
                transition: all .5s;
            }

            @media only screen and (max-width: 800px) {
                margin: 2rem auto 0;
            }
        }
    }
`