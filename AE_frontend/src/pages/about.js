import React from "react"
import Layout from "../components/Layout"
import { AboutWrapper, AboutInfoWrapper, Article } from "../elements/PageElements"
import { Button } from "../components/Button"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import downloadFile from "../../static/AECV.pdf"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Abrahams CV" />
      <AboutWrapper>
        <AboutInfoWrapper>
        <Image fluid={image.childImageSharp.fluid}/>
          <Article>
            <Title title="Abraham Eishow"/>
          <ReactMarkdown source={info} />
            <div>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <div>
              <a href={downloadFile} download>
                Ladda ner fullständig CV
              </a>
              {` `}
            </div>
            <Button href="contact/">Kontakta Mig</Button>
          </Article>
        </AboutInfoWrapper>
      </AboutWrapper>
    </Layout>
  )
}

export const query = graphql`
{
  about:allStrapiAbout {
    nodes {
      stack {
        id
        title
      }
      Title
      info
      image {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
}
`

export default About
