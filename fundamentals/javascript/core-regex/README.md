# Regular Expressions

At their core, regex allows you to match strings within a string

- Expressions are declared within a starting and ending delimiter, typically "//"

- Expressions can be grouped

- Expressions can be blocked


## Some Examples:

# Find all lowercase letters
```/[a-z]```

# Find all letters
```/[a-zA-Z]```

# Find all odd numbers 
```/[13579]```

# Find all alphanumerics
```/[a-zA-Z0-9]```

```
let nums = [12345749352134, 123457753425, 123465321];

function insertDashes(num) { 
    return num.toString().replace(/([13579])(?=[13579])/g,"$1(hasanoddnumberafterit)");
}

for(let num of nums) { 
    console.log(insertDashes(num) );
}

```
    
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
