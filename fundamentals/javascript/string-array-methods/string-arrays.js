let text="Code Fellows is a great school";

console.log('length', text.length);

console.log('3rd Char', text[3]);

console.log('Slice between 1 and 3', text.slice(1,3));


console.log('reversed', reverseString(text));
console.log('reversed (cheater version)', reverseStringCheater(text));

function reverseString(str) {
  let newString = '';
  let strAsArray = str.split('');
  for(let i = strAsArray.length-1; i>=0; i--) {
    newString += strAsArray[i];
  }

  return newString;
}

function reverseStringCheater(str) {
  return str.split('').reverse().join('');
}

for(let letter of text) { console.log('letter', letter); }


