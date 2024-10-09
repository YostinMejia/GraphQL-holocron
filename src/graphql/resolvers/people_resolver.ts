import { IPerson } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";
import { linkResolver } from "./link_resolver.js";

export const PeopleResolver = {

    People: {
        homeworld: async (parent: IPerson, params: any, context: ContextValue) => {
            return await context.dataSources.charactersAPI.getPlanet(parent.homeworld)
        },
        films: async (parent: IPerson, params: any, context: ContextValue) => {
            return await linkResolver(parent.films, context.dataSources.charactersAPI.getFilm.bind(context.dataSources.charactersAPI))
        },
        vehicles: async (parent: IPerson, params: any, context: ContextValue) => {
            return await linkResolver(parent.vehicles, context.dataSources.charactersAPI.getVehicle.bind(context.dataSources.charactersAPI))
        }
    },
    Query: {
        people: async (__: any, params: any, context: ContextValue) => {
            return await (context.dataSources.charactersAPI.fetchAllPeople("people"));
        },
        person: async (parent: any, params: any, context: ContextValue) => {

            return await context.dataSources.charactersAPI.getPerson(`people/${encodeURIComponent(params.id)}`)
        }
    }
}