const routerUser = require('express').Router()
const ControllerUser = require('../controllers/user')

routerUser.get('/user/register', ControllerUser.renderFormRegister)

routerUser.post('/user/register', ControllerUser.addData)

routerUser.get('/user/profile/:id', ControllerUser.renderProfileUser)

routerUser.get('/user/profile/edit/:id', ControllerUser.renderEditProfileForm)

routerUser.post('/user/profile/edit/:id', ControllerUser.editUserProfile)

routerUser.get('/user/profile/delete/:id', ControllerUser.deleteUser)

routerUser.get('/user/login', ControllerUser.renderLoginForm)

routerUser.post('/user/login', ControllerUser.userLogin)



module.exports = routerUser