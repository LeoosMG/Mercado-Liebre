const express = require('express')
const path = require('path')

const app = express()
const PORT= process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/login.html"))
})


const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`[server]: running at port ${port} (http://localhost:${port}/).`);
})