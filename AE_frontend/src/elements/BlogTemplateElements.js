import styled from "styled-components"

export const TemplateWrapper = styled.section`
    padding: 5rem 0;
    min-height: calc(100vh - 5rem - 9rem);
`
export const CenterWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        width: 95vw;
    }
`