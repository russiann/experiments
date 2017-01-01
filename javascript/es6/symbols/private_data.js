const foo = Symbol('foo');
const bar = Symbol('bar');
const _param = Symbol('param');

class MyClass {

  constructor(param) {
    this[_param] = param;
  }

  [foo]() {
    console.log('I am foo!');
  }

  [bar]() {
    console.log('I am bar!');
  }

  boo() {
    console.log(this[_param]);
    this[foo]();
    this[bar]();
  }
}

const instance = new MyClass('bang!');

instance.boo();

console.log(
  'instance#foo',
  Object.prototype.hasOwnProperty.call(instance, 'foo')
);

console.log(
  'instance#bar',
  Object.prototype.hasOwnProperty.call(instance, 'bar')
);

/*

Pros:
  - We can use prototype methods.
  - The names of private properties can’t clash.

Cons:
  - Code is not as elegant as a naming convention.
  - Not safe: you can list all property keys (including symbols!) of an object via Reflect.ownKeys().

*/
