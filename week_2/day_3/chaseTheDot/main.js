const dot = document.querySelector('#dot')

let colors = ['red','blue','green','yellow','pink','purple','rebeccapurple']

const getRandomCoord = () => {
    return Math.random() * 90
}
const getRandArrVal = (arr) => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

const moveDot = (evt) => {
    console.log("Dot has been touched")

    evt.target.style.left = `${getRandomCoord()}vw`
    evt.target.style.top = `${getRandomCoord()}vh`
    evt.target.style.backgroundColor = getRandArrVal(colors)
    evt.target.style.width = `${getRandomCoord()}px`
    evt.target.style.height = `${getRandomCoord()}px`
}

dot.addEventListener('mouseover', moveDot)