### Enhancements

- Fixes matching of numeric literals with exponents
        
        123e-12;
        -5.673E+290;

- Highlights function identifiers in named function expressions

        ({ foo: function bar(){ } }); // "foo" and "bar" are highlighted identically

- Adds missing ES5 built-ins
      
        JSON.stringify(); // JSON is highlighted
  
- Adds missing ES5 array methods

        [].map(function(){ });
        [].filter(function(){ }); // map, filter, etc. are highlighted

- Adds missing Object.prototype.* methods

        ({}).hasOwnProperty('foo'); // hasOwnProperty is highlighted

- Adds missing console.* methods
    
        console.profile(); // profile should be highlighted