let arr = [
    {
        name: "Pizza",
        price: 11.99
    },
    {
        name: "Hot Dog",
        price: 5.99
    },
    {
        name: "Lobster",
        price: 28.99
    },
    {
        name: "Sushi",
        price: 13.99
    },
    {
        name: "Salad",
        price: 8.99
    }
]

arr.forEach((foodObj) => {
    if(foodObj.price > 10){
        foodObj.cheap = false
    } else {
        foodObj.cheap = true
    }
})

console.log(arr)

let inflationPrices = arr.map((foodObj) => {
    let { price } = foodObj
    let newPrice = price + (price * .25)
    return {...foodObj, price: newPrice}
    // return 1
})

console.log(inflationPrices)

let numArrOne = [1,2,3,4,5]
let numArrTwo = [6,7,8,9,10]
let numCombined = [...numArrOne,...numArrTwo]
console.log(numCombined)

let personObjOne = {
    name: "Lukas",
    age: 26
}
let personObjTwo = {
    name: "Parker",
    height: `6'4"`
}
let personCombined = {...personObjOne,...personObjTwo}
console.log(personCombined)

let expensiveFoods = inflationPrices.filter((foodObj) => foodObj.cheap === false)
console.log(expensiveFoods)
console.log("=========================")
let expensiveTotal = expensiveFoods.reduce((acc,curr) => {
    // console.log(curr)
    let { price } = curr
    return acc + price
},0)
console.log(expensiveTotal)

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    let foodObj = arr[i]
    for(let key in foodObj){
        console.log(key)
        if(key === "cheap"){
            foodObj[key] = false
        }
    }
}

console.log(arr)