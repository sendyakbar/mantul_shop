const express = require('express')
const session = require('express-session')
const routerProduct = require('./routes/product')
const routerTag = require('./routes/tag')
const routerUser = require('./routes/user')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.use(session({secret: 'ajagijig'}))

app.use('/', routerProduct)
app.use('/', routerTag)
app.use('/', routerUser)

app.listen(port, function() {
    console.log(`this app listening on port: ${port}`)
})