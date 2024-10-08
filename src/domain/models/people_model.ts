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
    vehicles: string[];
    url: string;

    constructor({ name,
        height,
        mass,
        hairColor,
        skinColor,
        eyeColor,
        birthYear,
        gender,
        homeworld,
        films,
        vehicles,
        url }: {
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
        }) {

        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.birthYear = birthYear;
        this.gender = gender;
        this.homeworld = homeworld;
        this.films = films
        this.vehicles = vehicles
        this.url = url
    }

}