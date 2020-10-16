import React from "react"
import Title from "./Title"
import { Button } from "./Button"
import Project from "./Project"
import { Section, Div } from "../elements/ProjectsElements"

const Projects = ({ projects, title, showLink }) => {
  return (
    <Section>
      <Title title={title} />
      <Div>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </Div>
      {showLink && (
        <Button href="projects/"> Alla projekt</Button>
      )}
    </Section>
  )
}

export default Projects
