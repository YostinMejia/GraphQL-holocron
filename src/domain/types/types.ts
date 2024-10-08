export interface IPerson {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
    homeworld: string;
    films: string[];
    vehicles: string[];
    url: string;
}

export interface IVehicle{
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    maxAtmospheringSpeed: string;
    crew: string;
    passengers: string;
    cargoCapacity: string;
    consumables: string;
    vehicleClass: string;
    pilots: string[];
    films: string[];
    url: string;
}

export interface IPlanet{
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

}

export interface IFilm{
    title: string
    episodeId: number
    openingCrawl: string
    director: string
    producer: string
    releaseDate: Date
    characters: string[]
    planets: string[]
    vehicles: string[]
    url: string

}