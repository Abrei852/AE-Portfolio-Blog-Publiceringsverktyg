import styled from "styled-components"

export const BlogWrapper = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: ${props => props.theme.colors.grey8};

    :hover{
        box-shadow: ${props => props.theme.shadows.shadow2};
        transform: scale(1.02);
    }

    .gatsby-image-wrapper{
        height: 20rem;
    }
`