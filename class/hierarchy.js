class EletronicDispositive {
  constructor(name) {
    this.name = name;
    this.stats = false;
  }

  turnOn() {
    if (this.stats) {
      console.log(`${this.name} já está ligado`);
    }

    this.stats = true;
  }

  shutdown() {
    if (!this.stats) {
      console.log(`${this.name} já está desligado`);
    }
    this.stats = false;
  }
}

class Smartphone extends EletronicDispositive {
  constructor(name, color) {
    // calls the superclass constructor
    super(name);
    this.color = color;
  }

  color() {
    console.log(`a cor do ${this.name} é ${this.color}`);
  }
}

const s1 = new Smartphone('note 10', 'black');
console.log(s1);
