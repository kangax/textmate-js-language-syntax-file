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