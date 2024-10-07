import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PeopleResolver } from './graphql/resolvers/people_resolver.js';
import { readFileSync } from 'fs';
import { SwapiRESTDatasource } from './infrastructure/datasources/SwapiRESTDatasource.js';


export interface ContextValue {
  dataSources: {
    charactersAPI: SwapiRESTDatasource;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs: readFileSync("./src/graphql/schemas/people_schema.graphql",{encoding: "utf-8"}),
  resolvers: PeopleResolver
})


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context:async()=>{
    const {cache} = server
    return {
      dataSources:{
        charactersAPI: new SwapiRESTDatasource("https://swapi.dev/api/",{cache})
      }
    } 
  }
});

console.log(`🚀  Server ready at: ${url}`);

