import express from "express"
import depthLimit from 'graphql-depth-limit'
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';

import { ApolloServer } from '@apollo/server';
import { PeopleResolver } from './graphql/resolvers/people_resolver.js';
import { SwapiRESTDatasource } from './infrastructure/datasources/SwapiRESTDatasource.js';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { PeopleType } from './graphql/typedefs/people_type.js';
import { FilmType } from './graphql/typedefs/film_type.js';
import { PlanetType } from './graphql/typedefs/planet_type.js';
import { VehicleType } from './graphql/typedefs/vehicle_type.js';
import { PaginationType } from './graphql/typedefs/pagination_type.js';
import { FilmResolver } from './graphql/resolvers/film_resolver.js';
import { PlanetResolver } from './graphql/resolvers/planet_resolver.js';
import { VehicleResolver } from './graphql/resolvers/vehicle_type.js';
import { QueryAllResponse } from './graphql/typedefs/response_type.js';


//TODO implement pagination, authorization 
export interface ContextValue {
  dataSources: {
    charactersAPI: SwapiRESTDatasource;
  };
}

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<ContextValue>({
  typeDefs: mergeTypeDefs([QueryAllResponse, PaginationType, PeopleType, FilmType, PlanetType, VehicleType]),
  resolvers: mergeResolvers([FilmResolver, PeopleResolver, PlanetResolver, VehicleResolver]),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  validationRules: [depthLimit(4)]
})

await server.start();

app.use('/',
  express.json(),

  expressMiddleware(server, {

    context: async () => {
      const { cache } = server
      
      return {
        dataSources: {
          charactersAPI: new SwapiRESTDatasource("https://swapi.dev/api/", { cache })
        }
      }
    },
  }),
);

await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);