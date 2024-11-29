import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(import.meta.env.VITE_API)

const projectfields = `
    slug
    title
    shortDescription
    technology {
        iconsvg
        name
    }
    thumbnail{
        url
    }
    content{
        html
    }
`
export const QUERY_PROJECTS = gql`
    query GetProjects {
        projects{
        ${projectfields}
        }
    }
`