const router = require('../routes');

module.exports = (app) => {

    app.use('/home', router.home);

    app.use('/user', router.users);

    app.use('/course', router.models);

    app.use('*', (req, res, next) => {
        res.render('404', {
            isLoggedIn: req.user !== undefined,
            username: req.user ? req.user.username : ''
        });
    });
};