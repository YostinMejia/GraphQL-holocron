export const VehicleType =/*GraphQL */`


type VehicleResponse implements QueryAllResponse
{
    count:Int!
    next:String
    previous:String
    results:[Vehicle]!
}


type Vehicle{

    name:String!
    model:String!
    manufacturer:String!
    costInCredits:String!
    length:String!
    maxAtmospheringSpeed: String!
    crew:String!
    passenger:String!
    cargoCapacity:String!
    consumables:String!
    vehicleClass:String!
    pilots:PeopleLink!
    films:FilmLink!
    ulr:String!
}

    type Query{
        vehicles(pagination:PaginationInput):VehicleResponse!
        vehicle(id:String,pagination:PaginationInput):Vehicle
    }
`