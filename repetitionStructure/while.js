function aleatoryNumber(min, max) {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

const min = 1;
const max = 10000;
let random = aleatoryNumber(min, max);

while (random !== 18) {
  random = aleatoryNumber(min, max);
  console.log(random);
}

do {
  random = aleatoryNumber(min, max);
  console.log(random);
} while (random === 18);
