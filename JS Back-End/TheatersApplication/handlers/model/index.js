const User = require('../users/User');
const Model = require('./Model');

module.exports = {
    get: {
        createPlay(req, res, next) {
            res.render('theaters/create.hbs', {
                isLoggedIn: req.user !== undefined,
                username: req.user ? req.user.username : ''
            });
        },
        detailsPlay(req, res, next) {
            const { id } = req.params;

            Model.findById(id).populate('usersLiked').lean().then((play) => {
                res.render('theaters/details.hbs', {
                    isLoggedIn: req.user !== undefined,
                    username: req.user ? req.user.username : '',
                    play,
                    isCreator: JSON.stringify(req.user._id) === JSON.stringify(play.creator),
                    imAlreadyIn: JSON.stringify(play.usersLiked).includes(JSON.stringify(req.user._id))
                });
            });
        },
        likePlay(req, res, next) {
            const { id } = req.params;
            const { _id } = req.user;

            Promise.all([
                Model.updateOne({ _id: id }, { $push: { usersLiked: _id } }),
                User.updateOne({ _id }, { $push: { likedPlays: id } })
            ]).then(([updatedPlay, updatedUser]) => {
                res.redirect(`/play/details/${id}`);
            })
        },
        deletePlay(req, res, next) {
            const { id } = req.params;

            Model.deleteOne({ _id: id })
                .then((deletedPlay) => {
                    res.redirect('/home/');
                })
        },
        editPlay(req, res, next) {
            const { id } = req.params;

            Model.findById(id).lean().then((play) => {
                res.render('theaters/edit.hbs', {
                    isLoggedIn: req.user !== undefined,
                    username: req.user ? req.user.username : '',
                    play
                });
            });
        }
    },
    post: {
        createPlay(req, res, next) {
            const {
                title,
                description,
                imageUrl,
                isPublic: isChecked
            } = req.body;

            const isPublic = isChecked === 'on' ? true : false;
            const createdAt = (new Date() + '').slice(0, 24);
            const creator = req.user._id;

            if (title.length > 0) {

                if (description.length > 0) {

                    if (imageUrl.length > 0) {

                        Model.create({
                            title, description, imageUrl, isPublic, createdAt, creator
                        }).then((createdCourse) => {
                            res.redirect('/home/');
                        })

                    } else {
                        res.render('theaters/create.hbs', {
                            message: 'The imageUrl should not be empty'
                        })
                    }

                } else {
                    res.render('theaters/create.hbs', {
                        message: 'The description should not be empty'
                    })
                }

            } else {
                res.render('theaters/create.hbs', {
                    message: 'The title should not be empty'
                });
            }
        },
        editPlay(req, res, next) {
            const { id } = req.params;
            const {
                title,
                description,
                imageUrl,
                isPublic: isChecked
            } = req.body;

            const isPublic = isChecked === 'on' ? true : false;

            if (title.length > 0) {

                if (description.length > 0) {

                    if (imageUrl.length > 0) {

                        Model.findByIdAndUpdate(id, {
                            title,
                            description,
                            imageUrl,
                            isPublic
                        }).then((editedplay) => {
                            res.redirect(`/play/details/${id}`);
                        })

                    } else {
                        res.render('theaters/edit.hbs', {
                            message: 'The imageUrl should not be empty'
                        })
                    }

                } else {
                    res.render('theaters/edit.hbs', {
                        message: 'The description should not be empty'
                    })
                }

            } else {
                res.render('theaters/edit.hbs', {
                    message: 'The title should not be empty'
                });
            }


        }
    }
}