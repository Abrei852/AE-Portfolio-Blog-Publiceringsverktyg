import styled from "styled-components"

export const BlogCardWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;
`
export const Div = styled.div`
    @media ${props => props.theme.breakpoints.mediumscreen}{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`