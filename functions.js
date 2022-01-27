const fizzbuzz = (a, b) => {
  for (let i = 1; i < 101; i++) {
    if (i % (a*b) === 0) console.log("FizzBuzz");
    else if (i % a === 0) console.log("Fizz");
    else if (i % b === 0) console.log("Buzz");
    else console.log(i);
}
}

fizzbuzz(4, 5)
