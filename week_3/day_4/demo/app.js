import express from 'express'
import ViteExpress from 'vite-express'
import bodyParser from 'body-parser'

const app = express();
const port = 8000
ViteExpress.config({printViteDevServerHost: true})

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: '.'})
})

app.post('/order-cookies', (req,res) => {
    console.log(req.body)
    let totalPrice
    if(req.body.cookieType === 'Snickerdoodle'){
        totalPrice = req.body.qty * 2.25
    }else{
        totalPrice = req.body.qty * 3
    }

    res.json({msg: `Your Order is $${totalPrice}`, totalPrice: totalPrice})
})


ViteExpress.listen(app, port, () => {
    console.log(`Server running on localhost${port}`)
})