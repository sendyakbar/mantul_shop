const routerProduct = require('express').Router()
const ControllerProduct = require('../controllers/product')

//GET PAGE PRODUCTS
routerProduct.get('/product', ControllerProduct.renderData)

//GET ADD PRODUCT PAGE
routerProduct.get('/product/add', ControllerProduct.renderDataAdd)

//POST ADD PRODUCT
routerProduct.post('/product/add', ControllerProduct.addData)

//GET DELETE PRODUCT
routerProduct.get('/product/delete/:id', ControllerProduct.deleteData)

//GET EDIT PRODUCT
routerProduct.get('/product/edit/:id', ControllerProduct.renderEditData)

//POST  EDIT PRODUCT
routerProduct.post('/product/edit/:id', ControllerProduct.postEditData)

module.exports = routerProduct