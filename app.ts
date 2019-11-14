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
