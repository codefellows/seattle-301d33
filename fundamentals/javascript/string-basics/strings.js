// this creates a more primitive string.
// You get all of the "goodness" of a proper string object (below)
// but you don't have to create it that way and manage it.
// ths just makes it easy for you to jump in and do the
let name = "John";
console.log(name);

// This creates a proper JS object with obvious access to it's
// properties and methods.  Do this in your console. and log it
// out directly and you can browse it.
let objectifiedName = new String("John");
console.log(objectifiedName);


// All of the methods work the same regardless of how you create the string.

console.log( "length", name.length );
console.log( "toString", name.toString() );
console.log( "valueOf", name.valueOf() );

console.log( name.charAt(0) );
console.log( name.substr(1) );

console.log( name[0].toUpperCase() );

console.log( name.padEnd(name.length+1, ' ').padEnd(100,'.') );



console.log( "length", objectifiedName.length );
console.log( "toString", objectifiedName.toString() );
console.log( "valueOf", objectifiedName.valueOf() );

console.log( objectifiedName.charAt(0) );
console.log( objectifiedName.substr(1) );

console.log( objectifiedName[0].toUpperCase() );

console.log( objectifiedName.padEnd(objectifiedName.length+1, ' ').padEnd(100,'.') );

