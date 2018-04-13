# Javascript Strings

## Strings as Arrays
  
**Array methods that you can use on strings**
  - string.length (#)
  - string[#]  (new str)
  - string.slice (new str)


```let text="Code Fellows is a great school"```

.length - Returns the length (# of chars) in a string
```text.length // 30 ```

string[#] ... pull a character from a specific index (zero based)
```text.[3] // e```

.slice(start, end) ... pulls a group of characters from start to end (inclusive)
```text.slice(1,3) // od```


Because strings can be (kinda) seen as arrays, you can iterate them.

```for(let letter of text) { console.log(letter); }```

```
for(let i=0; i<text.length; i++) { 
  console.log(text[i];
}

```


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String