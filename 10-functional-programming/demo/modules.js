
(function(module))




let Dog = function(name, breed) {

  this.description = `${name} is a ${breed}`;
  let sound = "bark";
  if ( breed.toLowerCase().includes('terrier') ) { sound = "Squeek"; }

  let speak = console.log('bark');

};

let rosie = new Dog('Rosie', 'Mutt');
rosie;