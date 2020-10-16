import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { ProjectWrapper, InfoWrapper, ProjectStackWrapper, ProjectLinkWrapper } from "../elements/ProjectElements"
import { H2, H3, P } from "../elements/TypographyElements"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectWrapper>
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <Image fluid={image.childImageSharp.fluid}/>
      )}
      <InfoWrapper>
        <H2>0{index + 1}</H2>
        {/* if title is not supplied, set a defualt title */}
        <H3 fontsize="medium" transform="cap" align="center">{title || "Projekt"}</H3>
        <P fontsize="small" align="center">{description}</P>
        <ProjectStackWrapper>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStackWrapper>
        <ProjectLinkWrapper>
          <a href={github}>
            <FaGithubSquare size={35}/>
          </a>
          <a href={url}>
            <FaShareSquare size={37}/>
          </a>
        </ProjectLinkWrapper>
      </InfoWrapper>
    </ProjectWrapper>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
