import React from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: '5pido7z3g4gs',
  environment: 'master',
  accessToken: 'xU_1i3BfI_3B1yT54bsBOlBcWU8kOhguTSYGtgH56P8',
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
