import { Link } from "react-router-dom"
import { PROJECTS } from '../constants'


const Projects = () => {
  return (
    <section className="h-screen bg-gray-200">
      <ul className='flex gap-4 items-center h-full mx-auto'>
      {PROJECTS.map((item, id) => (
        <li key={id}>
          <Link to={`/projects/${item.link}`}>
            <p>{item.title}</p>
          </Link>
        </li>
      ))}
      </ul>
      
    </section>
  )
}

export default Projects