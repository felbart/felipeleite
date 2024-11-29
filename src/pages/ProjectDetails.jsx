import { useParams } from "react-router-dom"
import { PROJECTS } from "../constants";
import PageTitle from "../components/PageTitle";




const ProjectDetails = () => {

  const {id} = useParams();
  const projectId = String(id);
  const project = projectId.replace(/[^a-zA-Z0-9\s]/g, " ");

  const selectedProject = PROJECTS.filter(projeto => projeto.link === id);
  
  const imgcover = selectedProject[0].imgcover;

  const subtitle = selectedProject[0].subtitle;

  console.log(imgcover);

  return (
    <section id="project">
      <div className='w-full min-h-[600px] md:min-h-[750px] bg-gradient-to-b from-secondary-900/30 to-transparent flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden'>
          <div className='absolute inset-0 z-[-1]' style={{background:'linear-gradient(180deg, rgba(3,7,18,0.9) 45%, rgba(3,7,18,1) 100%), url('+ imgcover +') no-repeat center/cover'}}>
            <div className="container h-full flex flex-col justify-center items-center">
              <PageTitle title={project} subtitle={subtitle} />
              <p className="text-gray-400 text-center max-w-[640px] my-4 md:my-6 text-sm md:text-base">
                {selectedProject[0].description}
              </p>
            </div>
          </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="md:w-4/12 w-full flex flex-col gap-4">
            <ul className="flex flex-col items-center">
              <li className="flex flex-row w-full items-center justify-between py-2 border-b-[1px] border-gray-600">
                <span className="text-xs text-secondary-400 font-mono uppercase">Empresa:</span>
                <p className="text-gray-400 text-xs md:text-sm text-right">{selectedProject[0].company}</p>
              </li>
              <li className="flex flex-row w-full items-center justify-between py-2 border-b-[1px] border-gray-600">
                <span className="text-xs text-secondary-400 font-mono uppercase">Função:</span>
                <p className="text-gray-400 text-xs md:text-sm text-right">{selectedProject[0].role}</p>  
              </li>
              <li className="flex flex-row w-full items-center justify-between py-2 border-b-[1px] border-gray-600">
                <span className="text-xs text-secondary-400 font-mono uppercase">Entregáveis:</span>
                <p className="text-gray-400 text-xs md:text-sm text-right">{selectedProject[0].deliverables}</p>  
              </li>
              <li className="flex flex-row w-full items-center justify-between py-2 border-b-[1px] border-gray-600">
                <span className="text-xs text-secondary-400 font-mono uppercase">Tecnologias:</span>
                <p className="text-gray-400 text-xs md:text-sm text-right">{selectedProject[0].technologies}</p>  
              </li>
            </ul>
          </div>
          <div className="md:w-6/12 w-full flex flex-col gap-8">
          <p className="text-base text-gray-400">{selectedProject[0].description}</p>
          </div>
      </div>
      <div className="container flex flex-col gap-8 justify-start items-centert">
        
      </div>
    </section>
  )
}

export default ProjectDetails