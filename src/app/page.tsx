import { getProject } from '../../sanity/sanity-utils'

export default async function Home() {
  const projects = await getProject()

  return (
    <div className="bg-red-500">
      {projects.map((project) => {
        return <div key={project._id}>{project.name}</div>
      })}
    </div>
  )
}
