interface NamedPerson {
    name: string;
}

console.log('INTERFACES');

function greet(person: NamedPerson): void {
    console.log(`Hello ${person.name}`);
}

const person = {
    name: 'Jovan',
    age: '24',
};
greet(person);
