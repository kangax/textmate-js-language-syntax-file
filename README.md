### Enhancements

- Fixes matching of numeric literals with exponents
        
        123e-12;
        -5.673E+290;

- Highlights function identifiers in named function expressions

        ({ foo: function bar(){ } }); 
        var foo = function bar(){ }; // "foo" and "bar" are highlighted identically

- Adds missing ES5 built-ins
      
        JSON.stringify(); // JSON is highlighted
        Date.now(); // now is highlighted
  
- Adds missing ES5 array methods

        [].map(function(){ });
        [].filter(function(){ }); // map, filter, etc. are highlighted

- Adds missing Object.prototype.* methods

        ({}).hasOwnProperty('foo'); // hasOwnProperty is highlighted

- Adds missing console.* methods
    
        console.profile(); // profile is highlighted

- Fixes regexp literals matching (when they are preceded with !, +, -, etc.)

        !/^foo.bar/.test('foo'); // literal is highlghted

    
- Highlights ES5 accessors similar to functions
    
        ({ get foo() { }, set foo(value) { } });


### Known limitations:

- Identifiers can not contain unicode escape sequences (e.g. `function \u0500(){ }`)
- Certain productions are not newlines-friendly (e.g. `function \n foo(){}` doesn't match function declaration yet)


### TODO:

    // "if" should not be highlighted as a reserved word here (or should it?)
    ({ if: bar });