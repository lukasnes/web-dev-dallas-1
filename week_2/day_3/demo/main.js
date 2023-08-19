const circle = document.querySelector('#circle')
const btns = document.querySelectorAll('.color-btn')
const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')
console.log(btns)

const circleClick = (evt) => {
    console.log(evt.target.id)
    evt.target.style.backgroundColor = '#E567D3'
}

const changeColor = (evt) => {
    console.log(evt.target)
    circle.style.backgroundColor = evt.target.id
}

const addName = (evt) => {
    evt.preventDefault()
    console.log(input.value)
    let listItem = document.createElement('li')
    listItem.textContent = input.value
    list.appendChild(listItem)

    listItem.addEventListener('click',deleteName)

    input.value = ''
}

const deleteName = (evt) => {
    evt.target.remove()
}
// circle.style.backgroundColor = '#E567D3'

circle.addEventListener('click', circleClick)
btns.forEach(button => {
    button.addEventListener('click', changeColor)
})
form.addEventListener('submit', addName)