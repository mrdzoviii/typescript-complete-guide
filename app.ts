interface NamedPerson {
    name: string;
    age?: number;

    [propName: string]: any;
}

console.log('INTERFACES');

function greet(person: NamedPerson): void {
    console.log(`Hello ${person.name}`);
}

const person = {
    name: 'John',
    hobbies: ['Cooking', 'Sports'],
};
greet(person);
greet({ name: 'John', age: 25 });
