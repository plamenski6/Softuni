const Model = require('../model/Model');

module.exports = {
    get: {
        home(req, res, next) {

            const isLoggedIn = (req.user !== undefined);

            const limit = isLoggedIn ? 0 : 3;
            const criteria = isLoggedIn ? {createdAt: '-1'} : {usersLiked: '-1'};

            Model
            .find()
            .limit(limit)
            .sort(criteria)
            .lean()
            .then((c) => {

                const plays = c.reduce((acc, curr) => {
                    acc.push({...curr, isLoggedIn})
                    return acc;
                }, []);

                res.render('home/home.hbs', {
                    isLoggedIn,
                    username: req.user ? req.user.username : '',
                    plays
                });
            });

        }
    }
};