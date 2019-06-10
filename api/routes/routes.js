const router = require('express').Router();
const skills = require('./skills.route');
const experiences = require('./experience.route')

router.use('/skills', skills);
router.use('/experiences', experiences);

module.exports = router;