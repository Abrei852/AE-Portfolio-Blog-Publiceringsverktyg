import styled from "styled-components"

export const BlogsWrapper = styled.section`
    padding: 4rem 0;
`
export const Div = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: ${props => props.theme.width.width1};

    @media ${props => props.theme.breakpoints.mediumscreen}{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        column-gap: 2rem;

        picture{
            height: 1vw;
        }
    }
`