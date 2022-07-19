const newRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const meRouter = require('./me')

function route(app) {

    app.use('/news', newRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', siteRouter)



    // app.post('/search', (req, res) => {
    //     console.log(req.body.name)
    //     res.render('search')
    // })

}

module.exports = route;