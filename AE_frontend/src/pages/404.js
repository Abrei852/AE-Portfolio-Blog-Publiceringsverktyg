import React from "react"
import Layout from "../components/Layout"
import { ErrorPageWrapper } from "../elements/PageElements"
import { Button } from "../components/Button"

const Error = () => {
  return (
    <Layout>
      <ErrorPageWrapper>
        <div>
          <h1>Oj, Något gick fel</h1>
          <Button href="">Tillbaka hem</Button>
        </div>
      </ErrorPageWrapper>
    </Layout>
  )
}

export default Error
