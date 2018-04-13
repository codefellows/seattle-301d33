function foo(prop) {
  return prop;
}

let foo2 = function(prop) {
  return prop;
}

let foo3 = prop => prop;
console.log(foo3("Bar 3"));

let foo4 = (prop) => prop;
console.log(foo4("Bar 4"));

let foo5 = (prop) => {
  let x = prop + "----";
  return x;
}
console.log(foo5("Bar 5"));

// jQuery Examples

// $('div').on('click', ()=> {
//   console.log(this); // error this is not defined;
// });
//
// $('div').on('click', function() {
//   console.log(this);
// });

// $('div').on('click', doSomethingCool);
// function doSomethingCool() { return x; }
// let doSomethingCool = () => x;


let add = (a,b) => a+b;

console.log(add(1,3));

