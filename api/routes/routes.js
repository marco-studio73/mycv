const router = require('express').Router();
const skills = require('./skills.route');

router.use('/skills', skills);


module.exports = router;