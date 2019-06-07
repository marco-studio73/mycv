const router = require('express').Router();
const { skillsList, skillPost, skillDelete, skillEdit, skillUpdate } = require('../controllers/skills.controller');

router.get('/', skillsList);
router.get('/edit/:skillId', skillEdit )
router.post('/', skillPost);
router.post('/update/:tweetId', skillUpdate);
router.delete('/:skillId', skillDelete);

module.exports = router;