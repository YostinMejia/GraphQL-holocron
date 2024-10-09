import { PaginationInput, QueryVehicleArgs } from "../../domain/generated/graphql.js";
import { IVehicle } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";
import { linkResolver } from "./link_resolver.js";

export const VehicleResolver = {

    Vehicle: {
        pilots: (parent: IVehicle, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.pilots, context.dataSources.charactersAPI.getPerson.bind(context.dataSources.charactersAPI))
        },
        films: (parent: IVehicle, params: PaginationInput, context: ContextValue) => {
            return linkResolver(parent.films, context.dataSources.charactersAPI.getFilm.bind(context.dataSources.charactersAPI))
        }
    },
    Query: {
        vehicles: (_: any, params: PaginationInput, context: ContextValue) => {
            return context.dataSources.charactersAPI.fetchAllVehicles("vehicles")
        },
        vehicle: (_: any, params: QueryVehicleArgs, context: ContextValue) => {
            if (!params.id) {
                throw new Error("Vehicle ID is required"); 
            }
            return context.dataSources.charactersAPI.getVehicle(`vehicles/${encodeURIComponent(params.id)}`)
        }
    }


}