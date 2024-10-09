export const FilmType=/*GraphQL*/`
scalar Date

type FilmsResponse implements QueryAllResponse
{
    count:Int!
    next:String
    previous:String
    results:[Film]!
}

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

    type Query{
        films(pagination:PaginationInput):FilmsResponse!
        film(id:String,pagination:PaginationInput):Film
    }
`

