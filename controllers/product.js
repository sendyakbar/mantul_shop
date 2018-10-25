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
        Model.Tag.findAll()
            .then(function (data) {
                res.render('pages/product-add.ejs', { data: data })

            })
    }
    static addData(req, res) {
        Model.Product.create({
            name: req.body.name,
            color: req.body.color,
            size: req.body.size,
            price: req.body.price,
            stock: req.body.stock,
        })
            // .then(function (newProduct) {
            //     console.log(newProduct)
            // Model.Product_tag.create({
            //     TagId: Number(req.body.tags),
            //     ProductId: newProduct.id
            // .then(function (newProductTag) {
            //     console.log(newProductTag)
            // })
            .then(function (data) {
                for (let i = 0; i < req.body.tags.length; i++) {
                    var productTag = new Model.Product_tag({
                        TagId: req.body.tags[i],
                        ProductId: data.id
                    })
                    productTag.save()
                        .then(function () {
                            res.redirect('/product')
                        })
                }





                // res.send(arr)
            })
        // .catch(function (err) {
        //     res.send(err)
        // })

        // res.redirect('/product')
        //  })

        // })



        // .catch(function (err) {
        //     res.send(err)
        // })
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