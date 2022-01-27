const numbers = [2, 4, 5, 3, 6, 9, 10, 11]

const myFunc = (arr, x) => {
  const remaining = arr.filter(y => y >= x)
  console.log(remaining);

  const sum = remaining.reduce((a, b) => a + b, 0);
  const average = (sum / remaining.length) || 0;

  console.log(average);

}

myFunc(numbers, 5)
