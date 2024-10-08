
export class PlanetModel {
    name: string
    rotationPeriod: string
    orbitalPeriod: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surfaceWater: string
    population: string
    residents: string[]
    films: string[]
    url: string

    constructor({
        name,
        rotationPeriod,
        orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surfaceWater,
        population,
        residents,
        films,
        url,
    }: {
        name: string
        rotationPeriod: string
        orbitalPeriod: string
        diameter: string
        climate: string
        gravity: string
        terrain: string
        surfaceWater: string
        population: string
        residents: string[]
        films: string[]
        url: string
    }) {

        this.name = name
        this.rotationPeriod = rotationPeriod
        this.orbitalPeriod = orbitalPeriod
        this.diameter = diameter
        this.climate = climate
        this.gravity = gravity
        this.terrain = terrain
        this.surfaceWater = surfaceWater
        this.population = population
        this.residents = residents
        this.films = films
        this.url = url
    }


}