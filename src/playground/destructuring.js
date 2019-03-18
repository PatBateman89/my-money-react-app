// Object destructering

// const person = {
//   name: 'Eric',
//   age: 30,
//   location: {
//     city: 'Seoul',
//     temp: 55
//   }
// }
//
// const { name: firstName = 'Anonymous', age } = person
// const {location} = person
//
// // const name = person.name
// // const age = person.age
//
// console.log(`${firstName} is ${age}.`)
//
// const {city, temp: temperature} = person.location
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }



// Array destructering


// const address = ['1299 S Juniper', 'Miami', 'Florida', '12345'];
//
// const [street, city, state, zip] = address;
//
// console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '2.50', '$2.75']

const [ coffee, small, medium, large] = item;

console.log(`A medium ${coffee} is ${medium}`)
