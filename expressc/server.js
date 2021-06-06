const express = require ('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const routes = require('./routes/songRoutes.js')

routes(app)

app.listen(3000)