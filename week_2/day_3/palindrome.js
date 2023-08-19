const isPalindrome = (str) => {
    let splitStr = str.split('')
    // console.log(splitStr)
    splitStr = splitStr.reverse()
    // console.log(splitStr)
    let reversed = splitStr.join('')
    // console.log(reversed)
    return reversed === str
    // if(reversed === str){
    //     return true
    // } else {
    //     return false
    // }
}
const oneliner = str => str.split('').reverse().join('') === str

const backAndFrontCheck = str => {
    let front = 0
    let back = str.length - 1
    while(front < back){
        if(str[front] !== str[back]){
            return false
        }
        front++
        back--
    }
    return true
}

console.log(backAndFrontCheck('racecar'))
console.log(backAndFrontCheck('Racecar'))
console.log(backAndFrontCheck('apple'))