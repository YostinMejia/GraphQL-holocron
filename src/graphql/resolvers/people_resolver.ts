import { PaginationInput, QueryPersonArgs } from "../../domain/generated/graphql.js";
import { IPerson } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";
import { linkResolver } from "./link_resolver.js";

export const PeopleResolver = {

    People: {
        homeworld: (parent: IPerson, params: PaginationInput, context: ContextValue) => {
            return context.dataSources.charactersAPI.getPlanet(parent.homeworld)
        },
        films: (parent: IPerson, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.films, context.dataSources.charactersAPI.getFilm.bind(context.dataSources.charactersAPI))
        },
        vehicles: (parent: IPerson, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.vehicles, context.dataSources.charactersAPI.getVehicle.bind(context.dataSources.charactersAPI))
        }
    },
    Query: {
        people: async(__: any, params: PaginationInput, context: ContextValue) => {            
             return context.dataSources.charactersAPI.fetchAllPeople("people")
        },
        person: (parent: any, params: QueryPersonArgs, context: ContextValue) => {
            if (!params.id) {
                throw new Error("Person ID is required"); 
            }
            return context.dataSources.charactersAPI.getPerson(`people/${encodeURIComponent(params.id)}`)
        }
    }
}