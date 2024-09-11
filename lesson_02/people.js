const people = [];

for (let i = 0; i < 10; i++) {
    const person = {
        name: `Person ${i + 1}`,
        age: generateRandomAge(),
        address: {
            street: `Street ${i + 1}`,
            houseNumber: `${i + 1}`,
            city: `Praha ${i + 1}`,
            zip: `${i + 1}${i + 1}0 00`
        }
    };

    people.push(person);
}

// console.log('People:');
// console.log(people);

function generateRandomAge() {
    return Math.floor(Math.random() * 50) + 10;
}

const filteredPeople = people.filter((person) => person.age > 30);

// console.log('Filtered people older than 30:');
// console.log(filteredPeople);

for (person in filteredPeople) {
    console.log(`${filteredPeople[person].name} bydli ve meste ${filteredPeople[person].address.city}`);
}
