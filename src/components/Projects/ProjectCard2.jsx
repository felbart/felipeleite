import { PROJECTS } from "../../constants"
import img01 from '../../assets/images/tsr-01.png'
import img02 from '../../assets/images/tsr-02.png'
import img03 from '../../assets/images/tsr-03.png'
import TechBadge from "../TechBadge"

const ProjectCard2 = ({image, title, subtitle, description, technologies}) => {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-clip h-[400px] group rounded-lg">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover group-hover:opacity-25 transition-all duration-700"/>
        <div className="flex flex-col gap-4 justify-start items-start absolute group-hover:bottom-8 transition-all ease-in-out duration-500 -bottom-[300px] left-4 bg-gray-900 px-2 py-4 w-[90%]">
            <h3 className="text-gray-100 font-bold text-3xl group-hover:text-secondary-500 transition-colors">
              {title}
            </h3>
            <span className="text-gray-200 text-base font-light">
                {subtitle}
            </span>
            <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
                <TechBadge nome={technologies} />
            </div>
            
        </div>
    </div>
  )
}

export default ProjectCard2