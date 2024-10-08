
export const PlanetType =/*GraphQL */`

    type Planet {

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
`