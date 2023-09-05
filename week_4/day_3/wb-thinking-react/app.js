import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import idGenerator from './src/utils/idGenerator.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config( { printViteDevServerHost: true } )

const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];
const getId = idGenerator(TEST_DATA.length)

app.get('/api/invoice', (req,res) => {
    res.json(TEST_DATA)
})

app.post('/api/invoice', (req,res) => {
    const { description,rate,hours } = req.body

    const newItem = {
        id: getId.next().value,
        description,
        rate,
        hours
    }

    TEST_DATA.push(newItem)
    res.json(TEST_DATA)
})

app.post('/api/invoice/:id/delete',(req,res) => {
    let { id } = req.params

    const index = TEST_DATA.findIndex((invoice) => invoice.id === +id)
    TEST_DATA.splice(index,1)

    res.json(TEST_DATA)
})

app.post('/api/invoice/:id/edit', (req,res) => {
    let { id } = req.params
    let { description,rate,hours } = req.body

    const index = TEST_DATA.findIndex((invoice) => invoice.id === +id)

    const invoice = TEST_DATA[index]

    invoice.description = description ?? invoice.description
    invoice.rate = rate ?? invoice.rate
    invoice.hours = hours ?? invoice.hours

    res.json(invoice)
})


ViteExpress.listen(app,port, () => console.log(`Server listening on http://localhost:${port}`))