import React from "react"
import Title from "./Title"
import { ServicesWrapper, Div, Article } from "../elements/ServicesElements"
import { H4, P} from "../elements/TypographyElements"
import { Underline } from "../elements/SpecialElements"
import services from "../constants/services"
const Services = () => {
  return (
    <ServicesWrapper>
      <Title title="Tjänster" />
      <Div >
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Article key={id} >
              {icon}
              <H4 fontsize="small" align="center" transform="cap">{title}</H4>
              <Underline/>
              <P transform="cap">{text}</P>
            </Article>
          )
        })}
      </Div>
    </ServicesWrapper>
  )
}

export default Services
