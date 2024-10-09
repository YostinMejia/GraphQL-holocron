export const Links = /*GraphQl */`
    interface ILink{
        totalCount: Int!
    }


type PeopleLink implements ILink{
    totalCount: Int!
    results: [People]!
}

type FilmLink implements ILink{
    totalCount: Int!
    results: [Film]!
}

type VehicleLink implements ILink{
    totalCount: Int!
    results: [Vehicle]!
}

type PlanetLink implements ILink{
    totalCount: Int!
    results: [Planet]!
}
`
