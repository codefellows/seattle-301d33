# Javascript Strings

## Bits and Pieces
  
  - charAt (new str)
  - subStr (new str)
  - replace (new str)
  - includes (bool)
  - indexOf (#)
  - endsWith (bool)
  - startsWith (bool)
  
  
```let text="Code Fellows is a great school"```

charAt(): Find the character at a specified positionin the string.
```text.charAt(0)```
```text.charAt(text.length-1)```

substr() ... find a subset of the string given a starting and ending point
```text.substr(1)```
Finds all characters after the first
```text.substr(0,4)```
Finds the 4 characters starting at position 0


replace(): Replace specific text within a string
*returns a new string, it does not mutate the original*
```text.replace('Code', 'Food')```

contains(): Does a string contain a value?
*Returns a boolean*
```text.includes("Code") // true```
```text.includes("Fred") // false```

indexOf(): returns the index of the first occurrance of text in a string
```text.indexOf('Code') // 0```
```text.indexOf('Fellows') // 4```

endsWith() and startsWith(): Simple boolean check on a string's contents
```text.startsWith('C') // true```

    
Full String Documentation at Moz 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String