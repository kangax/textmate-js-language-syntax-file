({ if: bar }); // <-- "if" should not be highlighted as reserved word here

({ foo: function foo(){} }); // <-- "foo" before ":" should be highlighted as in `({ foo: function(){} })`

!/^foo$/.test(t); // <-- should highlight regexp literal, just like it does w/o preceding `!`

({ get foo(){ }, set foo(){ } }); // <-- should understand new ES5 accessors syntax (highlight `get` same way as function identifier)

Date.now(); // <-- should highlight `now` just like it highlights `parse` in the same context