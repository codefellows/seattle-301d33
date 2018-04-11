let names = ["John", "Cathy", "Allie"];

for( let i = 0; i < names.length; i++ ) {
  console.log(i, names[i]);
}

names.forEach( function(val, i) {
  console.log(i, val);
});