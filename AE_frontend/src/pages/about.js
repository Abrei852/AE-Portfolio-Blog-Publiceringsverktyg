import React from "react"
import Layout from "../components/Layout"
import { AboutWrapper, AboutInfoWrapper, Article } from "../elements/PageElements"
import { Button } from "../components/Button"
import SEO from "../components/SEO"
import downloadFile from "../../static/AECV.pdf"

const About = () => {
  return (
    <Layout>
      <SEO title="CV" description="Abrahams CV" />
      <AboutWrapper>
        <AboutInfoWrapper>
          <Article>
            <div>
              <a href={downloadFile} download>
                Ladda ner fullständig CV
              </a>
              {` `}
            </div>
            <Button href="contact/">Kontakta Mig</Button>
          </Article>
        </AboutInfoWrapper>
        <></>
      </AboutWrapper>
    </Layout>
  )
}


export default About
