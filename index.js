require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Karthik Sarode')
})

app.get('/twitter', (req, res) => {
    res.send('This is twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login here for the fun')
})

app.listen(process.env.PORT, () => {
    console.log('Listening to port 3000 in  Karthiks macBook')
})