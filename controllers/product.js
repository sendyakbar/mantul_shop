const Model = require('../models')

class ControllerProduct {

    static renderData(req, res) {
        Model.Product.findAll({
            order: [['id', 'asc']]
        })
            .then(function (data) {
                res.render('pages/product-admin.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static renderDataAdd(req, res) {
        res.render('pages/product-add.ejs')
    }
    static addData(req, res) {
        let product = new Model.Product({
            name: req.body.name,
            color: req.body.color,
            size: req.body.size,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        })
        product.save()
            .then(function () {
                res.redirect('/product')
            })
    }

    static deleteData(req, res) {
        Model.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/product')
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static renderEditData(req, res) {
        Model.Product.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.render('pages/product-edit.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static postEditData(req, res) {
        Model.Product.update({
            name: req.body.name,
            color: req.body.color,
            size: req.body.size,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function () {
                res.redirect('/product')
            })
    }

}

module.exports = ControllerProduct