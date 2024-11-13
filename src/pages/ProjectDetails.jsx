import { useParams } from "react-router-dom"

const ProjectDetails = () => {

  const {id} = useParams();
  const projectId = String(id);
  const project = projectId.replace(/[^a-zA-Z0-9\s]/g, " ");

  
  

  return (
    <section className="container flex items-center h-full">
      <h2>Págin do Projeto <span className="capitalize font-bold text-blue-500">{project}</span></h2>
    </section>
  )
}

export default ProjectDetails