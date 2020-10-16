import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Styling for the button
export const ButtonWrapper = styled(props => <Link {...props} />) `
padding: 0.8rem 2rem;
border-radius: 0.5rem;
font-weight: 700;
font-size: 0.875rem;
width: fit-content;
transition: filter 0.3s ease;
text-decoration: none;
background-color: ${props => props.theme.colors.beautifulsky};
box-shadow: ${props => props.theme.colors.shadow1};
color: black;
display: block;
text-align: center;
margin: auto;          

&:hover,
&:focus {
  color: white;
}
`