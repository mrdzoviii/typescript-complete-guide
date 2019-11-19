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
