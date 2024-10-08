export class VehicleModel {
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

    constructor({
        name,
        model,
        manufacturer,
        costInCredits,
        length,
        maxAtmospheringSpeed,
        crew,
        passengers,
        cargoCapacity,
        consumables,
        vehicleClass,
        pilots,
        films,
        url,
    }: {
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
    }) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.costInCredits = costInCredits;
        this.length = length;
        this.maxAtmospheringSpeed = maxAtmospheringSpeed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargoCapacity = cargoCapacity;
        this.consumables = consumables;
        this.vehicleClass = vehicleClass;
        this.pilots = pilots;
        this.films = films;
        this.url = url;
    }


}