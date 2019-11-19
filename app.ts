interface NamedPerson {
    name: string;
    age?: number;

    greet(lastName: string): void;

    [propName: string]: any;
}

console.log('INTERFACES');

function greet(person: NamedPerson): void {
    console.log(`Hello ${person.name}`);
    console.log(person.greet('MAXX'));
}

const person = {
    name: 'John',
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log(`Hi, I am ${name} ${lastName}`);
    },
};
greet(person);
greet({
    name: 'John',
    age: 25,
    greet(lastName: string) {
        console.log(`Hi, I am ${name} ${lastName}`);
    },
});

class Person implements NamedPerson {
    constructor(public name: string) {}

    greet(lastName: string) {
        console.log(lastName);
    }
}

const myPerson = new Person('Jovan');
greet(myPerson);

//Function types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

const myDoubleFunction: DoubleValueFunc = function(
    number1: number,
    number2: number
) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(2, 10));

//Interface inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 25,
    name: 'Max',
    greet(lastName: string): void {
        console.log(lastName);
    },
};
console.log(oldPerson);
