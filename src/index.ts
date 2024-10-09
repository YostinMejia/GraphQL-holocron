import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PeopleResolver } from './graphql/resolvers/people_resolver.js';
import { SwapiRESTDatasource } from './infrastructure/datasources/SwapiRESTDatasource.js';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { PeopleType } from './graphql/typedefs/people_type.js';
import { FilmType } from './graphql/typedefs/film_type.js';
import { PlanetType } from './graphql/typedefs/planet_type.js';
import { VehicleType } from './graphql/typedefs/vehicle_type.js';
import { LinksType } from './graphql/typedefs/links_type.js';
import { PaginationType } from './graphql/typedefs/pagination_type.js';
import { FilmResolver } from './graphql/resolvers/film_resolver.js';
import { PlanetResolver } from './graphql/resolvers/planet_resolver.js';
import { VehicleResolver } from './graphql/resolvers/vehicle_type.js';
import { QueryAllResponse } from './graphql/typedefs/response_type.js';

export interface ContextValue {
  dataSources: {
    charactersAPI: SwapiRESTDatasource;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs: mergeTypeDefs([QueryAllResponse, PaginationType, PeopleType, FilmType, PlanetType, VehicleType, LinksType]),
  resolvers: mergeResolvers([FilmResolver, PeopleResolver, PlanetResolver, VehicleResolver]),
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server
    return {
      dataSources: {
        charactersAPI: new SwapiRESTDatasource("https://swapi.dev/api/", { cache })
      }
    }
  }
});

console.log(`🚀  Server ready at: ${url}`);