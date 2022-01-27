//number 1

class Animal {
  constructor(height, name) {
    this.legs = 4;
    this.height = height;
    this.isMammal = true;
    this.name = name;
  }

  get petLegs() {
    return this.legs
  }

  get petHeight() {
    return this.height
  }

  get petType() {
    return this.isMammal
  }

  get petName() {
    return this.name
  }

  set petName(newName) {
    this.name = newName;
  }

  set petLegs(newLegs) {
    this.name = newLegs;
  }

  set petHeight(newHeight) {
    this.name = newHeight;
  }

  set petType(newType) {
    this.name = newType;
  }
}

let myPet = new Animal("50cm", "Cat");

console.log(myPet);

// number 2

class Cat extends Animal {
  constructor(height, name) {
    super(height, name)
    this.isWild = true;
  }

  meow() {
    console.log(
      `${this.name} is crying`
    );
  }
}

let myCat = new Cat("50cm", "Cat")

console.log(myCat);

// number 3

class Dog extends Animal {
  constructor(height, name) {
    super(height, name);
  }

  bark() {
    console.log(
      `${this.name} is crying`
    );
  }
}

let myDog = new Dog("50cm", "Dog")

console.log(myDog);
