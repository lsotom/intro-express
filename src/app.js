const path = require('path')
const express = require('express')

const app = express()

// Path 
const publicDirectoryPath = path.join(__dirname, '../public')

// Configurar HBS
app.set('view engine', 'hbs') 

// Configurar contenido estatico
app.use(express.static(publicDirectoryPath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        createdby: 'Luis Soto'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>')
})

app.get('/help/css', (req, res) => {
    res.send('<h1>Ayuda de CSS</h1>')
})

app.get('/test', (req, res) => {
    console.log(req.query.id)
    res.send({ name: 'Luis', age: 43})
})



// localhost
// localhost/about
// localhost/help


app.listen(3000, () => {
    console.log('Corriendo en http://localhost:3000')
})