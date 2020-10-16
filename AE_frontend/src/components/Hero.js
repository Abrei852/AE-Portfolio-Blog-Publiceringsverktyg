import React from "react"
import Title from "./Title"
import { HeroWrapper } from "../elements"
import { HeroCard } from "./HeroCard"
// ...GatsbyImageSharpFluid

const Hero = () => {
  return (
    <HeroWrapper>
      <Title title="Abraham Eishow"/>
      <HeroCard/>
    </HeroWrapper>
  )
}

export default Hero
