
export const PlanetType =/*GraphQL */`


type PlanetResponse implements QueryAllResponse
{
    count:Int!
    next:String
    previous:String
    results:[Planet]!
}

    type Planet  {

        name:String!
        rotationPeriod:String!
        orbitalPeriod:String!
        diameter:String!
        climate:String!
        gravity:String!
        terrain:String!
        surfaceWater:String!
        population:String!
        residents:[People]!
        films:[Film]!
        url:String!
    }

    type Query{
        planets(pagination:PaginationInput):PlanetResponse!
        planet(id:String,pagination:PaginationInput):Planet
    }
`