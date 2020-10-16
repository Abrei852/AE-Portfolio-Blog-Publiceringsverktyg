import React from "react"
import { HeroCardWrapper, LinkWrapper, AboutMeWrapper } from "../elements/HeroCardElements"
import { H2, P } from "../elements/TypographyElements"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { Button } from "../components/Button"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const HeroCard = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
      } = useStaticQuery(query)
    return(
        <HeroCardWrapper>
            <AboutMeWrapper>
                <H2 transform="uc" align="center">Kort om mig</H2>
                <P transform="cap" align="center">Jag tycker om att koda</P>
                <P transform="cap" align="center">Jag lär mig react och gatsby</P>
                <P transform="cap" align="center">styled components {'>'} Css</P>
            </AboutMeWrapper>
            <LinkWrapper>
                <H2 transform="uc" align="center">Favoritspråk</H2>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/"
                >
                C#
                </a>

                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactjs.org/docs/getting-started.html"
                >
                React
                </a>

                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gatsbyjs.org/docs/"
                >
                Gatsby
                </a>

                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dotnet.microsoft.com/apps/xamarin"
                >
                Xamarin
                </a>
            </LinkWrapper>
            <Image fluid={fluid}/>
            <SocialLinks/>
            <Button href="contact/">Kontakta mig</Button>
        </HeroCardWrapper>
    )
}