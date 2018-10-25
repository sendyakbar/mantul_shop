const Model = require('../models')

class ControllerTag {
    static renderData(req, res) {
        Model.Tag.findAll({
            order: [['id', 'asc']]
        })
            .then(function (data) {
                res.render('pages/tag.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddData(req, res) {
        res.render('pages/tag-add.ejs')
    }
    static addData(req, res) {
        let tag = new Model.Tag({
            name: req.body.name
        })
        tag.save()
            .then(function () {
                res.redirect('/tags')
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static deleteData(req, res) {
        Model.Tag.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/tags')
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static renderEditData(req, res) {
        Model.Tag.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (data) {
                res.render('pages/tag-edit.ejs', { data: data })
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static postEditData(req, res) {
        Model.Tag.update({
            name: req.body.name
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function () {
                res.redirect('/tags')
            })
    }

}

module.exports = ControllerTag