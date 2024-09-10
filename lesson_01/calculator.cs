let a = 5;
let b = 2;
let c = 0;

function subscract(a, b)
{
    return a - b;
}

function add(a, b)
{
    return a + b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

console.log(`a = ${a}, b = ${b}`)
console.log('a + b = ' + add(a, b));
console.log('a - b = ' + subscract(a, b));
console.log('a * b = ' + multiply(a, b));
console.log('a / b = ' + divide(a, b));
console.log(`Deleni nulou: a = ${a}, c = ${c}`)
console.log('a / c = ' + divide(a, c));