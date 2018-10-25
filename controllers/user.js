const Model = require('../models')

class ControllerUser {

    static renderFormRegister(req, res) {
        Model.User.findAll()
            .then(function(data) {
                res.render('pages/user-register.ejs')
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static addData(req, res) {
        let user = new Model.User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            role: "customer"
        })
        user.save()
            .then(function(user) {
                res.send('added')
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static renderProfileUser(req, res) {
        Model.User.findById(req.params.id)
            .then(function(data) {
                res.render('pages/user-profile', {data: data})
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static renderEditProfileForm(req, res) {
        Model.User.findById(req.params.id)
            .then(function(data) {
                res.render('pages/user-profile-edit.ejs', {data: data})
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static editUserProfile(req, res) {
        Model.User.update({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        }, {where: {id: req.params.id}})
        .then(function(data) {
            res.send('edited')
            // res.redirect('/user/profile/edit/:id')
        })
        .catch(function(err) {
            res.send(err)
        })
    }

    static deleteUser(req, res) {
        Model.User.destroy({where: {id: req.params.id}})
            .then(function(data) {
                res.send('deleted')
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static renderLoginForm(req, res) {
        res.render('pages/user-login.ejs')
    }


    static userLogin(req, res) {
        Model.User.findOne({where: {email: req.body.email}})
            .then(function(data) {
                if(data.password === req.body.password) {
                    req.session.user = {id: data.id, name: data.name, email: data.email, phone: data.phone, role: data.role, cart: []}
                    res.send(req.session)
                } else {
                    res.send('wrong password')
                }
            })
    }
}

module.exports = ControllerUser