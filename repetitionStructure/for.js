const username = 'Matheus';
const arr = [1, 2, 3, 4];
const people = {
  username: 'matheus',
  email: 'email@email.com',
  password: '123456',
  address: 'address',
};

// for classic
for (let i = 0; arr.length; i++) {
  console.log(arr[i]);
}

//
// for...in
//
for (const number in arr) {
  console.log(arr[number]);
}

for (const p in people) {
  console.log(p, people[p]);
}

//
// for...of
//
for (const letter of username) {
  console.log(letter);
}

//
// BREAK and CONTINUE
// work with FOR FORin FORof WHILE and DO WHILE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  if (number === 3) continue;
  if (number === 5) break;

  console.log(number);
}
