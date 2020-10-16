// import "./src/css/main.css"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/themes"

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto";
  background-color: white;  
  line-height: 1.5;
  font-size: 0.875rem;
  margin-top: 5rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
)
