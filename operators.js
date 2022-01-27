let ageLimit = 18;

const canUserDrink = (age) => {
  if (age >= ageLimit) {
    console.log("User can drink alcohol");

  } else {
    console.log("User is too young to drink alcohol");

  }
}

canUserDrink(22)



const checkWord = (word) => {
  if (word.length % 7 === 0) {
    console.log(word.length);
  } else if (word.length % 3 === 0) {
    console.log(word.length / 2);
  } else if (word.length % 4 === 0) {
    console.log(word.length / 4);
  } else {
    console.log("Impossible");
  }
}

checkWord("Lilibel")
