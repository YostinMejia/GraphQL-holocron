import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PeopleResolver } from './graphql/resolvers/people_resolver.js';
import { SwapiRESTDatasource } from './infrastructure/datasources/SwapiRESTDatasource.js';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { PeopleType } from './graphql/typedefs/people_type.js';
import { FilmType } from './graphql/typedefs/film_type.js';
import { PlanetType } from './graphql/typedefs/planet_type.js';
import { VehicleType } from './graphql/typedefs/vehicle_type.js';
import { Links } from './graphql/typedefs/links_type.js';

export interface ContextValue {
  dataSources: {
    charactersAPI: SwapiRESTDatasource;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs: mergeTypeDefs([PeopleType, FilmType, PlanetType, VehicleType, Links]),
  resolvers: mergeResolvers([PeopleResolver]),
  

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