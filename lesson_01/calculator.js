const a = 5;
const b = 2;
const c = 0;
const d = 2.3;

function subscract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(`a = ${a}, b = ${b}`)
console.log('a + b = ' + add(a, b));
console.log('a - b = ' + subscract(a, b));
console.log('a * b = ' + multiply(a, b));
console.log('a / b = ' + divide(a, b));
console.log(`Deleni nulou: a = ${a}, c = ${c}`)
console.log('a / c = ' + divide(a, c));
console.log(`Desetinne cislo: a = ${a}, c = ${d}`)
console.log('a / d = ' + divide(a, d));