//let & const
console.log('LET & CONST');
let variable = 'TEST';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

//Block scope
function reset() {
    let variable = null;
    console.log(maxLevels);
    console.log(variable);
}

reset();
console.log(variable);

//Arrow Functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));
const greet = () => console.log('Hello');
const greetFriend = frend => console.log(frend);

//Default parameters
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10): void => {
    console.log('START', start);
    while (start > 0) {
        start--;
    }
    console.log('DONE', start);
};

countdown();

//REST & SPREAD
console.log('REST & SPREAD');
const numbers = [1, 10, 99, -50];
console.log(Math.max(33, 99, 19, -3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
    return args;
}

console.log(makeArray('max', 1, 2, 3));

//Destructuring
console.log('DESTRUCTURING');
const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userDate = { userName: 'Max', age: 27 };
const { userName: myName1, age: myAge1 } = userDate;
console.log(myName1, myAge1);

//Template Literals

const userName = 'Max';
const greeting = `Hi ${userName}`;
