const ControllerHome = require('../controllers/home')
const routerHome = require('express').Router()


routerHome.get('/', ControllerHome.renderData)

module.exports = routerHome
