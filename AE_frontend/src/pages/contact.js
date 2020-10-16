import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactPageWrapper, ContactFormWrapper } from "../elements/PageElements"

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan"/>
      <ContactPageWrapper>
        <ContactFormWrapper>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/meqpegjn" method="POST">
            <div>
              <input
                type="text"
                placeholder="namn"
                name="name"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
              ></textarea>
            </div>
            <button type="submit">
              Kontakta mig
            </button>
          </form>
        </ContactFormWrapper>
      </ContactPageWrapper>
    </Layout>
  )
}

export default contact
