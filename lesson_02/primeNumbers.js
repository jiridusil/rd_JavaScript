const prompt = require("prompt-sync")();

console.log("Let's calculate prime numbers in a given range.");
const from = prompt("Enter a value from: ");
const to = prompt("Enter a value to: ");

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

if (isNaN(from) || isNaN(to)) {
    console.log("Invalid input. Please enter a number.");
    return;
}

const primeNumbers = findPrimesInRange(from, to);
console.log(primeNumbers);