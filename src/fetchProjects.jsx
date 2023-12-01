import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: '5pido7z3g4gs',
  environment: 'master',
  accessToken: 'xU_1i3BfI_3B1yT54bsBOlBcWU8kOhguTSYGtgH56P8',
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { url, title, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
