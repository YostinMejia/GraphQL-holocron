import { IPerson } from "../../domain/types/types.js";
import { ContextValue } from "../../index.js";

export const PeopleResolver = {

    People:{
        homeworld: (parent:IPerson,params:any,context:ContextValue)=>{
            return context.dataSources.charactersAPI.getPlanetById(parent.homeworld)
        },
    },
    Query: {
        people: async (__: any, params: any, context: ContextValue) => {
            return await (context.dataSources.charactersAPI.fetchAllPeople("people"));
        },
        person:async(parent: any, params: any, context: ContextValue)=>{
            
            return await context.dataSources.charactersAPI.getPersonById(`people/${encodeURIComponent(params.id)}`)
        }
    }
}