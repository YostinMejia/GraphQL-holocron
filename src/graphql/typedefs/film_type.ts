export const FilmType=/*GraphQL*/`
scalar Date

type Film{
    title:String!
    episodeId:String!
    openingCrawl:String!
    director:String!
    producer:String!
    releaseDate:Date!
    characters:[People]!
    planets:[Planet]!
    vehicles:[Vehicle]!
    url:String!
}

`

