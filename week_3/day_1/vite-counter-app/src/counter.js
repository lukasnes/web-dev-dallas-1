const setupCounter = (element,type) => {
    let counter = 0

    const setCounter = (count) => {
        counter = count
        console.log(counter)
        element.innerHTML = `Count is ${counter}`
    }
    if(type === 'plus'){
        element.addEventListener('click', () => setCounter(counter + 1))
    } else if(type === 'minus'){
        element.addEventListener('click', () => setCounter(counter - 1))
    }
    setCounter(0)
}

export default setupCounter