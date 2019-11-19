//Generics
console.log('GENERICS');

function echo(data: any) {
    return data;
}

console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Jovan', age: 24 }));

//Better generic way

function betterEcho<T>(data: T): T {
    return data;
}

console.log(betterEcho('max').length);
console.log(betterEcho(27).toPrecision(8));

//Built-in generics

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-15.05);
