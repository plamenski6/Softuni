const router = require('express').Router();
const handler = require('../handlers/model');
const isAuth = require('../utils/isAuth');

router.get('/create', isAuth(), handler.get.createCourse);
router.get('/details/:id', isAuth(), handler.get.detailsCourse);
router.get('/delete-course/:id', isAuth(), handler.get.deleteCourse);
router.get('/edit-course/:id', isAuth(), handler.get.editCourse);
router.get('/enroll-course/:id', isAuth(), handler.get.enrollCourse);

router.post('/create', isAuth(), handler.post.createCourse);
router.post('/edit-course/:id', isAuth(), handler.post.editCourse);


module.exports = router;