const peoples = [
  { id: 1, name: 'user1' },
  { id: 3, name: 'user2' },
  { id: 2, name: 'user3' },
];

// const newPeoples = {}
// for (const { id, name } of peoples) {
//   newPeoples[id] = { id, name };
// }

const newPeoples = new Map();

for (const { id, name } of peoples) {
  newPeoples.set(id, { id, name });
}

console.log(newPeoples);
