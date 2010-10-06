({ if: bar }); // <-- "if" should not be highlighted as reserved word here

({ get foo(){ }, set foo(){ } }); // <-- should understand new ES5 accessors syntax (highlight `get` same way as function identifier)

var foo = function bar(){ }; // <-- foo and bar should be highlighted identically