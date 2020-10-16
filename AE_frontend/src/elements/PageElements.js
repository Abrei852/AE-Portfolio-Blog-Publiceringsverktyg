import styled from "styled-components"

export const ErrorPageWrapper = styled.main`
    background: white;
    text-align: center;
    min-height: calc(100vh - 5rem - 9rem);
`
export const ContactPageWrapper = styled.section`
    display: grid;
    place-items: center;
    padding: 5rem 0;
    min-height: calc(100vh - 5rem - 9rem);
`
export const ContactFormWrapper = styled.article`
    background: white;
    text-align: center;
    box-shadow: ${props => props.theme.shadows.shadow1};
    width: 90vw;
    max-width: 35rem;

    h3{
        padding-top: 1.25rem;
        color: ${props => props.theme.colors.grey3};
    }

    div{
        padding: 1rem 1.5rem;
    }

    input, textarea{
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        margin-bottom: 1.25rem;
        background: ${props => props.theme.colors.grey8};
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }

    button{
        display: block;
        width: 100%;
        padding: 1.2rem;
        color: black;
        background-color: ${props => props.theme.colors.beautifulsky};
        border-style: none;

        :hover{
            cursor: pointer;
            color: white;
        }
    }
`
export const AboutWrapper = styled.section`
    min-height: calc(100vh - 5rem - 9rem);
    padding: 7rem 0;
`
export const AboutInfoWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        width: 95vw;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        column-gap: 4rem;
    }
`
export const Article = styled.article`
    margin-bottom: 2rem;
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    line-height: 2;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-column: 6 / -1;
    }

    div{
        text-transform: uppercase;
        background: ${props => props.theme.colors.beautifulsky};
        color: black;
        padding: 0.375rem 0.75rem;
        display: inline-block;
        font-weight: 700;
        font-size: 0.875rem;
        border: 2px solid transparent;
        cursor: pointer;
    }
    a{
        display: inline-block;
        margin: 0 1rem;
    }
`