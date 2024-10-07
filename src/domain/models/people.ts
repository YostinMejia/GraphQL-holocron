import { type People } from "../generated/graphql.js";

export class PeopleModel {
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
    species: any[];
    vehicles: string[];
    starships: string[];
    url: string;

    constructor(json: {
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
        species: any[];
        vehicles: string[];
        starships: string[];
        url: string;
    }) {

        this.name = json.name;
        this.height = json.height;
        this.mass = json.mass;
        this.hairColor = json.hairColor;
        this.skinColor = json.skinColor;
        this.eyeColor = json.eyeColor;
        this.birthYear = json.birthYear;
        this.gender = json.gender;
        this.homeworld = json.homeworld;
        this.films = json.films
        this.species = json.species
        this.vehicles = json.vehicles
        this.starships = json.starships
        this.url = json.url
    }



    toJson():People{
        return {
            name:this.name,
            height:this.height,
            mass:this.mass,
            hairColor:this.hairColor,
            skinColor:this.skinColor,
            eyeColor:this.eyeColor,
            birthYear:this.birthYear,
            gender:this.gender,
            // homeworld:this.homeworld,
            // films:this.films,
            // species:this.species,
            // vehicles:this.vehicles,
            // starships:this.starships,
            url:this.url,
        }
    }
}