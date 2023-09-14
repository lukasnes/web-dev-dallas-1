import lodash from 'lodash'
const capitalize = str => {
    return str[0].toUpperCase() + str.slice(1)
}

const createObj = (name,age,state,lovesCode) => {
    return { name,age,state,lovesCode }
}

const createArray = () => {
    let arr = []
    for(let i = 0; i < 10; i++){
        let randInt = lodash.random(1,100)
        arr.push(randInt)
    }
    return arr
}

const reverseNum = num => {
    let reverse = 0
    while(num){
        let digit = num % 10
        reverse += digit
        num -= digit
        num /= 10
        if(num){
            reverse *= 10
        }
    }

    return reverse
}

console.log(reverseNum(6475))

export {capitalize,createObj,createArray,reverseNum}