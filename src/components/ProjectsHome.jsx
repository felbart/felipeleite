import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../constants'
import ProjectCard from './Projects/ProjectCard'
import ProjectCard2 from './Projects/ProjectCard2'

const ProjectsHome = () => {
  return (
    <section id="projects" className="container py-16 md:py-32 flex flex-col gap-8">
        <div className='flex flex-col gap-4 py-8'>
            <SectionTitle title="Projetos" subtitle="Alguns projetos selecionados" />
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
          {PROJECTS.map((item, id) => (
            <Link key={id} to={item.link}>
            <ProjectCard2 image={item.image[0]} title={item.title} subtitle={item.subtitle} description={item.description} technologies={item.technologies}/>
            </Link>
          ))}
        </div>
  </section>
  )
}

export default ProjectsHome