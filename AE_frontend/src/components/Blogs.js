import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Button } from "./Button"
import { BlogsWrapper, Div } from "../elements/BlogsElements"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogsWrapper>
      <Title title={title} />
      <Div>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </Div>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <Button href="blog/">Alla artiklar</Button>
      )}
    </BlogsWrapper>
  )
}
export default Blogs
