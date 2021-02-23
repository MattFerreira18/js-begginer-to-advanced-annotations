const speak(){
  speak() {
    console.log(`Hi ${name} ${lastname}`);
  },
}

const eat() {
  eat() {
    console.log(`${this.name} is eating...`);
  },
}

//v1 => const peoplePrototype = { ...speak, ...eat };
const peoplePrototype = Object.assign({}, speak, eat);

function createPeople(name, lastname) {

  return Object.create(peoplePrototype, {
    name: { value: name },
    lastname: { value: lastname },
  });
}

const p1 = createPeople('matheus', 'ferreira');
p1.speak();
