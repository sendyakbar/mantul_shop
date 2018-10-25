
class ControllerHome {
    static renderData(req, res) {
        res.render('pages/home.ejs')
    }
}

module.exports = ControllerHome