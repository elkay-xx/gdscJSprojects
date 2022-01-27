const input = ["buses", "bees", "happy", "engaged", "destroy"]

const myFunc = (arr, myChar) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const strCopy = arr[i].split("")
    const splitStr = strCopy.filter (y => y !== myChar)

    result.push(splitStr.join(""));
  }

  console.log(result);
}

myFunc(input, "e")
