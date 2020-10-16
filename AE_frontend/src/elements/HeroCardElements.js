import styled from "styled-components"

export const HeroCardWrapper = styled.div`
    box-shadow: ${props => props.theme.shadows.shadow2};
    padding: 1rem;
    
    .gatsby-image-wrapper{
        display:none;
    }

    ul{
        visibility: hidden;
    }

    p{
        margin-top: 2rem;
    }

    @media ${props => props.theme.breakpoints.mediumscreen}{
        padding: 0;
        box-shadow: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto repeat(4, 1fr);
        column-gap: 1rem;
        row-gap: 1rem;
        background: transparent;
        margin-left: 1rem;

        h2{
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        
        p{
            text-align: center;
            margin-top: 4rem;
            margin-bottom: 3rem;
        }

        .gatsby-image-wrapper{
            display: block;
            grid-column: 3 / span 2;
            grid-row: 1 / span 4
        }

        ul{
            visibility: visible;
            grid-column: 1 / span 3;
            grid-row: 5;
            margin: auto;
        }
    }

`
export const LinkWrapper = styled.div`
    text-align: center;
    margin-top: 5rem;

    a{
        font-size: 1rem;
        margin: 0 0.5rem;
    }

    @media ${ props => props.theme.breakpoints.mediumscreen}{
        grid-column: 1 / span 2;
        grid-row: 4 / span 1;
        box-shadow: ${props => props.theme.shadows.shadow2};
        padding: 1rem;
        text-align: center;
        margin-top: 0rem;

        a{
            margin: 0 1rem;

            :hover{
                color: ${props => props.theme.colors.beautifulsky};
            }
        }
    }
`
export const AboutMeWrapper = styled.div`
    grid-column: 2 / span 2;
    grid-row: 1 / span 3;
    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-column: 1 / span 2;
        grid-row: 1 / span 3;
        box-shadow: ${props => props.theme.shadows.shadow2};
        padding: 1rem;
    }
`