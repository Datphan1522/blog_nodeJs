const Course = require('../model/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class SiteController {

    //[GET] /home
    index(req, res, next) {
        Course
            .find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }


    //[GET] /news/:slug

    search(req, res) {
        res.render('search')
    }

}
module.exports = new SiteController