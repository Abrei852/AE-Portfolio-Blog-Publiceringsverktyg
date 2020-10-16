import React from "react"
import { Div } from "../elements/TitleElements"
import { Underline } from "../elements/SpecialElements"
import { H2 } from "../elements/TypographyElements"
const Title = ({ title }) => {
  return (
    <Div>
      <H2 fontsize="medium" transform="cap" align="center">{title || "default title"}</H2>
      <Underline/>
    </Div>
  )
}

export default Title