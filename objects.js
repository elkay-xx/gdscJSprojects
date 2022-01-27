let object = {
  name: "Lilibel",
  email: "lilibelkosiso@gmail.com",
  printName: function () {console.log(this.name)},
  printEmail: function () {console.log(this.email)},
  addKey: function (key, value) {
    this[key] = value;
  }
}

object.addKey('age', 18);

console.log(object);
