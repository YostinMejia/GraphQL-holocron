import { ContextValue } from "../../index.js";
import { People } from "../../domain/generated/graphql.js"

export const PeopleResolver = {
    Query: {
        people: async (__: any, params: any, context: ContextValue): Promise<People[]> => {
            return await (context.dataSources.charactersAPI.fetchAllPeople("people"));
        },

    }
}