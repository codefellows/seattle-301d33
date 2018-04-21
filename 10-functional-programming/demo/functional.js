// Immutability (Strings, Numbers)
// Declarative vs. Imperative code
// Stateless (pure) functions
// First-class Functions

let counter = 0;

let square = (num) => {
  return num * num;
};

console.log(square(4));
//
let parents = ['john', 'cathy'];
let kids = ['zach', 'allie'];
let pets = ['rocky', 'rosie'];

let family = [].concat(parents,kids, pets);

parents;
kids;
pets;
family;

let a = {
  value:1,
  foo:"bar"
};


let b = {
  value: 2
};

console.log( Array.isArray(family) );
console.log( family.isArray );

let c = Object.assign({}, a, b);

a;
b;
c;





























