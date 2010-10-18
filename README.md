### What changed?

- Fixes highlighting of numeric literals with exponents
        
        123e-12;
        -5.673E+290;

- Highlights function identifiers in named function expressions

        ({ foo: function bar(){ } }); 
        var foo = function bar(){ }; // "foo" and "bar" are highlighted identically

- Adds missing ES5 built-ins
      
        JSON.stringify(); // `JSON` is highlighted
        Date.now(); // `now` is highlighted
        encodeURIComponent(); // `encodeURIComponent` is highlighted
  
- Adds missing ES5 array methods

        [].map(function(){ });
        [].filter(function(){ }); // map, filter, etc. are highlighted

- Adds missing Object.prototype.* methods

        ({}).hasOwnProperty('foo'); // hasOwnProperty is highlighted

- Adds missing ES5 Object.* methods
        
        Object.getPrototypeOf(); // getPrototypeOf is highlighted
        Object.seal(); // seal is highlighted

- Adds missing console.* methods
    
        console.profile(); // profile is highlighted
        console.debug(); // debug is highlighted

- Fixes regexp literals matching (when they are preceded with !, +, -, etc.)

        !/^foo.bar/.test('foo'); // literal is highlghted

    
- Highlights ES5 accessors similar to functions
    
        ({ get foo() { }, set foo(value) { } });


### How to install

1. Go to "Bundles" &rarr; "Bundle Editor" &rarr; "Edit Languages". Choose "JavaScript" language.
2. Replace the existing content with that from JavaScript.plist from this repository.

**Note**

This is most definitely a poor man way to replace the language file, but I had problems with Textmate recognizing language file when simply replacing original JavaScript.plist with the one from this repository. If anyone knows how to solve this, I'd love to hear it.

### Known limitations (future fixes):

- Identifiers can not contain unicode escape sequences (e.g. `function \u0500(){ }`)
- Certain productions are not newlines-friendly (e.g. `function \n foo(){}` doesn't match function declaration yet)
- ES5 accessors can not have numeric or string literals as identifiers (will fix)