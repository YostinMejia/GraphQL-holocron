import { DataSourceConfig, RESTDataSource } from "@apollo/datasource-rest";
import { PeopleModel } from "../../domain/models/people.js";
import path from "path";

export interface ApiResponse<T extends results> {
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

    // Fetch and map People data to PeopleModel
    async fetchAllPeople(path:string): Promise<PeopleModel[]> {
        const response = await this.get<ApiResponse<PeopleApi>>(path);
        return response.results.map(person => this.parsePeople(person));
    }

    // Fetch by ID and map to PeopleModel
    async getPeopleById(path:string,id: string): Promise<PeopleModel | null> {
        const person = await this.get<PeopleApi>(`${path}/${encodeURIComponent(id)}`);
        return person ? this.parsePeople(person) : null;
    }

    // Parse People API response into a domain model
    parsePeople(person: PeopleApi): PeopleModel {
        return new PeopleModel({
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
            species: person.species,
            vehicles: person.vehicles,
            starships: person.starships,
            url: person.url,
        });
    }

}
