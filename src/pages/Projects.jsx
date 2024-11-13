import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div>Projects
      <Link to='/tsr'>
        <div>Projeto 1</div>
      </Link>
      <Link to='/UFT'>
        <div>Projeto UFT</div>
      </Link>
      <Link to='/fapto'>
        <div>Projeto Fapto</div>
      </Link>
    </div>
  )
}

export default Projects