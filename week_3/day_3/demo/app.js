import express from 'express'
import nunjucks from 'nunjucks'
import session from 'express-session'

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'sssshhhhhh',
    saveUninitialized: true,
    resave: false
}))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', (req,res) => {
    res.render('home.html.njk',{
        username: req.session.username
    })
})

app.get('/login', (req,res) => {
    res.render('login.html.njk')
})

app.post('/login', (req,res) => {
    console.log(req.body)
    console.log(req.session)
    req.session.username = req.body.username
    res.redirect('/')
})

app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.listen(4000, () => console.log('Running on port 4000!'))