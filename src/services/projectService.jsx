import { graphcms } from "../graphql/Queries"; // Certifique-se de ajustar o caminho
import { QUERY_PROJECTS } from "../graphql/Queries";

export const getProjects = async () => {
  try {
    const data = await graphcms.request(QUERY_PROJECTS);
    console.log(data.projects);
    return data.projects || [];
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
};
