import { PaginationInput, QueryPlanetArgs } from "../../domain/generated/graphql.js";
import { IPlanet } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";
import { linkResolver } from "./link_resolver.js";


export const PlanetResolver = {

    Planet: {
        residents: (parent: IPlanet, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.residents, context.dataSources.charactersAPI.getPerson.bind(context.dataSources.charactersAPI))
        },
        films: (parent: IPlanet, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.films, context.dataSources.charactersAPI.getFilm.bind(context.dataSources.charactersAPI))
        }
    },
    Query: {
        planets: (_: any, params: PaginationInput, context: ContextValue) => {
            return context.dataSources.charactersAPI.fetchAllPlanets("planets")
        },
        planet: (_: any, params: QueryPlanetArgs, context: ContextValue) => {
            if (!params.id) {
                throw new Error("Planet ID is required"); 
            }
            return context.dataSources.charactersAPI.getPlanet(`planets/${encodeURIComponent(params.id)}`)
        }
    }
}