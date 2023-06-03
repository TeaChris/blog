import { createClient, groq } from 'next-sanity'
import { Project } from '../types/Project'

export async function getProject(): Promise<Project[]> {
  const client = createClient({
    projectId: 'txhu8yg5',
    dataset: 'production',
    apiVersion: '2023-03-06',
  })

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  )
}
