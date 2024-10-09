export const LinksType = /*GraphQl */`
    interface ILink{
        count: Int!
    }

type PeopleLink implements ILink{
    count: Int!
    results: [People]!
}

type FilmLink implements ILink{
    count: Int!
    results: [Film]!
}

type VehicleLink implements ILink{
    count: Int!
    results: [Vehicle]!
}

type PlanetLink implements ILink{
    count: Int!
    results: [Planet]!
}
`
