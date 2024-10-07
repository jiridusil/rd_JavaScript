//1. Vytvořte funkci transformFahrenheitToCelsius, která přijímá teplotu ve stupních
//      Fahrenheit a vrací ekvivalentní teplotu v stupních Celsius.
//      Vytvořte funkci transformCelsiusToFahrenheit, která provádí opačnou konverzi.

//°F = °C * 9/5 + 32
const transformCelsiusToFahrenheit = (celsiusNumber) => {
    return celsiusNumber * 9 / 5 + 32;
}
//°C = (°F - 32) ÷ (9/5)
const transformFahrenheitToCelsius = (fahrenheitNumber) => {
    return (fahrenheitNumber - 32) / 9 * 5;
}

console.log('Ukol 1:');
console.log(transformCelsiusToFahrenheit(10));
console.log(transformFahrenheitToCelsius(50));

//2. Rest Parametry a Spread Operátor:
//      Napište funkci biggestNumber, která používá rest parametry k přijetí
//      libovolného počtu argumentů a vrací největší z nich.
//      Pomocí spread operátoru spojte dvě pole čísel a použijte funkci
//      biggestNumber pro zjištění největšího čísla v nově vytvořeném poli.

const biggestNumber = (...numbers) => {
    return Math.max(...numbers);
}

console.log('Ukol 2:');
console.log(biggestNumber(4, 44, 0, -12));
console.log(biggestNumber(-2, -4, -11, -12));

//two arrays
const array1 = [1, 20, 3];
const array2 = [4, 5, 6, 22];

console.log(biggestNumber(...array1, ...array2));

//3. Arrow Funkce a Implicitní Return:
//      Přepište obě funkce z prvního úkolu(pro konverzi teplot) jako arrow funkce s
//      implicitním returnem. Odevzdejte na github obě verze.

//arrow function with implicit return
const transformCelsiusToFahrenheit2 = celsiusNumber => celsiusNumber * 9 / 5 + 32;
const transformFahrenheitToCelsius2 = fahrenheitNumber => (fahrenheitNumber - 32) / 9 * 5;

console.log('Ukol 3:');
console.log(transformCelsiusToFahrenheit2(10));
console.log(transformFahrenheitToCelsius2(50));

//4. Funkce Vyššího Řádu:
//      Napište funkci vyššího řádu modifyArray, která přijme pole a transformační
//      funkci jako argumenty. Transformační funkce by měla být aplikována na
//      každý prvek pole a modifyArray by mělo vracet nové pole s transformovanými prvky.

const modifyArray = (array, func) => {
    return array.map(element => func(element));
}

const addTwo = (number) => number + 2;

console.log('Ukol 4:');
console.log(modifyArray([10, 20, 30, -10], addTwo));

//Bonus:
//  Vytvořte 'pipeline' funkci modifyArray, která přijme pole a neomezený počet callbacků, pak
//  aplikuje tyto callbacky na pole v pořadí, ve kterém byly poskytnuty.Každý callback by měl
//  přijímat pole a vracet nové pole.

const pipeline = (array, ...funcs) => {
    return funcs.reduce((acc, func) => func(acc), array);
};

const addTen = array => array.map(element => element + 10);
const multipleTwo = array => array.map(element => element * 2);

console.log('Bonus:');
console.log(pipeline([-10, 0, 10, 20], addTen, multipleTwo));
