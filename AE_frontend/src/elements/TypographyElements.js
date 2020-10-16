import styled from "styled-components"

//Styling for the H1 tag
export const H1 = styled.h1`

    //Font Size
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.medium
        }
    }};

    text-align: ${props => {
        switch(props.align){
            case "left":
                return props.theme.align.left

            case "center":
                return props.theme.align.center
            
            case "right":
                return props.theme.align.right
            
            default:
                return props.theme.align.left
        }
    }};

    text-transform: ${props => {
        switch(props.transform){
            case "uc":
                return props.theme.transform.UC

            case "lc":
                return props.theme.transform.LC

            case "cap":
                return props.theme.transform.Cap

            default:
                return props.theme.transform.LC
        }
    }};
`
//Styling for the H2 tag
export const H2 = styled.h2`

    //Font Size
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};

    text-align: ${props => {
        switch(props.align){
            case "left":
                return props.theme.align.left

            case "center":
                return props.theme.align.center
            
            case "right":
                return props.theme.align.right
            
            default:
                return props.theme.align.left
        }
    }};

    text-transform: ${props => {
        switch(props.transform){
            case "uc":
                return props.theme.transform.UC

            case "lc":
                return props.theme.transform.LC
                
            case "cap":
                return props.theme.transform.Cap

            default:
                return props.theme.transform.LC
        }
    }};
`
//Styling for the H3 tag
export const H3 = styled.h3`

    //Font Size
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};

    text-transform: ${props => {
        switch(props.transform){
            case "uc":
                return props.theme.transform.UC

            case "lc":
                return props.theme.transform.LC

            case "cap":
                return props.theme.transform.Cap

            default:
                return props.theme.transform.LC
        }
    }};

    text-align: ${props => {
        switch(props.align){
            case "left":
                return props.theme.align.left

            case "center":
                return props.theme.align.center
            
            case "right":
                return props.theme.align.right
            
            default:
                return props.theme.align.left
        }
    }};
    font-weight: 400;
`
//styling fro the H4 tag
export const H4 = styled.h4`

    //Font Size
    font-size: ${props => {
        switch(props.fontsize){
            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};

    text-align: ${props => {
        switch(props.align){
            case "left":
                return props.theme.align.left

            case "center":
                return props.theme.align.center
            
            case "right":
                return props.theme.align.right
            
            default:
                return props.theme.align.left
        }
    }};
    text-transform: ${props => {
        switch(props.transform){
            case "uc":
                return props.theme.transform.UC

            case "lc":
                return props.theme.transform.LC

            case "cap":
                return props.theme.transform.Cap

            default:
                return props.theme.transform.LC
        }
    }};
    color: ${props => props.theme.colors.grey5};
    background: ${props => props.theme.colors.grey7};
    padding: 0.375rem 0.75rem;
`
//Styling for the P tag
export const P = styled.p`
    letter-spacing: 0.2rem;

    font-size: ${props => {
        switch(props.fontsize){
            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};

    text-align: ${props => {
        switch(props.align){
            case "left":
                return props.theme.align.left

            case "center":
                return props.theme.align.center
            
            case "right":
                return props.theme.align.right
            
            default:
                return props.theme.align.left
        }
    }};

    text-transform: ${props => {
        switch(props.transform){
            case "uc":
                return props.theme.transform.UC

            case "lc":
                return props.theme.transform.LC

            case "cap":
                return props.theme.transform.Cap

            default:
                return props.theme.transform.LC
        }
    }};
`