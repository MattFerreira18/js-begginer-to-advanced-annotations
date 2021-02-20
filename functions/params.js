function a(param = 'parameter') {
  // default param
  // your code
}

function b() {
  console.log(arguments); // return a obj with arguments
}

b(1, 3, 4);

//
// destructuring assignment
//
function c({ name, lastname, age }) {
  // your code
}

const people = {
  name: 'Matheus',
  lastname: 'Ferreira',
  age: 17,
};

c(people);

function d([a, b, c]) {
  // your code
}

const arr = [1, 2, 3, 4, 5, 6];

d(arr);

//
//  rest operator
//
function e(a, b, ...c) {
  // c => [3,4,5,6]
}

e(arr);
