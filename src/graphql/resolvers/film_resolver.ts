import { PaginationInput, QueryFilmArgs } from "../../domain/generated/graphql.js";
import { IFilm } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";
import { linkResolver } from "./link_resolver.js";

export const FilmResolver = {

    Film: {
        characters: (parent: IFilm, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.characters, context.dataSources.charactersAPI.getPerson.bind(context.dataSources.charactersAPI))
        },
        planets: (parent: IFilm, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.planets, context.dataSources.charactersAPI.getPlanet.bind(context.dataSources.charactersAPI))
        },
        vehicles: (parent: IFilm, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.vehicles, context.dataSources.charactersAPI.getVehicle.bind(context.dataSources.charactersAPI))
        },
    },
    Query: {
        films: (_: any, params: PaginationInput, context: ContextValue) => {
            return context.dataSources.charactersAPI.fetchAllFilms("films")
        },
        film: (_: any, params: QueryFilmArgs, context: ContextValue) => {
            if (!params.id) {
                throw new Error("Film ID is required"); 
            }
            return context.dataSources.charactersAPI.getFilm(`films/${encodeURIComponent(params.id)}`)
        }
    }


}