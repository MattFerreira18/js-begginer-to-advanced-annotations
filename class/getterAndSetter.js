// generate a aleatory number
const _velocity = Symbol();

class Car {
  constructor(name, maxVelocity) {
    this.name = name;
    this.maxVelocity = maxVelocity;
    // "private" - set an max value
    this[_velocity] = 0;
  }

  set velocity(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_velocity] = value;
  }

  get velocity() {
    return this[_velocity];
  }

  speedUp() {
    if (this[_velocity] > this.maxVelocity) return;
    this[_velocity]++;
  }

  breaking() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  }
}

const c1 = new Car('fusca', 120);

for (let i = 0; i < 120; i++) {
  c1.speedUp();
  console.log(c1.velocity);
}

c1.velocity = 1400;
console.log(c1);
