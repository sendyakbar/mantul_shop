const Model = require('../models')

class ControllerProductCustomer {

    static renderData(req, res) {
        Model.Product.findAll({
            order: [['id', 'asc']]
        })
            .then(function (data) {
                res.render('pages/product-customer.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    // static renderBuy(req, res) {
    //     Model.Product.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (data) {
    //             res.render('pages/product-customer.ejs', { data: data })
    //         })
    //         .catch(function (err) {
    //             res.send(err)
    //         })
    // }

    static postBuyNow(req, res) {
        Model.Product.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.send(data)
            })
            .catch(function (err) {
                res.send(err)
            })
    }

}

module.exports = ControllerProductCustomer