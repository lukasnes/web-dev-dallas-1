import setupCounter from "./src/counter.js"
import './styles.css'
console.log('Hello from main.js')

document.querySelector('#app').innerHTML = `
    <h1>Counter App</h1>

    <p>Click the button to increase the counter.</p>

    <div id="counter" class="counter"></div>
    <div id="another-one" class="counter"></div>
`
let plusCounter = document.querySelector('#counter')
setupCounter(plusCounter,'plus')
setupCounter(document.querySelector('#another-one'),'minus')