
export const PeopleType = /*GraphQL*/`
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
    films:[Film]!
    vehicles:[Vehicle]!
    url:String!
}

type Query{
    people:[People]!,
    person(id:String):People
}
`


