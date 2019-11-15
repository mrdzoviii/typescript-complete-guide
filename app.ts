//String
let myName = 'Jovan';
//myName = 5;

//number
let myAge = 27;
//myAge='Max'
myAge = 10e5;

//boolean
let hasHobbies = true;
//hasHobbies = 1;

//assign types
let myRealAge: number;
myRealAge = 5;
//myRealAge='27'

//array
let hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);

let tupples: [string, number] = ['Maglajani', 95];

enum Color {
    Gray,
    Green,
    Blue,
}

//enum
let myColor: Color = Color.Green;
console.log(myColor);

//any

let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

//functions
function getMyName() {
    return myName;
}

console.log(getMyName());

//void
function sayHello(): void {
    console.log('Hello');
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(10, 2));

//function types
let myMultiply: (val1: number, val2: number) => number;
/*myMultiply = sayHello;
myMultiply();*/
myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData: { name: string; age: number } = {
    name: 'Max',
    age: 27,
};
//userData = {};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
    output: function(all: boolean): number[] {
        return this.data;
    },
    data: [100, 3.99, 10],
};

//type alias

type Complex = { data: number[]; output: (all: boolean) => number[] };
let complex2: Complex = {
    output: function(all: boolean): number[] {
        return this.data;
    },
    data: [100, 3.99, 10],
};

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
//myRealRealAge= true;

//check type
let finalValue: string = '30';
console.log(typeof finalValue === 'string');

//never
//never return something
function neverReturns(): never {
    throw new Error('An error!');
}

//nullable
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
canAlsoBeNull = 45;
let canThisBeAny: null | any;
canThisBeAny = 12;

let bindMultiply = multiply.bind(null, 10);
console.log(bindMultiply(20));
