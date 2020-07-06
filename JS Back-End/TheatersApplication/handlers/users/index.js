const User = require('./User');
const jwt = require('../../utils/jwt');
const { cookie } = require('../../config/config');

module.exports = {
    get: {
        login(req, res, next) {
            res.render('users/login.hbs');
        },
        register(req, res, next) {
            res.render('users/register.hbs');
        },
        logout(req, res, next) {
            req.user = null;
            res.clearCookie(cookie).redirect('/home/');
        }
    },
    post: {
        login(req, res, next) {
            
            const { username, password } = req.body;
            const pattern = /^[A-Za-z0-9]+$/;

            if (username.length >= 3 && pattern.test(username)) {

                if (password.length >= 3 && pattern.test(password)) {

                    User.findOne({ username })
                        .then((user) => {
                            return Promise.all([user.passwordsMatch(password), user]);
                        }).then(([match, user]) => {
                            if (!match) {
                                next(err);
                                return;
                            }

                            const token = jwt.createToken(user);

                            res.status(201)
                                .cookie(cookie, token, { maxAge: 3600000 })
                                .redirect('/home/');
                        })

                } else {
                    return res.render('users/login', {
                        message: 'Password must be at least 3 characters long and should consist only english letters and digits'
                    });
                }

            } else {
                return res.render('users/login', {
                    message: 'Username must be at least 3 characters long and should consist only english letters and digits'
                });
            }

        },
        register(req, res, next) {

            const { username, password, repeatPassword } = req.body;
            const pattern = /^[A-Za-z0-9]+$/;

            if (username.length >= 3 && pattern.test(username)) {

                if (password.length >= 3 && pattern.test(password)) {

                    if (password === repeatPassword) {

                        User.create({
                            username,
                            password
                        }).then((createdUser) => {
                            res.redirect('/user/login');
                        }).catch((err) => {
                            res.render('users/register', {
                                message: err.message
                            })
                        })

                    } else {
                        return res.render('users/register', {
                            message: 'Password and repeatPassword must be equal'
                        });
                    }

                } else {
                    return res.render('users/register', {
                        message: 'Password must be at least 3 characters long and should consist only english letters and digits'
                    });
                }

            } else {
                return res.render('users/register', {
                    message: 'Username must be at least 3 characters long and should consist only english letters and digits'
                });
            }

        }
    }
};