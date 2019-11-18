console.log('CLASS');

class Person {
    name: string;
    protected age: number = 27;
    private type: string;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Old guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Jovan', 'jovandanilovic');
console.log(person, person.name);
person.printAge();

//Inheritance

class John extends Person {
    constructor() {
        super('Jovan', 'jovan');
    }
}

const john = new John();
console.log(john);

//Getters & setters
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length < 3) {
            throw new Error('Species too short.');
        }
        this._species = value;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
