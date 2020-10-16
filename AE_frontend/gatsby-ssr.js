import "./src/css/main.css"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
// import { preToCodeBlock } from "mdx-utils"
import Theme from "./src/themes/themes"
// import { Table, Code } from "./src/components"

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
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

// const components = {
//   table: Table,
//   pre: preProps => {
//     const props = preToCodeBlock(preProps)
//     // if there's a codeString and some props, we passed the test
//     if (props) {
//       return <Code {...props} />
//     }
//     // it's possible to have a pre without a code in it
//     return <pre {...preProps} />
//   },
//   wrapper: ({ children }) => <>{children}</>,
// }

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
)
