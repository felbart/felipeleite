import { useState, useEffect } from "react";
import { QUERY_PROJECTS, graphcms } from "../graphql/Queries";
import ProjectCard2 from "../components/Projects/ProjectCard2";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_PROJECTS)
      .then((data) => {
        setProjects(data.projects); // Ajuste o nome do campo com base na resposta
      })
      .catch((error) => console.error("Erro ao buscar projetos:", error));
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-950 via-secondary-950/30 to-transparent py-32">
      <div className="w-full py-32 px-2 flex flex-col items-center justify-center gap-4 border-2 border-red-200">
        <h3 className="text-5xl text-gray-100 font-bold uppercase">Alguns Projetos</h3>
        <span className="text-md font-mono text-secondary-400 uppercase tracking-wider">
          Alguns projetos desenvolvidos nos últimos anos
        </span>
      </div>

      <div className="container grid grid-cols-2 gap-8 py-24">
        {projects.map((project) => (
          <Link to={project.slug} key={project.slug}>
          <ProjectCard2
            key={project.slug}
            thumbnail={project.thumbnail}
            title={project.title}
            shortDescription={project.shortDescription}
            technology={project.technology}
          />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;