// We are going to need a function that receives a number as a parameter

const luckyNums = (n) => {
    //This function will create an array, and return it
    let set = new Set()
    //This function should continue to run, while our array length is less than our number
    while(set.size < n){
        //Generate random numbers between 1-10
        let randInt = Math.ceil(Math.random() * 10)
        //Write some code that will allow us to check if the array already contains the generated number
        // console.log(`Current Array: ${arr}; Current random integer: ${randInt}`)
        // if(!arr.includes(randInt)){
        //     arr.push(randInt)
        // }
        set.add(randInt)
    }
    return [...set]
}

console.log(luckyNums(3))
console.log(luckyNums(7))
console.log(luckyNums(10))

console.log(![1,2,3].includes(2))


console.log([...new Set([1,1,1,2,3,4,4,4,4,5])])

let str = "Hello I am a string"
console.log([...str])
let numArr = [1,2,3,4,5,6,7]

let copyArr = [...numArr]

let obj = {
    name: "lukas",
    age: 26
}

let objCopy = {...obj, name:"Greta"}
console.log(objCopy)