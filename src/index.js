const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')
    //connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

//middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//--------------
const exphbs = require('express-handlebars')
const hbs = exphbs.create({ extname: 'hbs' })
    //HTTP logger
    // app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views')) //cách mình tìm đến file

// console.log('PATH: ', path.join(__dirname, 'resources/views')) xem đường dẫn


//routes init
route(app)


app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`)
)