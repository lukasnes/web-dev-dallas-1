const directionSpliter = (str) => {
  let arr = str.split(", ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newAction = arr[i][0].toUpperCase() + arr[i].slice(1)
    newArr.push([i + 1] + ". " + newAction);
  }

  return (newArr)
};

console.log(directionSpliter("crack egg, beat, fry, eat, get coffee, get coconut water"))
