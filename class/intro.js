class People {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  speak() {
    console.log(`${this.firstname} is speaking`);
  }

  eat() {
    console.log(`${this.firstname} is eating`);
  }
}

const p1 = new People('Matheus', 'Ferreira');
console.log(p1);
p1.speak();
p1.eat();
