const router = require('express').Router();
const handler = require('../handlers/model');
const isAuth = require('../utils/isAuth');

router.get('/create', isAuth(), handler.get.createPlay);
router.get('/details/:id', isAuth(), handler.get.detailsPlay);
router.get('/delete/:id', isAuth(), handler.get.deletePlay);
router.get('/edit/:id', isAuth(), handler.get.editPlay);
router.get('/like/:id', isAuth(), handler.get.likePlay);


router.post('/create', isAuth(), handler.post.createPlay);
router.post('/edit/:id', isAuth(), handler.post.editPlay);


module.exports = router;