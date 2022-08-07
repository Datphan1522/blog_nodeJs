const Course = require('../model/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCourse]) => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses),
                deleteCourse
            }))
            .catch(next)

        // Course.countDocumentsDeleted()
        //     .then(deleteCourse)
        //     .catch(() => {})

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))
        //     .catch(next)

    }

    //[GET] /me/bin/courses
    binCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/bin-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)

    }


}
module.exports = new MeController