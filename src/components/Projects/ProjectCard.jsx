import React from 'react'
import { PiDesktop, PiDeviceMobile } from "react-icons/pi";
import TechBadge from '../TechBadge'


const ProjectCard = ({image, title, subtitle, description, technologies}) => {

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-6">
    <div className="flex gap-8 lg:gap-12 flex-col md:flex-row bg-gray-900/50 hover:bg-gray-900 rounded-xl overflow-clip group">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center justify-start">
        <div className="w-full lg:min-w-[480px] min-w-[380px] h-[250px] md:h-full lg:h-[420px] overflow-clip">
          <img
          src={image}
          width={420}
          height={300}
          alt="Universidade Federal do Tocantins"
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2 border-b pb-4 border-gray-800">
          <div className="flex gap-2 items-center">
            <PiDesktop
              size={32}
              className="text-gray-400 group-hover:text-secondary-500 duration-300"
            />
            <h3 className="text-gray-100 font-bold text-3xl group-hover:text-secondary-500 transition-colors">
              {title}
            </h3>
          </div>
          <span className="text-gray-200 text-base font-light">
            {subtitle}
          </span>
        </div>
        <p className="text-gray-400 md:text-base text-sm">
          {description}
        </p>
        <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
        <TechBadge nome={technologies} />
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard