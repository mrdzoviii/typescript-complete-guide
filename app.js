"use strict";
//String
var myName = 'Jovan';
//myName = 5;
//number
var myAge = 27;
//myAge='Max'
myAge = 10e5;
//boolean
var hasHobbies = true;
//hasHobbies = 1;
//assign types
var myRealAge;
myRealAge = 5;
//myRealAge='27'
//array
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
var tupples = ['Maglajani', 95];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//enum
var myColor = Color.Green;
console.log(myColor);
//any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
