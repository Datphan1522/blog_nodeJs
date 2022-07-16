class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    //[GET] /news/:slug

    show(req, res) {
        res.send('NEW DERAIL !!!')
    }

}
module.exports = new NewsController