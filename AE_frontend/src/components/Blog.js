import React from "react"
import PropTypes from "prop-types"
import { BlogWrapper } from "../elements/BlogElements"
import { BlogCard } from "./BlogCard"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <BlogWrapper>
        {/* if image is not supplied, instead of breaking, dont show any image */}
        {image && (
          <Image fluid={image.childImageSharp.fluid}/>
        )}
        <BlogCard title={title} desc={desc} category={category} date={date}/>
      </BlogWrapper>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog
