class Vehicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

const parts = {
    engine: 100,
    power: 60,
    quality: 600
}

const myVehicle = new Vehicle("Opel", "Vectra", parts, 190)

myVehicle.drive(40)
console.log(myVehicle)
