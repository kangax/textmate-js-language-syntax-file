/* These array methods should all be highlighted */

[].concat()
[].join()
[].pop()
[].push()
[].reverse()
[].shift()
[].slice()
[].indexOf()
[].lastIndexOf()
[].every()
[].some()
[].forEach()
[].map()
[].filter()
[].reduce()
[].reduceRight()

/* JSON should be highlighted */

JSON.stringify()

/* These should all be highlighted as literals */

1.23e12
-435.12
-9e99
8e-4567
12E-13
13E14
1e+2
23.12e-2347

/* These `console` methods should all be highlighted */

console.warn
console.info
console.log
console.error
console.time
console.timeEnd
console.assert
console.profile
console.debug

/* These `Object.prototype.*` methods should all be highlighted */

({}).toString()
({}).toLocaleString()
({}).valueOf()
({}).hasOwnProperty()
({}).isPrototypeOf()
({}).propertyIsEnumerable()

/* "foo" and "bar" should be highlighted identically */

({ foo: function bar(){ } });
var foo = function bar(){ };

/* Date methods shold all be highlighted */

Date.parse();
Date.UTC();
Date.now();

/* These regular expression literals should all be highlighted identically */

!/x/
1,/x/
+/x/
-/x/
(/x/)

/* ES5 accessors should be highlighted similar to functions */

({ get foo(){ }, set foo(){ } });

({
  get _$565656 (foo, bar, baz) { },
  x: 25,
  y: null,
  set asas_asasas() {
    /* ... */
  }
});