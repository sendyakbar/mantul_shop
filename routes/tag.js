const routerTag = require('express').Router()
const controllerTag = require('../controllers/tag')
const controllerTagCustomer = require('../controllers/tag-customer')

//RENDER DATA TAG PAGE
routerTag.get('/tags', controllerTag.renderData)

//RENDER DATA ADD TAG PAGE
routerTag.get('/tags/add', controllerTag.renderAddData)

//POST DATA TAG PAGE
routerTag.post('/tags/add', controllerTag.addData)

//DELETE PRODUCT
routerTag.get('/tags/delete/:id', controllerTag.deleteData)

//RENDER DATA EDIT TAG PAGE
routerTag.get('/tags/edit/:id', controllerTag.renderEditData)

//POST DATA EDIT TAG PAGE
routerTag.post('/tags/edit/:id', controllerTag.postEditData)

routerTag.get('/tags/user', controllerTagCustomer.renderData)

routerTag.get('/tags/user/detail/:id', controllerTagCustomer.renderListProductByTag)

module.exports = routerTag