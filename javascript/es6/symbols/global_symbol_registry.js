
// creating a normal Symbol
const a = Symbol('bar');
const b = Symbol('bar');

// normal Symbols are ever unique
console.log(a === b); // false;

// creating a global Symbol
const x = Symbol.for('z');
const y = Symbol.for('z');

// global Symbols are not unique
console.log(x === y); // true

// Symbol.keyFor()
const localFooSymbol = Symbol('foo');
const globalFooSymbol = Symbol.for('foo');

console.log(Symbol.keyFor(localFooSymbol) === undefined); // true
console.log(Symbol.keyFor(globalFooSymbol) === 'foo'); // true
console.log(Symbol.for(Symbol.keyFor(globalFooSymbol)) === Symbol.for('foo')); // true
