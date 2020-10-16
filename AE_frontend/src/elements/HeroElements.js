import styled from "styled-components"

export const HeroWrapper = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    background: white;
    max-width: 1200px;
    position: relative;
    margin: auto;
`
export const Div = styled.div`
    margin: auto;
    display: grid;
    align-items: center;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-template-columns: repeat(12, 1fr);
        h2{
            font-size: 0.85rem;
        }
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        h2{
            font-size: 1rem;
            line-height: 1rem;
        }
    }
`
export const Article = styled.article`
    background: white;
    color: ${props => props.theme.colors.grey3};
    padding: 1rem;
    
    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-row: 1/1;
        grid-column: 1 / span 8;
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        grid-column: 1 / span 8;
    }
`

