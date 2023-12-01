import { useFetchProjects } from './fetchProjects'
import React from 'react'

const Projects = () => {
  const { loading, projects } = useFetchProjects()
  console.log(loading, projects)
  return <h2>Projects</h2>
}

export default Projects
