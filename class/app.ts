console.log('CLASS');

class Person {
    name: string;
    protected age: number;
    private type: string;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person('Jovan', 'jovandanilovic');
console.log(person, person.name);
