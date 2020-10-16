import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Button } from "../components/Button"
import { TemplateWrapper, CenterWrapper } from "../elements/BlogTemplateElements"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc}/>
      <TemplateWrapper>
        <CenterWrapper>
          <article>
            <ReactMarkdown source={content} />
          </article>
          <Button href="blog/">Alla Artiklar</Button>
        </CenterWrapper>
      </TemplateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
