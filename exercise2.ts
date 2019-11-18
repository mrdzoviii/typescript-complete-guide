const double: (val: number) => number = (value: number): number => value * 2;
console.log(double(10));
const greetName = (name: string = 'Max') => console.log(`Hello ${name}`);
greetName();
greetName('Anna');

const numbers3 = [-3, 33, 38, 5];
console.log(Math.min(...numbers3));

const newArray = [55, 20];
console.log(newArray.concat(...numbers3));

const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

const scientist = { firstName: 'Will', experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
