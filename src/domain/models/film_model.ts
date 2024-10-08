
export class FilmModel {
    title: string
    episodeId: string
    openingCrawl: string
    director: string
    producer: string
    releaseDate: Date
    characters: string[]
    planets: string[]
    vehicles: string[]
    url: string

    constructor({
        title,
        episodeId,
        openingCrawl,
        director,
        producer,
        releaseDate,
        characters,
        planets,
        vehicles,
        url, }: {
            title: string
            episodeId: string
            openingCrawl: string
            director: string
            producer: string
            releaseDate: Date
            characters: string[]
            planets: string[]
            vehicles: string[]
            url: string
        }) {

        this.title = title
        this.episodeId = episodeId
        this.openingCrawl = openingCrawl
        this.director = director
        this.producer = producer
        this.releaseDate = releaseDate
        this.characters = characters
        this.planets = planets
        this.vehicles = vehicles
        this.url = url
    }


}