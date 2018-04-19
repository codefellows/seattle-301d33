let people = ["John", "Jason", "Josie", "Jim"];
let aPerson = {
  first: "John",
  last: "Cokos"
}

// indexOf
// console.log( people.indexOf('Josie') );
// console.log( people.indexOf('Fred') );


// // includes
// console.log( people.includes('Josie') );
// console.log( people.includes('Fred') );
// console.log( people.includes('') );

// every
// console.log(
//     people.every( person => person.startsWith('j') )
// );

// console.log(
//     people.every (function(person) {
//         return person.length >6;
//     })
// );

// forEach
// people.forEach( (person,i) => {
//     console.log(person);
//     console.log(people[i+1]);
// });

// people.forEach( function checkOnThe(person) {
// });

// for( let i=0; i<people.length; i++ ) {
//     let person = people[i];
//     let fail = doSomethingAweseom(person);
//     if ( fail ) { break; }
// }

// for(in)
// for( let i in people ) {
//     console.log('in', i);
// }

// for( let i in aPerson ) {
//     console.log('in', i, aPerson[i]);
// }

// for(of)
// for( let person of people ) {
//     console.log('of', person);
// }

// entries

let iterator = people.entries();
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );







