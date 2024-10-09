export const FilmType=/*GraphQL*/`
scalar Date

type Film{
    title:String!
    episodeId:String!
    openingCrawl:String!
    director:String!
    producer:String!
    releaseDate:Date!
    characters:PeopleLink!
    planets:PlanetLink!
    vehicles:VehicleLink!
    url:String!
}

`

