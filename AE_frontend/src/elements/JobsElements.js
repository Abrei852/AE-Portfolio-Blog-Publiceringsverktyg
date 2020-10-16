import styled from "styled-components"

export const JobsWrapper = styled.section`
    padding: 4rem 0;
    `

export const Div = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: ${props => props.theme.width.width1};
    padding: 0 1rem;

    @media ${props => props.theme.breakpoints.largescreen}{
        width: 80vw;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;

    button{
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        margin: 0 0.5rem;
        cursor: pointer;
        padding: 0.25rem 0;
        line-height: 1;

        :focus{
            color: ${({ active }) => active ? "black" : "black"};  
            box-shadow: 0 2px ${props => props.theme.colors.beautifulsky};
        }
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        flex-direction: column;
        justify-content: flex-start;
        button{
            margin-bottom: 1rem;

        :hover{
            font-size: 1.5rem;
        }
        }
    }
`