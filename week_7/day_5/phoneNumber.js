// const phoneNumber = (arr) => {
//     return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
// }

const phoneNumber = (arr,str) => {
    // let template = '(xxx) xxx-xxxx'

    for(let i = 0; i < arr.length;i++){  //O(n)
        str = str.replace('x',arr[i])   //O(n)
    }

    return str
}
// O(n * n)
// O(n^2)
console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0],'(xxx) xxx-xxxx'))
console.log(phoneNumber([1,2,3,4,5,6,7,8],'xx xx xx xx'))