let composerComplicated = (fn, defaults) => (args) => fn(defaults,args);

let composer = function(fn, defaults) {
  return function(args) {
    return fn(defaults,args);
  }
}

let sayHelloTo = composer(console.log, "Hello");

sayHelloTo("John");