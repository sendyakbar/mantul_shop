const routerProduct = require('express').Router()
const ControllerProduct = require('../controllers/product')
const ControllerProductCustomer = require('../controllers/product-customer')

//GET PAGE PRODUCTS ADMIN
routerProduct.get('/product', ControllerProduct.renderData)

//GET ADD PRODUCT PAGE ADMIN
routerProduct.get('/product/add', ControllerProduct.renderDataAdd)

//POST ADD PRODUCT ADMIN
routerProduct.post('/product/add', ControllerProduct.addData)

//GET DELETE PRODUCT ADMIN
routerProduct.get('/product/delete/:id', ControllerProduct.deleteData)

//GET EDIT PRODUCT ADMIN
routerProduct.get('/product/edit/:id', ControllerProduct.renderEditData)

//POST  EDIT PRODUCT ADMIN
routerProduct.post('/product/edit/:id', ControllerProduct.postEditData)

//GET PAGE PRODUCT CUSTOMER
routerProduct.get('/product/buy', ControllerProductCustomer.renderData)




module.exports = routerProduct