const hasMore = str => {
    str = str.toLowerCase()
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }

    return vowelCount > (str.length / 2)
}

console.log(hasMore('hello'))
console.log(hasMore('banana'))
console.log(hasMore('mOose'))
console.log(hasMore('mouse'))