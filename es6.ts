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
