/* eslint-disable react/prop-types */
import TechBadge from "../TechBadge";

const ProjectCard2 = ({ thumbnail, title, shortDescription, technology }) => {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-clip md:h-[380px] h-[300px] group rounded-lg">
      {/* Thumbnail */}
      <img 
        src={thumbnail.url} 
        alt={title} 
        className="absolute h-full w-full object-cover group-hover:opacity-50 group-hover:blur-sm transition-all duration-700" 
      />

      {/* Info */}
      <div className="flex flex-col gap-4 justify-start items-start absolute group-hover:bottom-8 transition-all ease-in-out duration-500 -bottom-[300px] left-6 bg-gray-950/90 px-2 py-4 w-[90%] rounded-md">
        {/* Title */}
        <h3 className="text-gray-100 font-bold text-3xl">{title}</h3>

        {/* Short description */}
        <span className="text-gray-200 text-base font-light">{shortDescription}</span>

        {/* Technologies */}
        <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
          {technology.map((tech) => (
            <TechBadge key={tech.name} nome={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;