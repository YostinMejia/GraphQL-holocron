
export const PeopleType = /*GraphQL*/`

type PeopleResponse implements QueryAllResponse{
    count:Int!
    next:String
    previous:String
    results:[People]!
}

type People{
    name: String!
    height:String!
    mass:String!
    hairColor:String!
    skinColor:String!
    eyeColor:String!
    birthYear:String!
    gender:String!
    homeworld: Planet!
    films:FilmLink!
    vehicles:VehicleLink!
    url:String!
}

type Query{
    people(pagination:PaginationInput):PeopleResponse!,
    person(id:String, pagination:PaginationInput):People
}

`


