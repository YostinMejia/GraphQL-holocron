import { DataSourceConfig, RESTDataSource } from "@apollo/datasource-rest";
import { IFilm, IPerson, IPlanet, IVehicle } from "../../domain/types/types.js";

export interface ApiResponse<T> {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
}

export type results = PeopleApi | StarshipApi | FilmApi | PlanetApi | VehicleApi

export interface PeopleApi {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface StarshipApi {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface FilmApi {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface PlanetApi {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface VehicleApi {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export class SwapiRESTDatasource extends RESTDataSource {

    constructor(baseUrl: string, config: DataSourceConfig) {
        super(config);
        this.baseURL = baseUrl;
    }

    async fetchAllPeople(path: string): Promise<ApiResponse<IPerson>> {
        const response = await this.get<ApiResponse<PeopleApi>>(path);
        return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map((person) => {
                return {
                    name: person.name,
                    height: person.height,
                    mass: person.mass,
                    hairColor: person.hair_color,
                    skinColor: person.skin_color,
                    eyeColor: person.eye_color,
                    birthYear: person.birth_year,
                    gender: person.gender,
                    homeworld: person.homeworld,
                    films: person.films,
                    vehicles: person.vehicles,
                    url: person.url
                }
            })
        }
    }

    async getPersonById(path: string): Promise<IPerson | null> {
        const person = await this.get<PeopleApi>(path)
        
        return person ? {
            name: person.name,
            height: person.height,
            mass: person.mass,
            hairColor: person.hair_color,
            skinColor: person.skin_color,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
            gender: person.gender,
            homeworld: person.homeworld,
            films: person.films,
            vehicles: person.vehicles,
            url: person.url,
        } : null;
    }

    async fetchAllPlanets(path: string): Promise<ApiResponse<IPlanet>> {
        const response = await this.get<ApiResponse<PlanetApi>>(path);
        return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map((planet) => {
                return {
                    name: planet.name,
                    rotationPeriod: planet.rotation_period,
                    orbitalPeriod: planet.orbital_period,
                    diameter: planet.diameter,
                    climate: planet.climate,
                    gravity: planet.gravity,
                    terrain: planet.terrain,
                    surfaceWater: planet.surface_water,
                    population: planet.population,
                    residents: planet.residents,
                    films: planet.films,
                    url: planet.url,
                }
            })
        }
    }

    async getPlanetById(path: string): Promise<IPlanet | null> {
        const planet = await this.get<PlanetApi>(`${path}`)
        return planet ? {
            name: planet.name,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water,
            population: planet.population,
            residents: planet.residents,
            films: planet.films,
            url: planet.url,
        } : null;
    }

    async fetchAllFilms(path: string): Promise<ApiResponse<IFilm>> {
        const response = await this.get<ApiResponse<FilmApi>>(path);
        return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map((film) => {
                return {

                    title: film.title,
                    episodeId: film.episode_id,
                    openingCrawl: film.opening_crawl,
                    director: film.director,
                    producer: film.producer,
                    releaseDate: film.release_date,
                    characters: film.characters,
                    planets: film.planets,
                    vehicles: film.vehicles,
                    url: film.url,


                }
            })
        }
    }

    async getFilmById(path: string): Promise<IFilm | null> {
        const film = await this.get<FilmApi>(`${path}`)
        return film ? {
            title: film.title,
            episodeId: film.episode_id,
            openingCrawl: film.opening_crawl,
            director: film.director,
            producer: film.producer,
            releaseDate: film.release_date,
            characters: film.characters,
            planets: film.planets,
            vehicles: film.vehicles,
            url: film.url,

        } : null;
    }

    async fetchAllVehicles(path: string): Promise<ApiResponse<IVehicle>> {
        const response = await this.get<ApiResponse<VehicleApi>>(path);
        return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map((vehicle) => {
                return {
                    name: vehicle.name,
                    model: vehicle.model,
                    manufacturer: vehicle.manufacturer,
                    costInCredits: vehicle.cost_in_credits,
                    length: vehicle.length,
                    maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
                    crew: vehicle.crew,
                    passengers: vehicle.passengers,
                    cargoCapacity: vehicle.cargo_capacity,
                    consumables: vehicle.consumables,
                    vehicleClass: vehicle.vehicle_class,
                    pilots: vehicle.pilots,
                    films: vehicle.films,
                    url: vehicle.url,
                }
            })
        }
    }

    async getVehicleyId(path: string): Promise<IVehicle | null> {
        const vehicle = await this.get<VehicleApi>(`${path}`)
        return vehicle ? {
            name: vehicle.name,
            model: vehicle.model,
            manufacturer: vehicle.manufacturer,
            costInCredits: vehicle.cost_in_credits,
            length: vehicle.length,
            maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
            crew: vehicle.crew,
            passengers: vehicle.passengers,
            cargoCapacity: vehicle.cargo_capacity,
            consumables: vehicle.consumables,
            vehicleClass: vehicle.vehicle_class,
            pilots: vehicle.pilots,
            films: vehicle.films,
            url: vehicle.url,
        } : null;
    }
}
