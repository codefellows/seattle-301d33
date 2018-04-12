let name = "John Cokos";

// charAt()
// find First or last Char (or anything by any position)
console.log('first: ', name.charAt(0));
console.log('last: ', name.charAt(name.length-1));
console.log('first as array: ', name[0]);
console.log('last as array: ', name[name.length-1]);

// substr()
// pull parts of a string out
console.log('All but the first: ', name.substr(1));
console.log('first 4', name.substr(0,4));

// replace()
// Replacing stuff ... string to string
// This returns a new string, it does not mutate the original
console.log('replace John with Zach: ', name.replace('John', 'Zach'));
console.log('name is ... ', name);

// contains()
// Does a string contain something?
// Returns a boolean
console.log('Has john? ', name.includes('john'));
console.log('Has John? ', name.includes('John'));

// indexOf()
// Where is a thing in a string?
console.log('Where is  John? ', name.indexOf('John'));
console.log('Where is  Cokos? ', name.indexOf('Cokos'));

// endsWith() and startsWith()
// quick boolean checks
console.log('J?', name.startsWith('J'));
console.log('Sanitized check: ', name.trim().toLowerCase().startsWith('J'));
console.log('Sanitized check: ', name.trim().toLowerCase().startsWith('j'));
console.log('Sanitized check: ', name.trim().toLowerCase().startsWith('x'));
