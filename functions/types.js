// Closures => ability to access another lexical scopes
function a() {
  return function () {
    // your code
  };
}

//
// IIFE => immediately invoked function expression
// used to not use global scope
(function () {
  // your code
})();

//
// Callbacks => used in functions that have waiting time
// can be replaced by promises
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return num;
}

function f1(callback) {
  setTimeout(() => {
    console.log('f1');
  }, rand());

  if (callback) callback();
}

function f2(callback) {
  setTimeout(() => {
    console.log('f2');
  }, rand());

  if (callback) callback();
}

function f3(callback) {
  setTimeout(() => {
    console.log('f3');
  }, rand());

  if (callback) callback();
}

// callback hell's
f1(() => {
  f2(() => {
    f3();
  });
});

//
// factory function
// used to create objects
function createPeople(name, lastname) {
  return {
    name,
    lastname,
    completeName() {
      return `${name} ${lastname}`;
    },
  };
}

const p1 = createPeople('user', 'reus');

//
// constructor functions
// uses this and new
function People(name, lastname) {
  // public
  this.name = name;
  this.lastname = lastname;

  // private
  const id = 1234;
}

const p2 = new People('user', 'reus');

//
// recursive functions
function recursive(max) {
  if (max >= 10) return;
  console.log(max);
  ma++;
  recursive(max);
}

recursive(0);

//
// generating functions
function* generateOne() {
  // yield is similar to return
  yield 'value one';
  yield 'value two';
  yield 'value three';
}
const gOne = generateOne();
// value: 'value...', 'done: true/false'
// pause the function
console.log(gOne.next());
console.log(gOne.next().value);
console.log(gOne.next().done);

function* generateTwo() {
  yield 0;
  yield 1;
  yield 2;
}

// delegation
function* generateThree() {
  yield* generateTwo();
  yield 3;
  yield 4;
}

const g3 = generateThree();

for (const value of g3) {
  console.log(value);
}
