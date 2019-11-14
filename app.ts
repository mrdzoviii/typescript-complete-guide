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
