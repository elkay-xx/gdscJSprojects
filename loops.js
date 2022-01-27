let a = 97;
var myObj = {};
const myFunc = (obj) => {
  for (let i = 0; i < 26; i++)
    obj[String.fromCharCode(a + i)] = i + 1

    for (let x in obj) {
      console.log(x);
    }

    for (const [, value] of Object.entries(obj)) {
      console.log(value);
    }
}
console.log(myFunc(myObj));
console.log(myObj);
