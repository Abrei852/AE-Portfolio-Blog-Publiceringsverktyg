import styled from "styled-components"

export const Ul = styled.ul`
    display: flex;
    svg{
        color: ${props => props.theme.colors.beautifulsky};
        margin: 0 1rem;

        :hover{
            color: ${props => props.theme.colors.grey5};
        }
    }
`