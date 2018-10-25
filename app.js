const express = require('express')
const routerProduct = require('./routes/product')
const routerTag = require('./routes/tag')
const routerUser = require('./routes/user')
const routerHome = require('./routes/home')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', routerProduct)
app.use('/', routerTag)
app.use('/', routerUser)
app.use('/', routerHome)

app.listen(port, function () {
    console.log(`this app listening on port: ${port}`)
})