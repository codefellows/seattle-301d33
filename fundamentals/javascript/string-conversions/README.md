# Javascript Strings

## Conversions
  
**Array methods that you can use on strings**
  - string.split()
  - array.join()
  - string.concat()
  - string.replace()
  
```let str = "Code Fellows":```

```str.split()```
Splits a string on the occurrance of a character, returns an array
```
  str.split(' ')
  => ["Code","Fellows"]
```

```
  str.split('')
  => ["C","o","d","e","F","e","l","l","o","w","s"]
```

Once you've split a string, you have an array and then you can "join" it back into a string. Again, use a delimiter. 

e.g. To "Kabob-Case" a phrase:
- Lower Case It
- Split the words into an array (split the phrase on a space)
- Join it back, but use "-" instead of a space
```
  str.toLowerCase().split(' ').join('-')
  => code-fellows
  ```


```string.concat(a,...)```
Use this to easily concatenate strings together.
```
  let firstName = "John";
  let lastName = "Cokos";
  let fullName = firstName.concat(' ', lastName);
  => John Cokos
```


```string.replace(part of the string, with this)```
Replace "part of the string" (which can be found with a regex or raw text) with some new string.

```
  let string = "Code Fellows";
  string.replace("Code", "Bald")
  => Bald Fellows
  
  string.replace(/C/, "N");
  => Node Fellows
  
  string.trim().replace(/^([A-Z]{1})/, (match) => match.toLowerCase());
  => code Fellows
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String