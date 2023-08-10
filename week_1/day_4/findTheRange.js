let arr = [1, 4, 11, 2, 37, -4]
// console.log(arr[5])
let lowest = arr[0]
let highest;

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    if(arr[i] < lowest){
        lowest = arr[i]
    }

    if(arr[i] > highest || highest === undefined){
        highest = arr[i]
    }
}

console.log(`Inside the array ${arr}, the lowest value is ${lowest} and the highest value is ${highest}`)