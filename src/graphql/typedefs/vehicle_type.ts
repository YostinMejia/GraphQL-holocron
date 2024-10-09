export const VehicleType =/*GraphQL */`
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
`