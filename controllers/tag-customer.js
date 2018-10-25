const Model = require('../models')

class ControllerTagCustomer {
    static renderData(req, res) {
        Model.Tag.findAll({
            include: Model.Product,
            order: [['id', 'asc']]
        })
            .then(function (data) {
                res.render('pages/tag-customer.ejs', { data: data })
                // res.send(data)
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static renderListProductByTag(req, res) {
        Model.Tag.findAll({
            include: Model.Product,
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.render('pages/tag-detail.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }


}

module.exports = ControllerTagCustomer