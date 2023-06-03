import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'txhu8yg5',
  dataset: 'production',
  title: 'My Blog Website',
  apiVersion: '2023-03-06',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
